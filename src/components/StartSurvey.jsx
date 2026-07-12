import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowLeft, FaCheck } from "react-icons/fa";

import { VARIANTS, QUALIFIER, DEFAULT_VARIANT } from "../data/startVariants";
import { packages } from "../data/packages";
import { fbCustom, fbStandard } from "../lib/pixel";
import { WHATSAPP_PHONE, getWhatsAppLink } from "../lib/whatsapp";

const TRUST_ITEMS = {
  sr: ["Registrovana firma", "Besplatan prvi termin", "Garancija zadovoljstva"],
  en: ["Registered company", "Free first appointment", "Satisfaction guarantee"],
};

/* Q3 (the qualifier) disqualifies for two very different reasons —
   a warm lead just outside today's service area vs. someone who
   isn't a fit for the service at all. Each gets its own soft-exit
   copy; only the outside-area one keeps a WhatsApp CTA. */
const SOFT_EXIT_CONTENT = {
  sr: {
    "outside-area": {
      body: "Trenutno pružamo uslugu redovnog čišćenja samo za kuće sa dvorištem na teritoriji Beograda. Ako želite da budete među prvima koji će saznati kada proširimo pokrivenost i na Vaš region, pošaljite nam poruku putem WhatsApp-a. Rado ćemo Vas obavestiti čim budemo dostupni i u Vašem mestu.",
      ctaText: "Obavestite me kada budete dostupni",
      waMessage:
        "Zdravo! Trenutno sam van zone pokrivenosti (van Beograda), ali zelim da me obavestite kada usluga bude dostupna i u mom mestu.",
    },
    "no-yard": {
      body: "Nažalost, trenutno ne pružamo uslugu za kuće bez dvorišta. Hvala što ste izdvojili vreme da odgovorite na pitanja!",
    },
  },
  en: {
    "outside-area": {
      body: "We currently offer regular cleaning only for houses with a yard within Belgrade. If you'd like to be among the first to know when we expand coverage to your area, send us a message on WhatsApp. We'll happily let you know as soon as we're available in your area.",
      ctaText: "Notify me when you're available",
      waMessage:
        "Hello! I'm currently outside the coverage zone (outside Belgrade), but I'd like to be notified when the service becomes available in my area.",
    },
    "no-yard": {
      body: "Unfortunately, we don't currently offer the service for homes without a yard. Thanks for taking the time to answer our questions!",
    },
  },
};

const UI_TEXT = {
  sr: {
    back: "Nazad",
    changeAnswers: "Promenite odgovore",
    thanks: "Hvala na interesovanju! 🙏",
    resultHeading: "Poslednji korak: Vaše besplatno prvo čišćenje",
    recommendationTag: "Naša preporuka",
    finePrint:
      "Prvo čišćenje je gratis uz bilo koju mesečnu pretplatu. Niste zadovoljni? Otkazujete, ne plaćate ništa.",
    ctaBook: "Zakažite besplatno prvo čišćenje na WhatsApp →",
    stepLabel: (n) => `Korak ${n} od 3`,
    introText:
      "Odgovorite na nekoliko kratkih pitanja kako bismo preporučili paket koji najbolje odgovara Vašem dvorištu.",
    microcopy: "Odaberite odgovor koji Vas najbolje opisuje.",
    remaining: (step) => {
      const remaining = 2 - step;
      if (remaining <= 0) return "Poslednje pitanje";
      if (remaining === 1) return "Još 1 pitanje";
      return `Još ${remaining} pitanja`;
    },
  },
  en: {
    back: "Back",
    changeAnswers: "Change answers",
    thanks: "Thanks for your interest! 🙏",
    resultHeading: "Last step: your free first cleaning",
    recommendationTag: "Our recommendation",
    finePrint:
      "Your first cleaning is free with any monthly subscription. Not satisfied? Cancel, and pay nothing.",
    ctaBook: "Book your free first cleaning on WhatsApp →",
    stepLabel: (n) => `Step ${n} of 3`,
    introText:
      "Answer a few quick questions so we can recommend the package that best fits your yard.",
    microcopy: "Choose the answer that describes you best.",
    remaining: (step) => {
      const remaining = 2 - step;
      if (remaining <= 0) return "Last question";
      if (remaining === 1) return "1 question left";
      return `${remaining} questions left`;
    },
  },
};

/* 3-tap survey: Q1 self-identification (variant-specific) → Q2
   imagine the solution (variant-specific, also picks a package
   tier) → Q3 qualification gate (shared, asked LAST so the
   practical logistics question doesn't interrupt the emotional
   thread) → recommendation card, with the WhatsApp CTA using the
   same site-wide prefilled message as every other CTWA button
   (deliberately not built from the survey answers — kept simple).

   Tap-to-advance, no "Next" button — picking an option is the
   only tap needed to move forward. A "Nazad"/"Back" control lets
   people revisit and change an earlier answer; since the
   recommendation is derived straight from the current answers,
   changing Q2 (or flipping Q3 between qualified/disqualified)
   recomputes it live. */
function StartSurvey({ variantKey, language, onRecommend, onStepChange }) {
  const lang = language === "en" ? "en" : "sr";
  const V = (VARIANTS[variantKey] ?? VARIANTS[DEFAULT_VARIANT])[lang];
  const qualifier = QUALIFIER[lang];
  const ui = UI_TEXT[lang];
  const trustItems = TRUST_ITEMS[lang];
  const localizedPackages = packages[lang];

  const [step, setStep] = useState(0); // 0..2 questions, 3 result, 4 soft-exit
  const [answers, setAnswers] = useState({ q1: null, q2: null, q3: null });

  const answerQ1 = (label) => {
    setAnswers((a) => ({ ...a, q1: label }));
    fbCustom("SurveyStart", { variant: variantKey });
    setStep(1);
  };

  const answerQ2 = (opt) => {
    setAnswers((a) => ({ ...a, q2: opt }));
    onRecommend?.(opt.tier);
    setStep(2);
  };

  const answerQ3 = (opt) => {
    setAnswers((a) => ({ ...a, q3: opt }));
    if (!opt.qualified) {
      fbCustom("SurveyDisqualified", { variant: variantKey, reason: opt.home });
      setStep(4);
    } else {
      fbCustom("QualifiedLead", { variant: variantKey, tier: answers.q2?.tier });
      fbStandard("Lead", { content_name: variantKey });
      setStep(3);
    }
  };

  // Soft-exit's only prior step is Q3, the qualifier (that's what
  // disqualified them); every other step just steps back by one.
  const goBack = () => setStep((s) => (s === 4 ? 2 : Math.max(s - 1, 0)));

  // Re-anchor scroll to the top of the card on result/soft-exit so
  // its position is deterministic rather than wherever the user
  // happened to leave off scrolling through the questions.
  useEffect(() => {
    if (step === 3 || step === 4) {
      document.getElementById("upitnik")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  // Tell the page which step we're on so it can hide the floating
  // WhatsApp button while the result/soft-exit screen shows its own
  // CTA — on short mobile viewports the card can be taller than the
  // viewport, so no amount of spacing reliably keeps the fixed
  // button clear of it; not rendering both at once sidesteps that.
  useEffect(() => {
    onStepChange?.(step);
  }, [step, onStepChange]);

  const tier = answers.q2?.tier ?? "Standard";
  const recommendedPlan = localizedPackages.find((p) => p.name === tier);

  const waSoftExitLink = (message) =>
    `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

  const onWhatsAppClick = () => {
    fbStandard("Contact", { content_name: variantKey, tier });
  };

  /* ---------- soft exit ---------- */
  if (step === 4) {
    // Note: no fbStandard("Contact"/"Lead") on this path, on either
    // branch — pixel conditioning rule, the algorithm should only
    // learn from qualified completions (see the result-screen path).
    const exit =
      SOFT_EXIT_CONTENT[lang][answers.q3?.exitType] ?? SOFT_EXIT_CONTENT[lang]["no-yard"];
    return (
      <div id="upitnik" className="start-survey">
        <button type="button" className="start-survey-back" onClick={goBack}>
          <FaArrowLeft /> {ui.back}
        </button>
        <div key={step} className="start-survey-step">
          <p className="start-survey-question">{ui.thanks}</p>
          <p className="start-survey-intro">{exit.body}</p>
          {exit.ctaText && (
            <a
              href={waSoftExitLink(exit.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="start-cta-btn start-survey-cta"
            >
              <FaWhatsapp /> {exit.ctaText}
            </a>
          )}
          {exit.footer && <p className="start-survey-fine-print">{exit.footer}</p>}
        </div>
      </div>
    );
  }

  /* ---------- result ---------- */
  if (step === 3) {
    return (
      <div id="upitnik" className="start-survey">
        <div className="start-survey-bar">
          <div className="start-survey-fill" style={{ width: "100%" }} />
        </div>
        <button type="button" className="start-survey-back" onClick={goBack}>
          <FaArrowLeft /> {ui.changeAnswers}
        </button>
        <div key={step} className="start-survey-step">
          <p className="start-survey-question">{ui.resultHeading}</p>
          <div className="start-package-card featured start-survey-package-card">
            <div className="start-popular-tag">{ui.recommendationTag}</div>
            <h3>{recommendedPlan.name}</h3>
            <div className="start-package-price">
              {recommendedPlan.price}
              <span>{recommendedPlan.period}</span>
            </div>
            <ul>
              {recommendedPlan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <p className="start-survey-fine-print">{ui.finePrint}</p>
          <div className="start-survey-trust">
            {trustItems.map((item) => (
              <span key={item} className="start-survey-trust-item">
                <FaCheck /> {item}
              </span>
            ))}
          </div>
          <a
            href={getWhatsAppLink(lang)}
            onClick={onWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="start-cta-btn start-survey-cta"
          >
            <FaWhatsapp /> {ui.ctaBook}
          </a>
        </div>
      </div>
    );
  }

  /* ---------- questions ---------- */
  const questions = [
    { data: V.q1, onPick: answerQ1, currentAnswer: answers.q1 },
    { data: V.q2, onPick: answerQ2, currentAnswer: answers.q2?.label },
    { data: qualifier, onPick: answerQ3, currentAnswer: answers.q3?.label },
  ];
  const { data, onPick, currentAnswer } = questions[step];
  const progress = ((step + 1) / 3) * 100;

  return (
    <div id="upitnik" className="start-survey">
      <div className="start-survey-progress-row">
        <span>{ui.stepLabel(step + 1)}</span>
        <span className="start-survey-progress-percent">{Math.round(progress)}%</span>
      </div>
      <div className="start-survey-bar">
        <div className="start-survey-fill" style={{ width: `${progress}%` }} />
      </div>
      {step > 0 && (
        <button type="button" className="start-survey-back" onClick={goBack}>
          <FaArrowLeft /> {ui.back}
        </button>
      )}
      {step === 0 && <p className="start-survey-intro">{ui.introText}</p>}
      <div key={step} className="start-survey-step">
        <p className="start-survey-question">{data.q}</p>
        <p className="start-survey-microcopy">{ui.microcopy}</p>
        {data.options.map((o) => {
          const label = typeof o === "string" ? o : o.label;
          const isSelected = label === currentAnswer;
          return (
            <button
              key={label}
              className={`start-survey-option ${isSelected ? "selected" : ""}`}
              onClick={() => onPick(o)}
            >
              {label}
            </button>
          );
        })}
        <p className="start-survey-step-note">{ui.remaining(step)}</p>
      </div>
    </div>
  );
}

export default StartSurvey;

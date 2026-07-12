import { useContext, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaPlus,
  FaMinus,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import heroVideo from "../assets/hero-video.mp4";
import WhatsAppButton from "../components/WhatsAppButton";
import StartSurvey from "../components/StartSurvey";
import { VARIANTS, DEFAULT_VARIANT, getVariantKey } from "../data/startVariants";
import { packages } from "../data/packages";
import { getWhatsAppLink } from "../lib/whatsapp";
import { fbStandard } from "../lib/pixel";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

/* Copy specific to this page's offer section — everything else
   (FAQ, Kontakt, hero note) reuses translations.js directly since
   the content is identical to the main site. */
const OFFER_TEXT = {
  sr: {
    badge:
      "Prvo čišćenje je gratis uz bilo koju mesečnu pretplatu. Niste zadovoljni? Otkazujete, ne plaćate ništa.",
    note: "Za 2 psa: +2.000 RSD mesečno · Za 3+ psa: po dogovoru",
    cta: "Zakažite besplatno prvo čišćenje na WhatsApp →",
    recommendationTag: "Naša preporuka",
    popularTag: "Najpopularniji",
  },
  en: {
    badge:
      "Your first cleaning is free with any monthly subscription. Not satisfied? Cancel, and pay nothing.",
    note: "For 2 dogs: +2,000 RSD/month · For 3+ dogs: custom quote",
    cta: "Book your free first cleaning on WhatsApp →",
    recommendationTag: "Our recommendation",
    popularTag: "Most popular",
  },
};

function StartPage() {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];
  const offerText = OFFER_TEXT[language] ?? OFFER_TEXT.sr;
  const localizedPackages = packages[language] ?? packages.sr;

  const [openFaqKey, setOpenFaqKey] = useState(null);
  const toggleFaq = (key) =>
    setOpenFaqKey(openFaqKey === key ? null : key);

  const [searchParams] = useSearchParams();
  const variantKey = useMemo(() => getVariantKey(searchParams), [searchParams]);
  const V = (VARIANTS[variantKey] ?? VARIANTS[DEFAULT_VARIANT])[language] ??
    VARIANTS[DEFAULT_VARIANT].sr;

  const [recommendedTier, setRecommendedTier] = useState(null);
  const [surveyStep, setSurveyStep] = useState(0);
  // Result (3) and soft-exit (4) screens carry their own WhatsApp CTA
  // that can be as tall as (or taller than) short mobile viewports —
  // hide the floating button then so it never sits on top of it.
  const hideFloatingWhatsApp = surveyStep === 3 || surveyStep === 4;

  const scrollToSurvey = (e) => {
    e.preventDefault();
    document.getElementById("upitnik")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="start-page">
      {/* 1. Hero — full-bleed video, same treatment as the main site.
          Headline/sub/CTA come from the ?v= ad-set variant; the CTA
          scrolls to the survey rather than opening WhatsApp directly,
          so cold ad traffic gets message-matched, qualified, and
          routed to the right package before they chat. */}
      <section className="start-hero">
        <video className="start-hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="start-hero-overlay" />

        <div className="start-hero-lang-switch">
          <button
            onClick={() => setLanguage("sr")}
            className={language === "sr" ? "active" : ""}
          >
            SR
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={language === "en" ? "active" : ""}
          >
            EN
          </button>
        </div>

        <div className="container start-hero-content">
          <div className="start-hero-text">
            <p className="start-hero-eyebrow">{V.hero.eyebrow}</p>
            <h1>{V.hero.headline}</h1>
            <p>{V.hero.sub}</p>
            <a href="#upitnik" onClick={scrollToSurvey} className="start-cta-btn">
              <FaWhatsapp /> {V.hero.cta} ↓
            </a>
            <p className="start-hero-note">{t.heroNote}</p>
          </div>
        </div>

        <Link to="/" className="start-hero-corner-logo">
          <img src={logo} alt="BezKake" />
        </Link>
      </section>

      {/* 2. Survey — 3 taps, qualifies + recommends a package */}
      <section className="start-survey-section">
        <StartSurvey
          variantKey={variantKey}
          language={language}
          onRecommend={setRecommendedTier}
          onStepChange={setSurveyStep}
        />
      </section>

      {/* 3. Offer box — the recommended tier (once the survey completes)
          takes over the "featured" card treatment from the default Standard */}
      <section className="start-offer" id="paketi">
        <div className="start-offer-badge">
          <FaShieldAlt /> {offerText.badge}
        </div>

        <div className="start-packages">
          {localizedPackages.map((plan) => {
            const isFeatured = recommendedTier
              ? plan.name === recommendedTier
              : plan.name === "Standard";
            const tag = recommendedTier
              ? isFeatured
                ? offerText.recommendationTag
                : null
              : plan.name === "Standard"
              ? offerText.popularTag
              : null;

            return (
              <div
                key={plan.name}
                className={`start-package-card ${isFeatured ? "featured" : ""}`}
              >
                {tag && <div className="start-popular-tag">{tag}</div>}
                <h3>{plan.name}</h3>
                <div className="start-package-price">
                  {plan.price}
                  <span>{plan.period}</span>
                </div>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="start-offer-note">{offerText.note}</p>

        <a
          href={getWhatsAppLink(language)}
          target="_blank"
          rel="noopener noreferrer"
          className="start-cta-btn"
          onClick={() => fbStandard("Contact", { content_name: `start_offer_${variantKey}` })}
        >
          <FaWhatsapp /> {offerText.cta}
        </a>
      </section>

      {/* 4. FAQ — high on the page, same content/format as the main site */}
      <section className="faq">
        <div className="container">
          <div className="section-title">
            <h2>{t.faqTitle}</h2>
            <p>{t.faqSubtitle}</p>
          </div>

          <div className="faq-categories">
            {t.faqCategories.map((cat) => (
              <div className="faq-category" key={cat.category}>
                <p className="faq-category-label">{cat.category}</p>

                <div className="faq-list">
                  {cat.items.map((item) => {
                    const key = `${cat.category}-${item.q}`;
                    const isOpen = openFaqKey === key;

                    return (
                      <div
                        key={key}
                        className={`faq-item ${isOpen ? "open" : ""}`}
                        onClick={() => toggleFaq(key)}
                      >
                        <div className="faq-question">
                          <span>{item.q}</span>
                          {isOpen ? (
                            <FaMinus className="faq-icon" />
                          ) : (
                            <FaPlus className="faq-icon" />
                          )}
                        </div>
                        <div className="faq-answer">{item.a}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Kontakt — same content/format as the main site */}
      <section id="kontakt" className="contact">
        <div className="container">

          <div className="section-title">
            <h2>{t.contactTitle}</h2>
            <p>{t.contactSubtitle}</p>
          </div>

          <div className="contact-info contact-info-centered">

            <div className="contact-item">
              <FaPhone />
              <div>
                <h4>{t.contactPhoneLabel}</h4>
                <p>{t.contactPhone}</p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h4>{t.contactEmailLabel}</h4>
                <p>{t.contactEmail}</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <h4>{t.contactLocationLabel}</h4>
                <p>{t.contactLocation}</p>
              </div>
            </div>

          </div>

          <Link to="/privatnost" className="start-privacy-link">
            {language === "en" ? "Privacy Policy" : "Politika privatnosti"}
          </Link>
        </div>
      </section>

      {!hideFloatingWhatsApp && <WhatsAppButton />}
    </div>
  );
}

export default StartPage;

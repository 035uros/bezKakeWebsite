/* ============================================================
   startVariants.js — SINGLE SOURCE OF TRUTH for the message-matched
   /start landing page variants (?v=svadja | higijena | zauzeti).

   Hero text, survey questions and result copy for every ad set
   live HERE and only here, in both languages. StartPage.jsx just
   renders VARIANTS[variantKey][language].

   Flow per variant: Q1 identify with the problem → Q2 imagine the
   solution (also picks a package tier) → Q3 qualify (shared
   QUALIFIER, asked LAST on purpose — see note below).

   Tier names match the real pricing cards on the page: Starter,
   Standard, Premium (prices come from ../data/packages).

   To add a 4th variant (e.g. December "poklon" ad set): copy one
   block (both sr and en), edit copy, done — the page picks it up
   automatically.
   ============================================================ */

export const DEFAULT_VARIANT = "svadja";

/* QUALIFIER is IDENTICAL across variants on purpose — it's the
   qualification gate (pixel conditioning) and keeping the wording
   constant keeps drop-off data comparable.

   Asked LAST (as Q3), not first: the visitor should first feel
   understood (Q1) and picture the outcome (Q2) — only then answer
   a practical logistics question. Answering it earlier interrupts
   the emotional thread with a form-like question too soon.

   `qualified` / `home` / `exitType` stay identical across languages
   (internal tracking codes) — only the visible `label` translates. */
export const QUALIFIER = {
  sr: {
    q: "Koji opis najbolje odgovara Vašem domu?",
    options: [
      { label: "Kuća u Beogradu i pas je uglavnom u dvorištu", qualified: true, home: "bg-dvoriste" },
      { label: "Kuća u Beogradu i pas je uglavnom u kući, ali koristi dvorište", qualified: true, home: "bg-kuca" },
      { label: "Kuća van Beograda", qualified: false, home: "van-bg", exitType: "outside-area" },
      { label: "Nemam dvorište", qualified: false, home: "nema-dvoriste", exitType: "no-yard" },
    ],
  },
  en: {
    q: "Which description best fits your home?",
    options: [
      { label: "A house in Belgrade, and the dog is mostly in the yard", qualified: true, home: "bg-dvoriste" },
      { label: "A house in Belgrade, and the dog is mostly indoors but uses the yard", qualified: true, home: "bg-kuca" },
      { label: "A house outside Belgrade", qualified: false, home: "van-bg", exitType: "outside-area" },
      { label: "I don't have a yard", qualified: false, home: "nema-dvoriste", exitType: "no-yard" },
    ],
  },
};

/* Sub/CTA text is identical across all three variants (only the
   headline and questions message-match the ad set), so it's kept
   once here and reused. */
const SHARED_SUB = {
  sr: "Redovnim uklanjanjem psećeg izmeta, dvorište ostaje urednije i prijatnije za svakodnevnu igru, boravak i druženje. Dolazimo po rasporedu, tokom cele godine.",
  en: "By regularly removing dog waste, the yard stays tidier and more pleasant for everyday play, spending time outside, and having guests over. We come on a set schedule, all year round.",
};
const SHARED_CTA = {
  sr: "Zakažite besplatno prvo čišćenje na WhatsApp",
  en: "Book your free first cleaning on WhatsApp",
};

/* Q2 is also identical across all three variants (see project
   history — deliberately reused from the "svadja" variant since it
   tested best), kept once here too. */
const SHARED_Q2 = {
  sr: {
    q: "Šta bi Vam najviše olakšalo život?",
    options: [
      { label: "Da neko dolazi svake nedelje i ja više ne razmišljam o tome.", tier: "Standard" },
      { label: "Dolazak na dve nedelje bi mi bio sasvim dovoljan.", tier: "Starter" },
      { label: "Imamo više pasa ili veliko dvorište, treba nam prilagođen plan.", tier: "Premium" },
      { label: "Nisam siguran/na, voleo/la bih preporuku.", tier: "Standard" },
    ],
  },
  en: {
    q: "What would make your life easiest?",
    options: [
      { label: "Having someone come every week so I never have to think about it again.", tier: "Standard" },
      { label: "Every two weeks would be plenty for us.", tier: "Starter" },
      { label: "We have multiple dogs or a large yard, we need a custom plan.", tier: "Premium" },
      { label: "Not sure, I'd like a recommendation.", tier: "Standard" },
    ],
  },
};

export const VARIANTS = {
  /* ---------------- AD SET A: kraj svađe ---------------- */
  svadja: {
    sr: {
      hero: {
        eyebrow: "BezKake · Beograd",
        headline: 'Više nema: "Ja sam prošli put."',
        sub: SHARED_SUB.sr,
        cta: SHARED_CTA.sr,
      },
      q1: {
        q: "Kako to najčešće izgleda kod Vas?",
        options: [
          "Uvek ja na kraju pokupim.",
          "Podsećam ukućane… pa opet ja završim posao.",
          "Niko ne čisti redovno, pa se samo gomila.",
          "Stalno se dogovaramo čiji je red.",
        ],
      },
      q2: SHARED_Q2.sr,
    },
    en: {
      hero: {
        eyebrow: "BezKake · Belgrade",
        headline: 'No more: "I did it last time."',
        sub: SHARED_SUB.en,
        cta: SHARED_CTA.en,
      },
      q1: {
        q: "What does that usually look like for you?",
        options: [
          "I always end up cleaning it up.",
          "I remind everyone… and still end up doing it myself.",
          "No one cleans it regularly, so it just piles up.",
          "We're always arguing about whose turn it is.",
        ],
      },
      q2: SHARED_Q2.en,
    },
  },

  /* ---------------- AD SET B: higijena i deca ---------------- */
  higijena: {
    sr: {
      hero: {
        eyebrow: "BezKake · Beograd",
        headline: "Deca treba da se igraju na travi. Ne da Vi razmišljate šta je ostalo u njoj.",
        sub: SHARED_SUB.sr,
        cta: SHARED_CTA.sr,
      },
      q1: {
        q: "Šta Vas najviše brine kada je dvorište u pitanju?",
        options: [
          "Deca se igraju po travi i želim da bude što čistija.",
          "Brinu me bakterije i paraziti.",
          "Neprijatan miris kada dođu gosti.",
          "Želim da dvorište uvek izgleda uredno.",
        ],
      },
      q2: SHARED_Q2.sr,
    },
    en: {
      hero: {
        eyebrow: "BezKake · Belgrade",
        headline: "Kids should be playing on the grass. Not you wondering what's still in it.",
        sub: SHARED_SUB.en,
        cta: SHARED_CTA.en,
      },
      q1: {
        q: "What worries you most when it comes to the yard?",
        options: [
          "The kids play on the grass and I want it as clean as possible.",
          "I'm worried about bacteria and parasites.",
          "The unpleasant smell when guests come over.",
          "I want the yard to always look tidy.",
        ],
      },
      q2: SHARED_Q2.en,
    },
  },

  /* ---------------- AD SET C: zauzeti / mentalno opterećenje ---------------- */
  zauzeti: {
    sr: {
      hero: {
        eyebrow: "BezKake · Beograd",
        headline: "Jedna obaveza manje. Svake nedelje.",
        sub: SHARED_SUB.sr,
        cta: SHARED_CTA.sr,
      },
      q1: {
        q: "Šta vam je najveći problem kada je u pitanju čišćenje za psom?",
        options: [
          "Nemam vremena uz posao i ostale obaveze.",
          "Nije problem očistiti, problem je što moram da mislim na to.",
          "Često nismo kod kuće pa se nakupi.",
          "Iskreno, jednostavno ne volim taj posao.",
        ],
      },
      q2: SHARED_Q2.sr,
    },
    en: {
      hero: {
        eyebrow: "BezKake · Belgrade",
        headline: "One less chore. Every week.",
        sub: SHARED_SUB.en,
        cta: SHARED_CTA.en,
      },
      q1: {
        q: "What's the biggest problem for you when it comes to cleaning up after your dog?",
        options: [
          "I don't have time with work and other obligations.",
          "Cleaning isn't the problem, having to think about it is.",
          "We're often not home, so it piles up.",
          "Honestly, I just don't like doing it.",
        ],
      },
      q2: SHARED_Q2.en,
    },
  },
};

export function getVariantKey(searchParams) {
  const v = searchParams?.get?.("v");
  return VARIANTS[v] ? v : DEFAULT_VARIANT;
}

/* Privacy policy content, bilingual. Kept as its own data module
   (same pattern as startVariants.js/packages.js) rather than
   bloated into translations.js, since it's long-form prose rather
   than short UI strings.

   This describes what the site actually does — no invented
   boilerplate about accounts, payments, or forms that don't exist
   here. Update this if the site's data practices change (e.g. if
   Conversions API, a backend, or a contact form are added later). */

export const PRIVACY_POLICY = {
  sr: {
    title: "Politika privatnosti",
    updated: "Poslednja izmena: jul 2026.",
    intro:
      "Ova politika privatnosti objašnjava koje podatke sajt bezkake.rs prikuplja, na koji način se koriste i kome se prosleđuju. Sajt vodi BezKake, servis za redovno čišćenje dvorišta od pasjeg izmeta u Beogradu.",
    sections: [
      {
        heading: "Ko smo mi",
        body:
          "BezKake je servis za redovno čišćenje dvorišta u Beogradu. Za sva pitanja u vezi sa privatnošću možete nas kontaktirati na bezkake@gmail.com ili putem telefona +381 60 6872772.",
      },
      {
        heading: "Koje podatke prikupljamo",
        body:
          "Sajt nema nalog za korisnike, ne obrađuje plaćanja i ne sadrži formular za kontakt — jedini način da nam se obratite je putem WhatsApp-a. Podaci se prikupljaju na dva načina:",
        list: [
          "Meta Pixel (Facebook/Instagram): kada posetite sajt, Meta Pixel beleži osnovne podatke o poseti (koje stranice ste pogledali, koje dugme ste kliknuli, uređaj i pregledač koji koristite) kako bismo razumeli da li naše oglase vide prave osobe i koliko su efikasni.",
          "Odgovori u upitniku: ako popunite kratak upitnik na stranici namenjenoj oglasima, vaši odgovori se koriste isključivo da bismo vam preporučili odgovarajući paket usluge. Ti odgovori se ne čuvaju na našim serverima — sajt nema bazu podataka — i ne šalju se u WhatsApp poruci koju eventualno pošaljete.",
        ],
      },
      {
        heading: "WhatsApp komunikacija",
        body:
          "Kada kliknete na dugme za WhatsApp, napuštate naš sajt i otvara se razgovor u WhatsApp aplikaciji ili na WhatsApp Web-u. Ta komunikacija se odvija u skladu sa Politikom privatnosti WhatsApp-a (u vlasništvu kompanije Meta), ne ovom politikom. Poruke koje nam pošaljete čuvamo isključivo radi dogovaranja i pružanja usluge.",
      },
      {
        heading: "Zašto prikupljamo ove podatke",
        body:
          "Podatke iz Meta Pixel-a koristimo da bismo merili uspešnost oglasa na Facebook-u i Instagram-u i prikazivali ih relevantnim osobama u Beogradu. Ne prodajemo, ne iznajmljujemo i ne razmenjujemo vaše podatke sa trećim licima u komercijalne svrhe van ovog okvira.",
      },
      {
        heading: "Kolačići",
        body:
          "Sajt sam po sebi ne koristi kolačiće za naloge ili pamćenje lozinki, jer takve funkcije ne postoje. Meta Pixel može postaviti kolačiće u vašem pregledaču radi merenja efikasnosti oglasa — to je regulisano Politikom privatnosti kompanije Meta. Kolačiće možete u svakom trenutku obrisati ili blokirati kroz podešavanja svog pregledača.",
      },
      {
        heading: "Vaša prava",
        body:
          "U svakom trenutku možete zatražiti informaciju o tome koje podatke o vama imamo (najčešće samo istoriju WhatsApp razgovora, ako ste nas kontaktirali), zatražiti njihovo brisanje ili se usprotiviti obradi. Za sve zahteve pišite nam na bezkake@gmail.com.",
      },
      {
        heading: "Izmene ove politike",
        body:
          "Ova politika se može povremeno ažurirati kako bi odražavala promene u načinu rada sajta. Datum poslednje izmene naveden je na vrhu stranice.",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: July 2026",
    intro:
      "This privacy policy explains what data the bezkake.rs website collects, how it's used, and who it's shared with. The site is run by BezKake, a regular dog-yard-cleaning service in Belgrade.",
    sections: [
      {
        heading: "Who we are",
        body:
          "BezKake is a regular yard-cleaning service in Belgrade. For any privacy-related questions, you can reach us at bezkake@gmail.com or by phone at +381 60 6872772.",
      },
      {
        heading: "What data we collect",
        body:
          "The site has no user accounts, doesn't process payments, and has no contact form — the only way to reach us is via WhatsApp. Data is collected in two ways:",
        list: [
          "Meta Pixel (Facebook/Instagram): when you visit the site, Meta Pixel records basic visit information (which pages you viewed, which button you clicked, your device and browser) so we can understand whether the right people are seeing our ads and how effective they are.",
          "Survey answers: if you fill out the short questionnaire on one of our ad landing pages, your answers are used only to recommend the right service package. Those answers are never stored on our servers — the site has no database — and are not included in the WhatsApp message you may end up sending.",
        ],
      },
      {
        heading: "WhatsApp communication",
        body:
          "When you click a WhatsApp button, you leave our site and a conversation opens in the WhatsApp app or WhatsApp Web. That communication is governed by WhatsApp's own Privacy Policy (owned by Meta), not this one. Messages you send us are kept only to arrange and deliver the service.",
      },
      {
        heading: "Why we collect this data",
        body:
          "We use Meta Pixel data to measure how well our Facebook and Instagram ads perform and to show them to relevant people in Belgrade. We don't sell, rent, or share your data with third parties for commercial purposes outside of this.",
      },
      {
        heading: "Cookies",
        body:
          "The site itself doesn't use cookies for accounts or saved logins, since no such features exist. Meta Pixel may set cookies in your browser to measure ad performance — that's governed by Meta's own Privacy Policy. You can delete or block cookies at any time through your browser settings.",
      },
      {
        heading: "Your rights",
        body:
          "You can ask at any time what data we hold about you (usually just WhatsApp conversation history, if you've contacted us), request that it be deleted, or object to its use. For any request, email us at bezkake@gmail.com.",
      },
      {
        heading: "Changes to this policy",
        body:
          "This policy may be updated occasionally to reflect changes in how the site works. The date of the last update is shown at the top of the page.",
      },
    ],
  },
};

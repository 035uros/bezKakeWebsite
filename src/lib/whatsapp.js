/* Single source of truth for the "click to WhatsApp" destination used
   by every booking CTA on the site (homepage hero, floating button,
   /start landing pages, survey result screen). Same phone, same
   prefilled message per language, everywhere — no per-page
   variations, and no survey answers leaking into the message. */

export const WHATSAPP_PHONE = "381606872772";

export const WHATSAPP_MESSAGE = {
  sr: "Zdravo! 👋 Želeo/la bih da zakažem svoje besplatno prvo čišćenje dvorišta. Kako izgleda naredni korak?",
  en: "Hello! 👋 I'd like to book my free first yard cleaning. What's the next step?",
};

export function getWhatsAppLink(language = "sr") {
  const message = WHATSAPP_MESSAGE[language] ?? WHATSAPP_MESSAGE.sr;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

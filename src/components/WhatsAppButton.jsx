import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const PHONE = "381606872772";
const MESSAGE = encodeURIComponent("Zdravo! Zainteresovan/a sam za BezKake uslugu.");

function WhatsAppButton() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappAria}
    >
      <FaWhatsapp />
      <span>{t.whatsappText}</span>
    </a>
  );
}

export default WhatsAppButton;
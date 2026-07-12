import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { getWhatsAppLink } from "../lib/whatsapp";
import { fbStandard } from "../lib/pixel";

function WhatsAppButton() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <a
      href={getWhatsAppLink(language)}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappAria}
      onClick={() => fbStandard("Contact", { content_name: "floating_button" })}
    >
      <FaWhatsapp />
      <span>{t.whatsappText}</span>
    </a>
  );
}

export default WhatsAppButton;

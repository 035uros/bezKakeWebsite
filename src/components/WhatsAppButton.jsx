import { FaWhatsapp } from "react-icons/fa";

const PHONE = "381XXXXXXXXX";
const MESSAGE = encodeURIComponent("Zdravo! Zainteresovan/a sam za BezKake uslugu.");

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontaktirajte nas na WhatsApp"
    >
      <FaWhatsapp />
      <span>Piši nam</span>
    </a>
  );
}

export default WhatsAppButton;

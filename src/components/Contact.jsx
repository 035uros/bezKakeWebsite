import { useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const [formData, setFormData] = useState({
    ime: "",
    telefon: "",
    poruka: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ime: formData.ime,
          telefon: formData.telefon,
          poruka: formData.poruka,
        },
        PUBLIC_KEY
      )
      .then(() => {
        toast.success(t.contactSuccess);
        setFormData({ ime: "", telefon: "", poruka: "" });
      })
      .catch(() => {
        toast.error(t.contactError);
      });
  };

  return (
    <section id="kontakt" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactSubtitle}</p>
        </div>

        <div className="contact-grid">

          <div className="contact-info">

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

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="ime"
              placeholder={t.contactNamePlaceholder}
              value={formData.ime}
              onChange={handleChange}
            />

            <input
              type="text"
              name="telefon"
              placeholder={t.contactPhonePlaceholder}
              value={formData.telefon}
              onChange={handleChange}
            />

            <textarea
              name="poruka"
              placeholder={t.contactMessagePlaceholder}
              rows="5"
              value={formData.poruka}
              onChange={handleChange}
            />

            <button type="submit">
              {t.contactButton}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
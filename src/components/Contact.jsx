import { useContext } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function Contact() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
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
      </div>
    </section>
  );
}

export default Contact;

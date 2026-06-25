import { useContext } from "react";
import logo from "../assets/logo.png";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="footer">

      <div className="container footer-content">

        <div className="footer-brand">
          <img
            src={logo}
            alt="BezKake"
            className="footer-logo"
          />

          <p>{t.footerDescription}</p>
        </div>

        <div className="footer-links">
          <a href="#hero">{t.footerLinks.home}</a>
          <a href="#kako-radi">{t.footerLinks.howItWorks}</a>
          <a href="#cenovnik">{t.footerLinks.pricing}</a>
          <a href="#kontakt">{t.footerLinks.contact}</a>
        </div>

        <div className="footer-contact">
          <p>📍 {t.footerLocation}</p>
          <p>📞 {t.footerPhone}</p>
          <p>✉️ {t.footerEmail}</p>
          <p>📸 {t.footerSocial}</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BezKake. {t.footerRights}
      </div>

    </footer>
  );
}

export default Footer;
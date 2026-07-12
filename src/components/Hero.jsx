import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { getWhatsAppLink } from "../lib/whatsapp";
import { fbStandard } from "../lib/pixel";

import logo from "../assets/logo.png";
import heroVideo from "../assets/hero-video.mp4";

function Hero() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="hero" className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-text">

          <p className="hero-eyebrow">{t.heroEyebrow}</p>

          <h1>
            {t.heroTitleLine1}
            <br />
            {t.heroTitleLine2}
          </h1>

          <p>{t.heroSubtitle}</p>

          <a
            href={getWhatsAppLink(language)}
            target="_blank"
            rel="noopener noreferrer"
            className="start-cta-btn"
            onClick={() => fbStandard("Contact", { content_name: "homepage_hero" })}
          >
            <FaWhatsapp /> {t.heroPrimaryBtn}
          </a>

          <p className="hero-guarantee">{t.heroNote}</p>

        </div>
      </div>

      <img
        src={logo}
        alt="BezKake"
        className="hero-corner-logo"
      />

    </section>
  );
}

export default Hero;
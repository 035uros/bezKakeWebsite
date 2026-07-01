import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

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

          <h1>
            {t.heroTitleLine1}
            <br />
            {t.heroTitleLine2}
          </h1>

          <div className="hero-buttons">

            <a href="#kontakt" className="btn btn-primary">
              {t.heroPrimaryBtn}
            </a>

            <a href="#cenovnik" className="btn btn-secondary-light">
              {t.heroSecondaryBtn}
            </a>

          </div>

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
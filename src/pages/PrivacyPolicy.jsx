import { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import WhatsAppButton from "../components/WhatsAppButton";
import { LanguageContext } from "../context/LanguageContext";
import { PRIVACY_POLICY } from "../data/privacyPolicy";

function PrivacyPolicy() {
  const { language, setLanguage } = useContext(LanguageContext);
  const content = PRIVACY_POLICY[language] ?? PRIVACY_POLICY.sr;
  const backLabel = language === "en" ? "← Back to home" : "← Nazad na početnu";

  return (
    <div className="privacy-page">
      <div className="privacy-header">
        <div className="container privacy-header-content">
          <Link to="/">
            <img src={logo} alt="BezKake" className="privacy-logo" />
          </Link>

          <div className="language-switch">
            <button
              onClick={() => setLanguage("sr")}
              className={language === "sr" ? "active" : ""}
            >
              SR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={language === "en" ? "active" : ""}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <section className="privacy-content">
        <div className="container">
          <Link to="/" className="privacy-back-link">
            {backLabel}
          </Link>

          <h1>{content.title}</h1>
          <p className="privacy-updated">{content.updated}</p>
          <p className="privacy-intro">{content.intro}</p>

          {content.sections.map((s) => (
            <div className="privacy-section" key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
              {s.list && (
                <ul>
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}

export default PrivacyPolicy;

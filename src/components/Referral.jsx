import { useState, useContext } from "react";
import { FaUserFriends, FaTimes } from "react-icons/fa";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function Referral() {
  const [open, setOpen] = useState(false);

  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <>
      <section className="referral">
        <div className="container referral-inner">

          <div className="referral-left">
            <FaUserFriends className="referral-icon" />

            <div>
              <h3>{t.referralTitle}</h3>
              <p>
                {t.referralTextBefore}
                <strong>{t.referralHighlight}</strong>
                {t.referralTextAfter}
              </p>
            </div>
          </div>

          <button className="btn referral-btn" onClick={() => setOpen(true)}>
            {t.referralButton}
          </button>

        </div>
      </section>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>

            <button className="modal-close" onClick={() => setOpen(false)}>
              <FaTimes />
            </button>

            <div className="modal-header">
              <FaUserFriends className="modal-icon" />
              <h2>{t.referralModalTitle}</h2>
              <p>{t.referralModalSubtitle}</p>
            </div>

            <div className="modal-steps">
              {t.referralSteps.map((step) => (
                <div key={step.number} className="modal-step">
                  <div className="modal-step-number">{step.number}</div>

                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="btn referral-btn modal-cta"
              onClick={() => setOpen(false)}
            >
              {t.referralCta}
            </a>

          </div>
        </div>
      )}
    </>
  );
}

export default Referral;
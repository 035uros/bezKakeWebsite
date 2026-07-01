import { useContext } from "react";
import { FaShieldAlt } from "react-icons/fa";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function Pricing() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="cenovnik" className="pricing">
      <div className="container">

        <div className="section-title">
          <h2>{t.pricingTitle}</h2>

          <p>{t.pricingSubtitle}</p>

          <div className="guarantee-badge">
            <FaShieldAlt className="guarantee-icon" />
            <span>{t.pricingBadge}</span>
          </div>
        </div>

        <div className="pricing-grid">

          {t.pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`price-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.popularTag && (
                <div className="popular-tag">{plan.popularTag}</div>
              )}

              <h3>{plan.name}</h3>

              <div className="price">{plan.price}</div>

              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="pricing-notes">
          {t.pricingNotes.map((n, i) => (
            <p key={i}>{n}</p>
          ))}
        </div>

        <div className="pricing-callout">
          <span className="pricing-callout-number">{t.pricingCalloutNumber}</span>

          <p>
            {t.pricingCalloutTextParts.before}
            <strong>{t.pricingCalloutTextParts.highlight1}</strong>
            {t.pricingCalloutTextParts.middle}
            <strong>{t.pricingCalloutTextParts.highlight2}</strong>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
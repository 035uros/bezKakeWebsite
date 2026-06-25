import { useState, useContext } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function FAQ() {
  const [openKey, setOpenKey] = useState(null);

  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section id="faq" className="faq">
      <div className="container">

        <div className="section-title">
          <h2>{t.faqTitle}</h2>
          <p>{t.faqSubtitle}</p>
        </div>

        <div className="faq-categories">

          {t.faqCategories.map((cat) => (
            <div className="faq-category" key={cat.category}>

              <p className="faq-category-label">{cat.category}</p>

              <div className="faq-list">

                {cat.items.map((item) => {
                  const key = `${cat.category}-${item.q}`;
                  const isOpen = openKey === key;

                  return (
                    <div
                      key={key}
                      className={`faq-item ${isOpen ? "open" : ""}`}
                      onClick={() => toggle(key)}
                    >
                      <div className="faq-question">
                        <span>{item.q}</span>
                        {isOpen ? (
                          <FaMinus className="faq-icon" />
                        ) : (
                          <FaPlus className="faq-icon" />
                        )}
                      </div>

                      <div className="faq-answer">{item.a}</div>
                    </div>
                  );
                })}

              </div>
            </div>
          ))}

        </div>

        <div className="faq-cta">
          <p>{t.faqCtaText}</p>
          <a href="#kontakt" className="btn faq-cta-btn">
            {t.faqCtaButton}
          </a>
        </div>

      </div>
    </section>
  );
}

export default FAQ;
import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  MdNotificationsActive,
  MdCleaningServices,
  MdPhotoCamera,
} from "react-icons/md";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const iconMap = {
  whatsapp: FaWhatsapp,
  notify: MdNotificationsActive,
  cleaning: MdCleaningServices,
  photo: MdPhotoCamera,
};

function HowItWorks() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="kako-radi" className="how-it-works">
      <div className="container">

        <div className="section-title">
          <h2>{t.howItWorksTitle}</h2>
          <p>{t.howItWorksSubtitle}</p>
        </div>

        <div className="steps">
          {t.howItWorksSteps.map((step, i) => {
            const Icon = iconMap[step.icon];

            return (
              <div className="step-card" key={step.number}>
                <div className="step-top">
                  <span className="step-number">{step.number}</span>
                  {i < t.howItWorksSteps.length - 1 && (
                    <span className="step-connector" />
                  )}
                </div>

                <Icon className="step-icon" />

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
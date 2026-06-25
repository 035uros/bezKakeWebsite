import { useContext } from "react";
import {
  FaClock,
  FaHeart,
  FaExclamationTriangle,
  FaMedal,
  FaCalendarCheck,
} from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";

import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const iconMap = {
  heart: FaHeart,
  clock: FaClock,
  warning: FaExclamationTriangle,
  notify: MdNotificationsActive,
  medal: FaMedal,
  calendar: FaCalendarCheck,
};

function Benefits() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="benefits">
      <div className="container">

        <div className="section-title">
          <h2>{t.benefitsTitle}</h2>
          <p>{t.benefitsSubtitle}</p>
        </div>

        <div className="benefits-grid">
          {t.benefits.map((b) => {
            const Icon = iconMap[b.icon];

            return (
              <div className="benefit-card" key={b.title}>
                <div className="benefit-icon-wrap">
                  <Icon className="benefit-icon" />
                </div>

                <div className="benefit-body">
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Benefits;
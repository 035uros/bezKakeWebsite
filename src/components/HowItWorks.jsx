import { FaCalendarCheck, FaDog, FaCheckCircle } from "react-icons/fa";

function HowItWorks() {
  return (
    <section id="kako-radi" className="how-it-works">

      <div className="container">

        <div className="section-title">
          <h2>Kako funkcioniše?</h2>

          <p>
            Jednostavno, pouzdano i bez dodatnih obaveza za vas.
          </p>
        </div>

        <div className="steps">

          <div className="step-card">
            <FaCalendarCheck className="step-icon" />

            <h3>Zakažite uslugu</h3>

            <p>
              Kontaktirajte nas i dogovaramo termin koji vam odgovara.
            </p>
          </div>

          <div className="step-card">
            <FaDog className="step-icon" />

            <h3>Mi dolazimo</h3>

            <p>
              Temeljno čistimo dvorište i uklanjamo sav pseći izmet.
            </p>
          </div>

          <div className="step-card">
            <FaCheckCircle className="step-icon" />

            <h3>Uživajte</h3>

            <p>
              Čisto dvorište spremno za porodicu, goste i ljubimce.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;
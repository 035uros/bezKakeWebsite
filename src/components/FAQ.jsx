import { useState } from "react";

const faqData = [
  {
    q: "Da li moram biti kod kuće tokom čišćenja?",
    a: "Ne. Većina klijenata nije kod kuće. Dolazimo, obavimo posao i zatvorimo kapiju.",
  },
  {
    q: "Da li radite i vikendom?",
    a: "Da, termini su fleksibilni i dogovaraju se unapred.",
  },
  {
    q: "Šta ako pada kiša?",
    a: "U slučaju lošeg vremena, termin se pomera bez dodatnih troškova.",
  },
  {
    q: "Da li je usluga bezbedna za kućne ljubimce?",
    a: "Apsolutno. Koristimo standardne higijenske procedure bez hemikalija.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">

      <div className="container">

        <div className="section-title">
          <h2>FAQ</h2>
          <p>Najčešća pitanja naših klijenata</p>
        </div>

        <div className="faq-list">

          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                {item.q}
              </div>

              <div className="faq-answer">
                {item.a}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;
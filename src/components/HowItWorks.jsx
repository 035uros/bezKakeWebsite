import { FaWhatsapp } from "react-icons/fa";
import { MdNotificationsActive, MdCleaningServices, MdPhotoCamera } from "react-icons/md";

const steps = [
  {
    number: "01",
    Icon: FaWhatsapp,
    title: "Zakažite u par poruka",
    text: "Pišite nam ili nas pozovite. Odgovaramo najkasnije u roku od sat vremena. Vi birate vreme i broj termina (nedeljno ili dvonedeljno). Prvo čišćenje je gratis, bez obaveza.",
  },
  {
    number: "02",
    Icon: MdNotificationsActive,
    title: "Obaveštavamo Vas pre dolaska",
    text: "Uoči svakog dolaska šaljemo Vam poruku. Naš tim dolazi u dogovorenom terminu.",
  },
  {
    number: "03",
    Icon: MdCleaningServices,
    title: "Temeljno čišćenje",
    text: "Detaljno prolazimo kroz svaki kutak dvorišta, travnjak, šljunak, bočne površine, uglove. Većina dvorišta se očisti za 15–30 minuta, u zavisnosti od veličine i broja pasa. Temeljno, ali efikasno.",
  },
  {
    number: "04",
    Icon: MdPhotoCamera,
    title: "Foto potvrda odmah po završetku",
    text: "Čim završimo, šaljemo Vam fotografiju zatvorene kapije kao potvrdu da je posao obavljen, ukoliko niste kod kuće. Stojimo iza kvaliteta naše usluge. Ukoliko niste zadovoljni, ponovićemo posetu o našem trošku ili Vam vratiti novac.",
  },
];


function HowItWorks() {
  return (
    <section id="kako-radi" className="how-it-works">
      <div className="container">

        <div className="section-title">
          <h2>Kako funkcioniše?</h2>
          <p>Jedan poziv. Jedna briga manje. Čisto dvorište iz nedelje u nedelju.</p>
        </div>

        <div className="steps">
          {steps.map((step, i) => (
            <div className="step-card" key={step.number}>
              <div className="step-top">
                <span className="step-number">{step.number}</span>
                {i < steps.length - 1 && <span className="step-connector" />}
              </div>
              <step.Icon className="step-icon" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;

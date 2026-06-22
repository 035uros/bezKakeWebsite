import { useState } from "react";
import { FaUserFriends, FaTimes } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Postani deo BezKake porodice",
    text: "Zakaži prvu uslugu i počni da koristiš servis. Sve počinje od tebe.",
  },
  {
    number: "02",
    title: "Preporuči prijatelju ili komšiji",
    text: "Podeli naš kontakt sa nekim ko ima psa i dvorište. Kada se javi, neka pomene tvoje ime.",
  },
  {
    number: "03",
    title: "Prijatelj postaje klijent",
    text: "Čim tvoj prijatelj zakaže prvu uslugu, oboje ste kvalifikovani za nagradu.",
  },
  {
    number: "04",
    title: "Oboje dobijate nagradu",
    text: "Ti dobijaš 1000 RSD popusta na sledeći račun. Tvoj prijatelj dobija prvu uslugu gratis. Bez ograničenja, preporuči koliko god želiš.",
  },
];

function Referral() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="referral">
        <div className="container referral-inner">

          <div className="referral-left">
            <FaUserFriends className="referral-icon" />
            <div>
              <h3>Preporuči BezKake prijatelju</h3>
              <p>
                Za svakog prijatelja, komšiju, poznanika kojeg preporučiš dobijaš <strong>1000 RSD popusta</strong> na
                sledeći račun. 
              </p>
            </div>
          </div>

          <button className="btn referral-btn" onClick={() => setOpen(true)}>
            Saznaj više
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
              <h2>Kako funkcioniše preporuka?</h2>
              <p>Postani deo BezKake porodice i nagradi i sebe i prijatelje.</p>
            </div>

            <div className="modal-steps">
              {steps.map((step) => (
                <div key={step.number} className="modal-step">
                  <div className="modal-step-number">{step.number}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#kontakt" className="btn referral-btn modal-cta" onClick={() => setOpen(false)}>
              Zakaži svoju prvu uslugu
            </a>

          </div>
        </div>
      )}
    </>
  );
}

export default Referral;

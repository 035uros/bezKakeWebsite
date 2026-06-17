import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [formData, setFormData] = useState({
    ime: "",
    telefon: "",
    poruka: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        ime: formData.ime,
        telefon: formData.telefon,
        poruka: formData.poruka,
      },
      PUBLIC_KEY
    )
    .then(() => {
      toast.success("Poruka je uspešno poslata!");
      setFormData({ ime: "", telefon: "", poruka: "" });
    })
    .catch(() => {
      toast.error("Greška pri slanju poruke!");
    });
  };

  return (
    <section id="kontakt" className="contact">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container">

        <div className="section-title">
          <h2>Kontakt</h2>
          <p>Javite nam se i zakažite termin</p>
        </div>

        <div className="contact-grid">

          <div className="contact-info">
            <div className="contact-item">
              <FaPhone />
              <div>
                <h4>Telefon</h4>
                <p>+381 xx xxx xxx</p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>kontakt@bezkake.rs</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Lokacija</h4>
                <p>Beograd</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="ime"
              placeholder="Ime"
              value={formData.ime}
              onChange={handleChange}
            />

            <input
              type="text"
              name="telefon"
              placeholder="Telefon"
              value={formData.telefon}
              onChange={handleChange}
            />

            <textarea
              name="poruka"
              placeholder="Poruka"
              rows="5"
              value={formData.poruka}
              onChange={handleChange}
            />

            <button type="submit">Pošalji upit</button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
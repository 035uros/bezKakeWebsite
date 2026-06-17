import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-content">

        <div className="footer-brand">
          <img
            src={logo}
            alt="BezKake"
            className="footer-logo"
          />

          <p>
            Profesionalno uklanjanje psećeg izmeta iz privatnih dvorišta.
          </p>
        </div>

        <div className="footer-links">
          <a href="#hero">Početna</a>
          <a href="#kako-radi">Kako radi</a>
          <a href="#cenovnik">Cenovnik</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="footer-contact">
          <p>📍 Beograd</p>
          <p>📞 +381 xx xxx xxx</p>
          <p>✉️ kontakt@bezkake.rs</p>
          <p>📸 @bezkake</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BezKake. Sva prava zadržana.
      </div>

    </footer>
  );
}

export default Footer;
import logo from "../assets/logo.png";

function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <div className="hero-text">

          <h1>
            Čisto dvorište.
            <br />
            Mirna savest.
          </h1>

          <p>
            Profesionalno uklanjanje psećeg izmeta iz privatnih
            dvorišta. Redovni dolasci, diskretna usluga i više
            vremena za vas i vašu porodicu.
          </p>

          <div className="hero-buttons">

            <a href="#cenovnik" className="btn btn-primary">
              Cenovnik
            </a>

            <a href="#kontakt" className="btn btn-secondary-light">
              Kontakt
            </a>

          </div>

        </div>

      </div>

      <img
        src={logo}
        alt="BezKake"
        className="hero-corner-logo"
      />

    </section>
  );
}

export default Hero;
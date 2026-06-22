import logo from "../assets/logo.png";

function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <div className="hero-text">

          <h1>
            Pustite psa da bude pas.
            <br />
            Mi se brinemo o ostatku.
          </h1>

          <div className="hero-buttons">

            <a href="#kontakt" className="btn btn-primary">
              Prva usluga gratis — zakažite odmah
            </a>

            <a href="#cenovnik" className="btn btn-secondary-light">
              Cenovnik
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
function Pricing() {
  return (
    <section id="cenovnik" className="pricing">

      <div className="container">

        <div className="section-title">
          <h2>Cenovnik</h2>

          <p>
            Transparentne cene bez skrivenih troškova.
          </p>
        </div>

        <div className="pricing-grid">

          <div className="price-card">

            <h3>Basic</h3>

            <div className="price">
              2.990 RSD
            </div>

            <ul>
              <li>1 pas</li>
              <li>Do 300m² dvorišta</li>
              <li>4 dolaska mesečno</li>
            </ul>

          </div>

          <div className="price-card featured">

            <div className="popular-tag">
              Najpopularnije
            </div>

            <h3>Family</h3>

            <div className="price">
              4.990 RSD
            </div>

            <ul>
              <li>2 psa</li>
              <li>Do 600m² dvorišta</li>
              <li>4 dolaska mesečno</li>
            </ul>

          </div>

          <div className="price-card">

            <h3>Premium</h3>

            <div className="price">
              Po dogovoru
            </div>

            <ul>
              <li>3+ psa</li>
              <li>Velika imanja</li>
              <li>Prilagođeni termini</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Pricing;
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

            <h3>Starter</h3>

            <div className="price">
              4.999 RSD
            </div>

            <ul>
              <li>Na 2 nedelje</li>
              <li>2 čišćenja mesečno</li>
            </ul>

          </div>

          <div className="price-card featured">

            <div className="popular-tag">
              Najpopularniji
            </div>

            <h3>Standard</h3>

            <div className="price">
              5.999 RSD
            </div>

            <ul>
              <li>Nedeljno</li>
              <li>4 čišćenja mesečno</li>
              <li>40% jeftinije po poseti</li>
            </ul>

          </div>

          <div className="price-card">

            <h3>Premium</h3>

            <div className="price">
              9.999 RSD
            </div>

            <ul>
              <li>2x nedeljno</li>
              <li>8 čišćenja mesečno</li>
            </ul>

          </div>

        </div>

        <div className="pricing-notes">
          <p>Sve cene su mesečna pretplata · Otkazujete kada želite</p>
          <p>Za 2 psa: +2.000 RSD mesečno · Za 3+ psa: po dogovoru</p>
        </div>

        <div className="pricing-callout">
          <span className="pricing-callout-number">47 min</span>
          <p>
            Prosečan vlasnik psa sa dvorištem troši <strong>47 minuta nedeljno</strong> na
            ono što mi radimo — za samo <strong>5.999 RSD mesečno</strong>.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Pricing;
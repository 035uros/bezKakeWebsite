import {
  FaShieldAlt,
  FaClock,
  FaHome,
  FaLeaf,
} from "react-icons/fa";

function Benefits() {
  return (
    <section className="benefits">

      <div className="container">

        <div className="section-title">
          <h2>Zašto BezKake?</h2>

          <p>
            Brinemo o vašem dvorištu kako biste vi mogli da uživate u njemu.
          </p>
        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            <FaShieldAlt className="benefit-icon" />

            <h3>Higijena za porodicu</h3>

            <p>
              Čist prostor za igru dece, boravak gostiju i svakodnevno uživanje.
            </p>
          </div>

          <div className="benefit-card">
            <FaClock className="benefit-icon" />

            <h3>Više slobodnog vremena</h3>

            <p>
              Prepustite neprijatan posao nama i fokusirajte se na ono što vam je važno.
            </p>
          </div>

          <div className="benefit-card">
            <FaHome className="benefit-icon" />

            <h3>Uvek uredno dvorište</h3>

            <p>
              Redovni dolasci garantuju da vaše dvorište ostaje čisto tokom cele godine.
            </p>
          </div>

          <div className="benefit-card">
            <FaLeaf className="benefit-icon" />

            <h3>Diskretna usluga</h3>

            <p>
              Dolazimo, završavamo posao i ostavljamo dvorište urednim bez ometanja.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Benefits;
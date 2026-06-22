import {
  FaClock,
  FaHeart,
  FaExclamationTriangle,
  FaMedal,
  FaCalendarCheck,
} from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";

const benefits = [
  {
    Icon: FaHeart,
    title: "Tim ljubitelja pasa",
    text: "I sami smo vlasnici pasa, zato razumemo svakodnevne radosti i obaveze koje oni donose.",
  },
  {
    Icon: FaClock,
    title: "Dvorište uvek spremno za goste",
    text: "Bilo da Vam dolaze prijatelji, porodica ili komšije, dvorište je uvek uredno i spremno za uživanje. Bez neprijatnih iznenađenja i čišćenja u poslednjem trenutku.",
  },
  {
    Icon: FaExclamationTriangle,
    title: "Pseći izmet je zdravstveni rizik",
    text: "Sadrži E. coli, parvovirus i parazite koji opstaju u tlu i do godinu dana. Redovnim uklanjanjem štitite decu, goste i Vašeg psa. Naša oprema se dezinfikuje pre i posle svakog dolaska.",
  },
  {
    Icon: MdNotificationsActive,
    title: "Bez neprijatnih mirisa u dvorištu",
    text: "Pseći otpad je čest uzrok neprijatnih mirisa, naročito tokom toplijih meseci. Redovnim uklanjanjem održavamo dvorište čistim i prijatnim za svakodnevni boravak.",
  },
  {
    Icon: FaMedal,
    title: "Možete da računate na isti rezultat",
    text: "Bez obzira na godišnje doba ili broj poseta, cilj je uvek isti. Svaka poseta prati isti pristup i isti standard usluge.",
  },
  {
    Icon: FaCalendarCheck,
    title: "Pouzdan servis tokom cele godine",
    text: "Redovni dolasci u dogovorenom terminu i tim koji poznaje Vaše dvorište. Pouzdana usluga tokom cele godine, i leti i zimi."
  },
];

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">

        <div className="section-title">
          <h2>Zašto BezKake?</h2>
          <p>
          Naš cilj nije samo čisto dvorište, već i Vaše poverenje. Zato svakoj poseti pristupamo jednako, bez obzira na obim posla. 
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b) => (
            <div className="benefit-card" key={b.title}>
              <div className="benefit-icon-wrap">
                <b.Icon className="benefit-icon" />
              </div>
              <div className="benefit-body">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Benefits;

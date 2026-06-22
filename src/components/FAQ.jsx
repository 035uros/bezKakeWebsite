import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqCategories = [
  {
    category: "Praktično",
    items: [
      {
        q: "Da li moram biti kod kuće tokom čišćenja?",
        a: "Tokom prvih nekoliko poseta potrebno je da budete kod kuće ili da nam na drugi način omogućite pristup dvorištu. Kada se upoznamo sa prostorom i uspostavimo poverenje, možemo dogovoriti stalan način pristupa, tako da Vaše prisustvo više ne bude neophodno. Ako je do dvorišta moguće doći samo kroz kuću, potrebno je da neko bude prisutan tokom dolaska. Posete obavljamo dogovorenog dana, u okviru unapred definisanog vremenskog intervala. Pre dolaska šaljemo WhatsApp obaveštenje.",
      },
      {
        q: "Koje delove dvorišta čistite?",
        a: "Temeljno pregledamo i čistimo sve spoljašnje površine na kojima Vaš pas boravi, travnjak, šljunak, staze, prednji i zadnji deo dvorišta, kao i uglove koji se lako previde. Naša usluga je namenjena isključivo čišćenju dvorišta, ne i unutrašnjosti kuće.",
      },
      {
        q: "Šta ako pada kiša ili je loše vreme?",
        a: "Radimo tokom cele godine, pa nas kiša, sneg, susnežica i visoke temperature uglavnom ne sprečavaju da obavimo zakazanu posetu. Termin možemo pomeriti samo u slučaju ekstremnih vremenskih uslova koji ugrožavaju bezbednost ili onemogućavaju kvalitetno čišćenje. U tom slučaju ćemo vas blagovremeno obavestiti i dogovoriti prvi naredni termin, bez dodatnih troškova.",
      },
      {
        q: "Kojim danima i u koje vreme obavljate posete?",
        a: "Radimo od ponedeljka do subote, od ranog jutra do kasnih poslepodnevnih sati, kako bi Vam veče ostalo slobodno za odmor i porodicu. Nedeljom ne radimo.",
      },
      {
        q: "Da li pas može da bude u dvorištu tokom čišćenja?",
        a: "I sami smo vlasnici pasa i iskreni ljubitelji životinja. Ipak, radi bezbednosti Vašeg psa i našeg tima, molimo Vas da tokom čišćenja bude u kući ili u odvojenom, bezbednom delu dvorišta. Ovo pravilo važi za sve pse, kako bismo posao mogli da obavimo temeljno i bez ometanja. Pre dolaska šaljemo WhatsApp obaveštenje kako biste imali dovoljno vremena da ga sklonite.",
      },
      {
        q: "Koliko vremena traje jedno čišćenje?",
        a: "Većina dvorišta se očisti za 15 do 30 minuta, u zavisnosti od veličine i broja pasa. Ovo vreme obuhvata pregled i čišćenje svih površina na kojima Vaš pas boravi.",
      },
      {
        q: "Šta radite sa skupljenim izmetom?",
        a: "Prikupljeni otpad stavljamo u dobro zatvorene kese i odlažemo u odgovarajući komunalni kontejner. Otpad ne ostaje u dvorištu, a prostor nakon posete ostaje čist i uredan.",
      },
    ],
  },
  {
    category: "Cenovnik",
    items: [
      {
        q: "Kako funkcioniše prva besplatna usluga?",
        a: "Prva poseta je na naš račun kada odaberete jedan od redovnih paketa i aktivirate mesečnu pretplatu. Nakon prve posete nastavljamo sa redovnim dolascima prema izabranom paketu. Tako odmah upoznajete kvalitet naše usluge, a mi preuzimamo brigu o Vašem dvorištu iz nedelje u nedelju.",
      },
      {
        q: "Imam 2 psa, kako se to naplaćuje?",
        a: "Za domaćinstva sa dva psa, na cenu izabranog paketa dodaje se 2.000 RSD mesečno. Za tri ili više pasa pripremamo individualnu ponudu, u skladu sa veličinom dvorišta, učestalošću dolazaka i potrebama domaćinstva.",
      },
    ],
  },
  {
    category: "Poverenje i garancije",
    items: [
      {
        q: "Mogu li da otkažem uslugu u bilo kom trenutku?",
        a: "Da. Pretplatu možete otkazati u bilo kom trenutku, bez penala i dugoročnih ugovornih obaveza. Dovoljno je da nam pošaljete poruku putem WhatsApp-a. Verujemo da se poverenje i lojalnost zaslužuju kvalitetom svake posete, a ne komplikovanim uslovima.",
      },
      {
        q: "Šta ako nisam zadovoljan obavljenom uslugom?",
        a: "Stojimo iza kvaliteta naše usluge. Ukoliko niste zadovoljni, ponovićemo posetu o našem trošku ili Vam vratiti novac.",
      },
    ],
  },
];

function FAQ() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section id="faq" className="faq">
      <div className="container">

        <div className="section-title">
          <h2>Česta pitanja</h2>
          <p>Sve što Vas zanima pre prvog poziva, na jednom mestu.</p>
        </div>

        <div className="faq-categories">
          {faqCategories.map((cat) => (
            <div className="faq-category" key={cat.category}>

              <p className="faq-category-label">{cat.category}</p>

              <div className="faq-list">
                {cat.items.map((item) => {
                  const key = `${cat.category}-${item.q}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={key}
                      className={`faq-item ${isOpen ? "open" : ""}`}
                      onClick={() => toggle(key)}
                    >
                      <div className="faq-question">
                        <span>{item.q}</span>
                        {isOpen ? <FaMinus className="faq-icon" /> : <FaPlus className="faq-icon" />}
                      </div>
                      <div className="faq-answer">{item.a}</div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Niste pronašli odgovor na vaše pitanje?</p>
          <a href="#kontakt" className="btn faq-cta-btn">Pišite nam</a>
        </div>

      </div>
    </section>
  );
}

export default FAQ;

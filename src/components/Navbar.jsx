import { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];


  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="container navbar-content">

        <a href="#hero">
          <img
            src={logo}
            alt="BezKake"
            className="navbar-logo"
          />
        </a>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <a href="#kako-radi" onClick={closeMenu}>
            {t.howItWorks}
          </a>

          <a href="#cenovnik" onClick={closeMenu}>
            {t.pricing}
          </a>

          <a href="#faq" onClick={closeMenu}>
            {t.faq}
          </a>

          <a href="#kontakt" onClick={closeMenu}>
            {t.contact}
          </a>

        </nav>

        <div className="language-switch">
          <button
            onClick={() => setLanguage("sr")}
            className={language === "sr" ? "active" : ""}
          >
            SR
          </button>

          <button
            onClick={() => setLanguage("en")}
            className={language === "en" ? "active" : ""}
          >
            EN
          </button>
        </div>
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </header>
  );
}

export default Navbar;
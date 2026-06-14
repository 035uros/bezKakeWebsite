import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            Kako radi
          </a>

          <a href="#cenovnik" onClick={closeMenu}>
            Cenovnik
          </a>

          <a href="#faq" onClick={closeMenu}>
            Česta pitanja
          </a>

          <a href="#kontakt" onClick={closeMenu}>
            Kontakt
          </a>

        </nav>

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
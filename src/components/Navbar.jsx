import "../styles/Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const handleScroll = () => {

      let current = "";

      sections.forEach((section) => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
          current = section.getAttribute("id");
        }

      });

      setActive(current);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (

    <nav className="navbar">

      <div className="logo">
        Sameer <span>More</span>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active-menu" : "nav-links"}>

        <li>
          <a
            className={active === "home" ? "active" : ""}
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>
        </li>

        <li>
          <a
            className={active === "about" ? "active" : ""}
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>
        </li>

        <li>
          <a
            className={active === "skills" ? "active" : ""}
            href="#skills"
            onClick={closeMenu}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            className={active === "education" ? "active" : ""}
            href="#education"
            onClick={closeMenu}
          >
            Education
          </a>
        </li>

        <li>
          <a
            className={active === "experience" ? "active" : ""}
            href="#experience"
            onClick={closeMenu}
          >
            Experience
          </a>
        </li>

        <li>
          <a
            className={active === "projects" ? "active" : ""}
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            className={active === "contact" ? "active" : ""}
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>

      </ul>

      <a
        href="/resume.pdf"
        className="resume-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>

    </nav>

  );

}

export default Navbar;
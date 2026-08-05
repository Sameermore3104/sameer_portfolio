import "../styles/Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {

  const [active, setActive] = useState("home");

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const handleScroll = () => {

      let current = "";

      sections.forEach((section) => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top) {
          current = section.getAttribute("id");
        }

      });

      setActive(current);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className="navbar">

      <div className="logo">
        Sameer <span>More</span>
      </div>

      <ul className="nav-links">

        <li><a className={active==="home"?"active":""} href="#home">Home</a></li>

        <li><a className={active==="about"?"active":""} href="#about">About</a></li>

        <li><a className={active==="skills"?"active":""} href="#skills">Skills</a></li>

        <li><a className={active==="education"?"active":""} href="#education">Education</a></li>

        <li><a className={active==="experience"?"active":""} href="#experience">Experience</a></li>

        <li><a className={active==="projects"?"active":""} href="#projects">Projects</a></li>

        <li><a className={active==="contact"?"active":""} href="#contact">Contact</a></li>

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
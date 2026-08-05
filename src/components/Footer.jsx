import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Sameer More</h2>

        <p className="footer-tagline">
          Analyzing Data. Creating Insights. Driving Decisions.
        </p>

        <p className="footer-tech">
          Power BI • SQL • Python • Excel
        </p>

        <div className="footer-social">

          <a
            href="https://www.linkedin.com/in/sameermore3104"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Sameermore3104"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a href="mailto:samirmore2004@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Sameer More. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
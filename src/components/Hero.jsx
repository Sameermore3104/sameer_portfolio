import "../styles/Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      data-aos="fade-right"
    >

      <div className="hero-left">

        <p className="hello">Hello, I'm</p>

        <h1>Sameer More</h1>

        <h2>Aspiring Data Analyst</h2>

        <p className="tagline">
          Power BI • SQL • Python • Excel
        </p>

        <p className="description">
          B.Tech Computer Science (AI & ML) graduate passionate about Data Analytics
          and Business Intelligence. Skilled in Power BI, SQL, Python, Excel,
          DAX and Power Query with hands-on experience building interactive dashboards
          and analytics solutions.
        </p>

        <div className="hero-buttons">

          <a
            href="/resume.pdf"
            className="primary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

          <a href="#projects" className="secondary-btn">
            View Projects
          </a>

        </div>

        <div className="open-work">
          🟢 Open to Work
        </div>

        <div className="social-icons">

          <a
            href="https://www.linkedin.com/in/sameermore3104"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Sameermore3104"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:samirmore2004@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="/profile.jpg"
          alt="Sameer More"
        />

      </div>

    </section>
  );
}

export default Hero;
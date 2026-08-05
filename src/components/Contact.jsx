import "../styles/Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-title">

        <p>CONTACT</p>

        <h2>Let's Connect</h2>

        <span>
          I'm currently looking for Data Analyst opportunities.
          Feel free to reach out.
        </span>

      </div>

      <div className="contact-container">

        <div className="contact-card">

          <FaEnvelope className="contact-icon"/>

          <h3>Email</h3>

          <a href="mailto:samirmore2004@gmail.com">
            samirmore2004@gmail.com
          </a>

        </div>

        <div className="contact-card">

          <FaPhoneAlt className="contact-icon"/>

          <h3>Phone</h3>

          <a href="tel:+918888976067">
            +91 8888976067
          </a>

        </div>

        <div className="contact-card">

          <FaMapMarkerAlt className="contact-icon"/>

          <h3>Location</h3>

          <p>Pune, Maharashtra</p>

        </div>

      </div>

      <div className="contact-social">

        <a
          href="https://www.linkedin.com/in/sameermore3104"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Sameermore3104"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

      </div>

    </section>
  );
}

export default Contact;
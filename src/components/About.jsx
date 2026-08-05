import "../styles/About.css";
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <section
      className="about"
      id="about"
      data-aos="fade-up"
    >

      <div className="about-left">

        <p className="section-title">ABOUT ME</p>

        <h2>
          Data Analyst with a Passion for
          <span> Business Intelligence</span>
        </h2>

        <p>
          Hi, I'm <strong>Sameer More</strong>, a passionate
          <strong> Data Analyst</strong> with a B.Tech in Computer Science
          Engineering (AI & ML). I specialize in analyzing data,
          building interactive dashboards, and converting raw datasets into
          meaningful business insights.
        </p>

        <p>
          My expertise includes <strong>Power BI</strong>,
          <strong> SQL</strong>,
          <strong> Excel</strong>,
          <strong> Python</strong>,
          <strong> DAX</strong>, and
          <strong> Power Query</strong>. I enjoy solving business problems
          through data-driven decision making and continuously improving my
          analytical skills.
        </p>

        <div className="stats">

          <div className="stat-card">
            <h3>2+</h3>
            <span>Projects</span>
          </div>

          <div className="stat-card">
            <h3>2</h3>
            <span>Internship</span>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <span>Technologies</span>
          </div>

        </div>

      </div>

      <div className="about-right">

        <div className="info-card">
          <FaGraduationCap className="icon" />
          <div>
            <h3>Education</h3>
            <p>B.Tech CSE (AI & ML)</p>
            <span>2022 – 2026</span>
          </div>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h3>Location</h3>
            <p>Pune, Maharashtra</p>
            <span>Open to Relocate</span>
          </div>
        </div>

        <div className="info-card">
          <FaBriefcase className="icon" />
          <div>
            <h3>Career Goal</h3>
            <p>Data Analyst</p>
            <span>Open to Full-Time Opportunities</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;
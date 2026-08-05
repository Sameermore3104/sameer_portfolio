import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-title">
        <p>PROJECTS</p>

        <h2>Featured Projects</h2>

        <span>
          Real-world projects showcasing my data analytics and machine learning
          skills.
        </span>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}

        <div className="project-card">

          <img
            src="/blinkit.png"
            alt="Blinkit Dashboard"
          />

          <div className="project-content">

            <h3>Blinkit Sales Dashboard</h3>

            <p>
              Designed an interactive Power BI dashboard to analyze sales
              performance, outlet performance, product categories and key
              business KPIs using Power BI, DAX and Excel.
            </p>

            <div className="tech-stack">

              <span>Power BI</span>

              <span>DAX</span>

              <span>Excel</span>

            </div>

            <div className="project-buttons">

              <a
                href="https://github.com/Sameermore3104/Blinkit_Sales_Dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> View on GitHub
              </a>

            </div>

          </div>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <img
            src="/stock.png"
            alt="Stock Market Trend Forecasting"
          />

          <div className="project-content">

            <h3>Stock Market Trend Forecasting</h3>

            <p>
              Developed a stock market prediction application using Python,
              TensorFlow, LSTM and Streamlit with interactive visualization of
              real-time stock trends.
            </p>

            <div className="tech-stack">

              <span>Python</span>

              <span>TensorFlow</span>

              <span>LSTM</span>

              <span>Streamlit</span>

            </div>

            <div className="project-buttons">

              <a
                href="https://github.com/Sameermore3104/STOCK-TREND-FORECAST"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> View on GitHub
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
import "../styles/Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="experience-title">

        <p>EXPERIENCE</p>

        <h2>Professional Experience</h2>

      </div>

      <div className="timeline">

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <h3>Machine Learning Research Intern</h3>

            <h4>BitZeta IT Solutions LLP</h4>

            <span>May 2025 – July 2025</span>

            <ul>

              <li>
                Developed a Stock Market Trend Forecasting application using
                Python, TensorFlow, LSTM and Streamlit.
              </li>

              <li>
                Built an interactive dashboard for stock prediction and
                visualization.
              </li>

              <li>
                Worked with real-time financial datasets and data preprocessing.
              </li>

            </ul>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <h3>Rural Internship</h3>

            <h4>Bhusawal Municipal Council</h4>

            <span>2023</span>

            <ul>

              <li>
                Worked on waste management initiatives in local market areas.
              </li>

              <li>
                Collaborated with teams to improve community awareness and
                planning.
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;
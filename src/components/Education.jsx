import "../styles/Education.css";

function Education() {
  return (
    <section className="education" id="education">

      <div className="education-title">

        <p>EDUCATION</p>

        <h2>Academic Journey</h2>

      </div>

      <div className="education-grid">

        <div className="edu-card">

          <h3>B.Tech Computer Science Engineering (AI & ML)</h3>

          <h4>D. Y. Patil International University, Pune</h4>

          <span>2022 – 2026</span>

          <p>
            Graduated in Computer Science Engineering with specialization
            in Artificial Intelligence & Machine Learning.
          </p>

        </div>

        <div className="edu-card">

          <h3>Higher Secondary Certificate (HSC)</h3>

          <h4>D.S High School, Bhusawal</h4>

          <span>2022</span>

          <p>
            Maharashtra State Board • Percentage : <strong>78.67%</strong>
          </p>

        </div>

        <div className="edu-card">

          <h3>Secondary School Certificate (SSC)</h3>

          <h4>K. Narkhede Vidyalaya, Bhusawal</h4>

          <span>2020</span>

          <p>
            Maharashtra State Board • Percentage : <strong>72.60%</strong>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Education;
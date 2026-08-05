import "../styles/Certificates.css";

function Certificates() {
  return (
    <section className="certificates" id="certificates">

      <div className="certificate-title">

        <p>CERTIFICATIONS</p>

        <h2>Licenses & Certifications</h2>

      </div>

      <div className="certificate-grid">

        <div className="certificate-card">

          <h3>Microsoft Certified</h3>

          <h4>Azure AI Fundamentals (AI-900)</h4>

          <p>
            Microsoft certification covering Artificial Intelligence,
            Machine Learning fundamentals and Azure AI Services.
          </p>

        </div>

        <div className="certificate-card">

          <h3>MS-CIT</h3>

          <h4>Maharashtra State Certificate in Information Technology</h4>

          <p>
            Completed practical training in Microsoft Office,
            Internet, Digital Productivity and Computer Fundamentals.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Certificates;
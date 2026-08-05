import "../styles/Skills.css";

import {
  FaDatabase,
  FaPython,
  FaChartBar,
  FaFileExcel,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiMysql,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiTensorflow,
  SiStreamlit,
} from "react-icons/si";

function Skills() {

  const skills = [
    { icon: <FaChartBar />, title: "Power BI", level: "Advanced" },
    { icon: <FaDatabase />, title: "SQL", level: "Intermediate" },
    { icon: <FaPython />, title: "Python", level: "Intermediate" },
    { icon: <FaFileExcel />, title: "Excel", level: "Advanced" },
    { icon: <SiMysql />, title: "MySQL", level: "Intermediate" },
    { icon: <FaCode />, title: "DAX & Power Query", level: "Intermediate" },
  ];

  return (
    <section className="skills" id="skills">

      <div className="skills-title">
        <p>TECHNICAL SKILLS</p>
        <h2>Skills & Technologies</h2>
        <span>
          Technologies and tools I use for Data Analytics,
          Business Intelligence and Machine Learning.
        </span>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <p>{skill.level}</p>

          </div>

        ))}

      </div>

      <div className="tools">

        <h3>Tools & Libraries</h3>

        <div className="tool-grid">

          <div className="tool-card"><FaChartBar /><span>Power BI</span></div>

          <div className="tool-card"><FaDatabase /><span>SQL</span></div>

          <div className="tool-card"><SiMysql /><span>MySQL</span></div>

          <div className="tool-card"><FaPython /><span>Python</span></div>

          <div className="tool-card"><FaFileExcel /><span>Excel</span></div>

          <div className="tool-card"><SiPandas /><span>Pandas</span></div>

          <div className="tool-card"><SiNumpy /><span>NumPy</span></div>

          <div className="tool-card"><SiTensorflow /><span>TensorFlow</span></div>

          <div className="tool-card"><SiStreamlit /><span>Streamlit</span></div>

          <div className="tool-card"><SiJupyter /><span>Jupyter</span></div>

          <div className="tool-card"><FaGitAlt /><span>Git</span></div>

          <div className="tool-card"><FaGithub /><span>GitHub</span></div>

          <div className="tool-card"><FaCode /><span>VS Code</span></div>

        </div>

      </div>

    </section>
  );
}

export default Skills;
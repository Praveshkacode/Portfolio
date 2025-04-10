import React from "react";

function ResumeNew() {
  return (
    <div className="about-section" style={{ marginTop: "0px", padding: "20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ paddingTop: "0px", paddingBottom: "20px" }}>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1zjrMfbCioqQL0QmuQ-MkSEs8Ehk7ZtIP"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              marginBottom: "20px",
              backgroundColor: "#c084fc",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              borderRadius: "8px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a855f7")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#c084fc")}
          >
            📄 Download Resume
          </a>

          {/* Resume Main Box */}
          <div
            style={{
              backgroundColor: "#111111",
              borderRadius: "12px",
              padding: "40px",
              boxShadow: "0 6px 20px rgba(160, 120, 210, 0.3)",
              color: "#ffffff",
              textAlign: "left",
            }}
          >
            {/* Personal Info */}
            <h2 style={{ fontWeight: "bold", color: "#c084fc", marginBottom: "10px" }}>
              Pravesh Mishra
            </h2>
            <p style={{ marginBottom: "10px" }}>
              📞 9140756185 | 📧 pravesh182002@gmail.com
            </p>
            <p style={{ marginBottom: "30px" }}>
              <a href="https://www.linkedin.com/in/pravesh-mishra-42802b222/" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
              <a href="https://github.com/Praveshkacode" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
              <a href="https://www.geeksforgeeks.org/user/pravesh182002/" target="_blank" rel="noopener noreferrer" style={linkStyle}>GFG</a>
              <a href="https://praveshmishra.netlify.app/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Portfolio</a>
            </p>

            {/* Heading */}
            <h1 style={headingStyle}>MY <strong className="purple">RESUME</strong></h1>

            {/* Objective */}
            <Section title="Objective">
              Striving to attain a challenging role in a reputable organization where I can utilize my technical skills and knowledge effectively to contribute towards company growth.
            </Section>

            {/* Education */}
            <Section title="Education">
              <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
                <li><strong>United Institute of Technology, Prayagraj</strong> (B.Tech CSE) — CGPA: 8.0 (2021 - Present)</li>
                <li><strong>Red Eagle Public School, Saidabad</strong> — 12th CBSE: 82.2% (2021)</li>
                <li><strong>Red Eagle Public School, Saidabad</strong> — 10th CBSE: 81% (2019)</li>
              </ul>
            </Section>

            {/* Projects */}
            <Section title="Projects">
              <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
                <Project title="🔗 Maha Kumbh 2025 Personalized Website" link="https://mahakumbh.live">
                  Created a personalized page generator for Maha Kumbh event using React, Node.js, Express, MongoDB, and Cloudinary.
                </Project>
                <Project title="🔗 Bhojan Bazaar - Food Ordering System" link="https://bhojanbazzar.onrender.com/">
                  Built an AI-based food recommendation and ordering platform with payments and admin dashboard.
                </Project>
                <Project title="🔗 Golden Chat - Real-Time Chat App" link="https://github.com/Praveshkacode/Golden-Chat-React">
                  Developed a real-time chat app using React and Socket.IO.
                </Project>
                <Project title="📄 Bhojan Bazaar Research Paper">
                  Published research paper on AI Food Recommendation System in Bhojan Bazaar.
                </Project>
              </ul>
            </Section>

            {/* Work Experience */}
            <Section title="Work Experience">
              React Developer Intern at Trust Me Pvt Ltd (Startup) — Built fraud detection UI for Instagram Sellers and integrated backend APIs.
            </Section>

            {/* Skills */}
            <Section title="Skills">
              <ul style={{ paddingLeft: "20px" }}>
                <li>⚡ Programming: C++, Python, JavaScript</li>
                <li>⚡ Web Development: React, Node.js, Express, MongoDB</li>
                <li>⚡ Tools: VS Code, GitHub, MS Office, Android Studio</li>
                <li>⚡ Basic Blockchain Knowledge</li>
                <li>⚡ 500+ DSA Problems Solved</li>
              </ul>
            </Section>

          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable components for cleaner JSX
const Section = ({ title, children }) => (
  <>
    <h2 className="purple" style={{ fontSize: "24px", marginBottom: "15px" }}>{title}</h2>
    <p style={{ fontSize: "16px", marginBottom: "20px" }}>{children}</p>
  </>
);

const Project = ({ title, link, children }) => (
  <li style={{ marginBottom: "20px" }}>
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: "#c084fc", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
        {title}
      </a>
    ) : (
      <p style={{ fontWeight: "bold", color: "#c084fc", fontSize: "18px" }}>{title}</p>
    )}
    <p style={{ marginTop: "5px", color: "#d1d5db" }}>{children}</p>
  </li>
);

const linkStyle = {
  color: "#c084fc",
  fontWeight: "bold",
  textDecoration: "none",
  marginRight: "10px"
};

const headingStyle = {
  fontSize: "2.4em",
  paddingBottom: "20px",
  color: "#c084fc",
  fontWeight: "bold",
  textAlign: "center"
};

export default ResumeNew;

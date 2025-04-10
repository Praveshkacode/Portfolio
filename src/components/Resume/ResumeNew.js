import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} style={{ paddingTop: "20px", paddingBottom: "20px" }}>

            {/* Download Button - Outside Box */}
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <a
                href="https://drive.google.com/uc?export=download&id=1zjrMfbCioqQL0QmuQ-MkSEs8Ehk7ZtIP"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#8b5cf6",
                  color: "#ffffff",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "18px",
                  transition: "0.3s",
                  display: "inline-block",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://drive.google.com/uc?export=download&id=1zjrMfbCioqQL0QmuQ-MkSEs8Ehk7ZtIP', '_blank');
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#a78bfa")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#8b5cf6")}
              >
                📄 Download Resume
              </a>
            </div>


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
                <a href="https://www.linkedin.com/in/pravesh-mishra-42802b222/" target="_blank" rel="noopener noreferrer" style={{ color: "#c084fc", fontWeight: "bold", textDecoration: "none", marginRight: "10px" }}>LinkedIn</a>
                <a href="https://github.com/Praveshkacode" target="_blank" rel="noopener noreferrer" style={{ color: "#c084fc", fontWeight: "bold", textDecoration: "none", marginRight: "10px" }}>GitHub</a>
                <a href="https://www.geeksforgeeks.org/user/pravesh182002/" target="_blank" rel="noopener noreferrer" style={{ color: "#c084fc", fontWeight: "bold", textDecoration: "none", marginRight: "10px" }}>GFG</a>
                <a href="https://praveshmishra.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#c084fc", fontWeight: "bold", textDecoration: "none" }}>Portfolio</a>
              </p>

              {/* Heading */}
              <h1 style={{ fontSize: "2.4em", paddingBottom: "20px", color: "#c084fc", fontWeight: "bold", textAlign: "center" }}>
                MY <strong className="purple">RESUME</strong>
              </h1>

              {/* Objective */}
              <h2 className="purple" style={{ fontSize: "24px", marginBottom: "15px" }}>Objective</h2>
              <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                Striving to attain a challenging role in a reputable organization where I can utilize my technical skills and knowledge effectively to contribute towards company growth.
              </p>

              {/* Education */}
              <h2 className="purple" style={{ fontSize: "24px", marginBottom: "15px" }}>Education</h2>
              <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
                <li><strong>United Institute of Technology, Prayagraj</strong> (B.Tech CSE) — CGPA: 8.0 (2021 - Present)</li>
                <li><strong>Red Eagle Public School, Saidabad</strong> — 12th CBSE: 82.2% (2021)</li>
                <li><strong>Red Eagle Public School, Saidabad</strong> — 10th CBSE: 81% (2019)</li>
              </ul>

              {/* Projects */}
              <h2 className="purple" style={{ fontSize: "24px", marginBottom: "15px" }}>Projects</h2>
              <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
                <li style={{ marginBottom: "20px" }}>
                  <a href="https://mahakumbh.live" target="_blank" rel="noopener noreferrer" style={{ color: "#c084fc", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>🔗 Maha Kumbh 2025 Personalized Website</a>
                  <p style={{ marginTop: "5px", color: "#d1d5db" }}>
                    Created a personalized page generator for Maha Kumbh event using React, Node.js, Express, MongoDB, and Cloudinary.
                  </p>
                </li>

                <li style={{ marginBottom: "20px" }}>
                  <a href="https://bhojanbazzar.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#c084fc", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>🔗 Bhojan Bazaar - Food Ordering System</a>
                  <p style={{ marginTop: "5px", color: "#d1d5db" }}>
                    Built an AI-based food recommendation and ordering platform with payments and admin dashboard.
                  </p>
                </li>

                <li style={{ marginBottom: "20px" }}>
                  <a href="https://github.com/Praveshkacode/Golden-Chat-React" target="_blank" rel="noopener noreferrer" style={{ color: "#c084fc", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>🔗 Golden Chat - Real-Time Chat App</a>
                  <p style={{ marginTop: "5px", color: "#d1d5db" }}>
                    Developed a real-time chat app using React and Socket.IO.
                  </p>
                </li>

                <li style={{ marginBottom: "20px" }}>
                  <p style={{ fontWeight: "bold", color: "#c084fc", fontSize: "18px" }}>📄 Bhojan Bazaar Research Paper</p>
                  <p style={{ marginTop: "5px", color: "#d1d5db" }}>
                    Published research paper on AI Food Recommendation System in Bhojan Bazaar.
                  </p>
                </li>
              </ul>

              {/* Work Experience */}
              <h2 className="purple" style={{ fontSize: "24px", marginBottom: "15px" }}>Work Experience</h2>
              <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                React Developer Intern at Trust Me Pvt Ltd (Startup) — Built fraud detection UI for Instagram Sellers and integrated backend APIs.
              </p>

              {/* Skills */}
              <h2 className="purple" style={{ fontSize: "24px", marginBottom: "15px" }}>Skills</h2>
              <ul style={{ paddingLeft: "20px" }}>
                <li>⚡ Programming: C++, Python, JavaScript</li>
                <li>⚡ Web Development: React, Node.js, Express, MongoDB</li>
                <li>⚡ Tools: VS Code, GitHub, MS Office, Android Studio</li>
                <li>⚡ Basic Blockchain Knowledge</li>
                <li>⚡ 500+ DSA Problems Solved</li>
              </ul>

            </div>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;

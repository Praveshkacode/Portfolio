import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import password8 from "../../Assets/Projects/Password-Generator.png";
import mahakumbh from "../../Assets/Projects/mahakumbh.png";
import olympic from "../../Assets/Projects/Olympic-Game.png";
import Bhojanbazaar from "../../Assets/Projects/Bhojan-bazaar.png";
import newsWeb from "../../Assets/Projects/News-Web.png";
import GoldenChat from "../../Assets/Projects/Real-Time-Chat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mahakumbh}
              isBlog={false}
              title="Maha-Kumbh 2025 Personalized Website"
              description="Developed a dynamic, responsive website using React.js, Node.js, Express, MongoDB, and Cloudinary that offers users a personalized experience. The platform allows users to create custom pages with unique URLs, upload images, and explore event details, attractions, and historical insights. It features secure page deletion through password authentication and ensures seamless functionality across all devices."
              ghLink="https://mahakumbh.live/"
              demoLink="https://github.com/kumbh2025/maha-kumbh-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bhojanbazaar}
              isBlog={false}
              title="Bhojan-Bazaar (Food Order Management)"
              description="Developed a full-stack web application using React.js, Node.js, Express, and MongoDB to streamline the food ordering process. Integrated features like login authentication, cart management, payment options (COD and Stripe), and user order tracking. Designed and implemented an admin panel for managing food items and monitoring orders efficiently."
              ghLink="https://github.com/Praveshkacode/Food-Ordering-Website-Frontend-React-JS"
              demoLink="https://bhojanbazzar.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoldenChat}
              isBlog={false}
              title="Golden Whatsapp"
              description="Created a real-time chat application using the MERN stack and Socket.IO, supporting instant messaging, user authentication, and responsive design."
              ghLink="https://github.com/Praveshkacode/Golden-Chat-React"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olympic}
              isBlog={false}
              title="Olympic Fantasy Game"
              description="Developed an Olympic fantasy game using React where users can log in, buy and sell teams, and earn profits based on in-game outcomes like wins or losses. Integrated interactive gameplay mechanics, dynamic state management, and a responsive UI for an engaging user experience."
              ghLink="https://github.com/Praveshkacode/Olympic-Game"
              demoLink="https://olympic-game.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password8}
              isBlog={false}
              title="Password Generator"
              description="Developed an 8-digit password generator using HTML, CSS, and JavaScript, allowing users to quickly create secure passwords with a single click. Designed a clean, user-friendly interface with responsive styling to ensure a smooth experience across all devices. The tool focuses on simplicity, efficiency, and ease of use."
              ghLink="https://github.com/Praveshkacode/PasswordGenerator"
              demoLink="https://password8.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsWeb}
              isBlog={false}
              title="The News"
              description="Developed a news website using HTML, CSS, and JavaScript that fetches real-time news articles from the NewsAPI.org. Implemented search and filter functionalities to help users easily find news based on keywords or categories. Designed a responsive and user-friendly interface for seamless browsing across devices. Ensured smooth API integration for live updates and dynamic content display."
              ghLink="https://github.com/Praveshkacode/News-website-projects"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

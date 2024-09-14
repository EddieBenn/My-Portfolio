import "./Projects.css";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCards/ProjectCards";
import colorSharp2 from "../../assets/images/color-sharp2.png";
import { FiExternalLink } from "react-icons/fi";
import decagon from "../../assets/images/decagon-image.png";
import royalSpring from "../../assets/images/school-image.png";
import oasis from '../../assets/images/oasis-image.png';
import max from '../../assets/images/max-image.png';
import events from '../../assets/images/royal-events.png';
import appleRental from '../../assets/images/apple-rental-image.png';
import "animate.css";

const Projects = () => {
  const projects = [
    {
      title: "Pipeline Activation Management System(PAMS)",
      description: "An electric vehicle acquisition platform that allows users to sign up as champions by completing various testing and verification stages. The platform currently supports over 40,000 users with role-based functionalities.",
      technologies: "TypeScript, JSON Web Token, PostgreSQL, Express.js, NestJS, InversifyJS, TypeORM, AWS, GCP, Node.js, Swagger, Knex.js, Zod and Docker.",
      image: max,
      contribution: "I collaborated with other engineers and was an assistant lead on the backend.",
      projectUrl: "https://www.max.ng/",
    },
    {
      title: "Royal Spring Schools",
      description: "A student portal platform that allows students to register for courses, mark courses as completed, and view their registered courses.",
      technologies: "Node.js, Cloudinary, React, Redux, Typescript Tailwind-CSS and PostgreSQL.",
      contribution: "A personal project I built myself (Both frontend and backend, including creating and incorporating an external api).",
      image: royalSpring,
      projectUrl: "https://royal-spring-schools.vercel.app/",
    },
    {
      title: "Decagon Recruitment Web Portal",
      description: "A recruitment portal for tech enthusiasts to apply for various Decagon training programs.",
      technologies: "TypeScript, JSON Web Token, Express.js, MongoDB, Node.js, Jest, Zod and Docker.",
      contribution: "I collaborated with other engineers on the backend",
      image: decagon,
      projectUrl: "https://decagon.institute/",
    },
    {
      title: "Oasis People HRM",
      description: "An Employee Management System, that tracks attendance, manages employee leave requests and shows when employees clock-in/clock-out.",
      technologies: "Cloudinary, Axios, MongoDB, Node.js, Express, Typescript, React, Nodemailer, Multer, Vite, Tailwind-CSS.",
      contribution: "I collaborated with other engineers on the backend",
      image: oasis,
      projectUrl: "https://oasis-people-hrm-woad.vercel.app/",
    },
    {
      title: "Apple Rental Service",
      description: "A full NestJS project where users can rent various Apple devices",
      technologies: "Bcrypt, NestJS, Json Web Token, Swagger, Nodemailer, TypeORM, Typescript, Class Validator, Class Transformer, PostgreSQL, Moment.js",
      image: appleRental,
      contribution: "I personally built the whole structure from start to finish.",
      projectUrl: "https://github.com/EddieBenn/full-project-NestJS",
    },
    {
      title: "Royal Events",
      description: "An events management system that allows users to create, view, report, comment on, like, update, register/pay for and delete events. An admin section that allows the admin to block events, block users etc.",
      technologies: "Cloudinary, Express, Json Web Token, Multer, Multer Storage Cloudinary, Nodemailer, PostgreSQL, Sequelize, Axios, Bootstrap, React, Sweetalert2",
      image: events,
      contribution: "I personally built the whole structure from start to finish.",
      projectUrl: "https://royal-events.vercel.app/",
    },
  ];

  const projectRedirectionFunction = (projectUrl:string) => {
    return window.open(projectUrl, '_blank')
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Projects & Accomplishments</h2>
            <p>
            These projects represent a mix of personal initiatives, professional contributions, and collaborative efforts. Each project features a brief description on hover and is linked to either a live demo or its GitHub repository. They highlight my ability to solve complex problems, quickly adapt to new technologies, and deliver effective, scalable solutions.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Accomplishments
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                     <ProjectCard key={index} {...project} onClick={() => projectRedirectionFunction(project.projectUrl)}/>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row
                    style={{
                      backgroundColor: "#151515",
                      padding: "20px",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Col
                      xs={12}
                      md={6}
                      xl={7}
                      style={{ width: "50%", padding: "10px" }}
                    >
                      <h4>
                        Software Engineer (Decagon Institute){" "}
                      </h4>
                      <h4>Accomplishments:</h4>
                      <ul>
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I led a team of 18 developers to build SwiftRiders, a dispatch delivery MVP. Users could request and track riders in real-time and chat with them through the app. This project provided interns with hands-on experience in software development.{" "}
                            <a
                              href="https://swift-rider-site.onrender.com/"
                              target="__blank"
                            >
                              <FiExternalLink className="link-out" />
                            </a>
                          </p>
                        </li>
                        <br />
                        <li>
                        <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I managed and mentored a team of about 15 developers to develop and successfully deploy a music streaming MVP known as Smooze.{" "}
                            <a
                              href="https://smoozepro.netlify.app/"
                              target="__blank"
                            >
                              <FiExternalLink className="link-out" />
                            </a>
                          </p>
                        </li>
                        <br />
                        <li>
                        <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I conducted code reviews, provided feedback to interns, and led the development of QuickBite, a food delivery MVP. The platform serves as a marketplace, enabling restaurants and vendors to register and manage their own food listings. {" "}
                            <a
                              href="https://quick-bite-app.netlify.app/"
                              target="__blank"
                            >
                              <FiExternalLink className="link-out" />
                            </a>
                          </p>
                        </li>
                        <br />
                      </ul>
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      xl={7}
                      style={{ width: "50%", padding: "10px" }}
                    >
                      <h4>
                        Software Engineer (MAX){" "}
                      </h4>
                      <h4>Accomplishments:</h4>
                      <ul>
                        <li>
                          <p
                            style={{
                              margin: "0px",
                              textAlign: "justify",
                              width: "90%",
                            }}
                          >
                            I collaborated with engineers to develop and successfully deploy Maxone, a unified platform for all business services. This streamlined operations, reduced costs, and improved user experience. The enterprise partnership and campaign management feature also enabled the company to onboard more customers efficiently.{" "}
                            <a
                              href="https://one.dev.maxdrv.com/"
                              target="__blank"
                            >
                              <FiExternalLink className="link-out" />
                            </a>
                          </p>
                        </li>
                        <br />
                      </ul>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="color-sharp"
      />
    </section>
  );
};

export default Projects;

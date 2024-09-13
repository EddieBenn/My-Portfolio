import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import { useState } from "react";
import contactImage from "../../assets/images/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { sendMessage } from "../../Axios/apiCall";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({
    success: false,
    message: "",
  });

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      setButtonText("Sending...");
      const response = await sendMessage(formDetails)
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (response.status === 200) {
        setStatus({ success: true, message: "Message Sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      }

      setTimeout(() => {
        setStatus({
          success: false,
          message: "",
        });
      }, 3000);

    } catch (error) {
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });

      setTimeout(() => {
        setStatus({
          success: false,
          message: "",
        });
      }, 5000);
      console.log(error);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
          <TrackVisibility>

              {({ isVisible }) =>
            <img src={contactImage} alt="contact us" className={isVisible ? 'animate__animated animate__swing' : ""}/>
          }

           </TrackVisibility>
          </Col>
          <Col md={6}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? 'animate__animated animate__swing' : ""}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
           </div>
           }
           </TrackVisibility>
           </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

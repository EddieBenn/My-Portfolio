import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../../assets/images/Ebn.jpeg';
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import NewsLetter from '../NewsLetter/NewsLetter';

const Footer = () => {


    return (
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <NewsLetter />
                    <Col sm={6} >
                        <img src={logo} alt="logo" style={{ borderRadius: '25%' }} width={100} />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end' style={{ alignContent: 'center' }}>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/edidiong-ndaobong-8832641b1/" target="_blank" rel="noopener noreferrer">
                                <PiLinkedinLogoBold style={{ color: 'white', fontWeight: 900 }} />
                            </a>
                            <a href="https://github.com/EddieBenn" target="_blank" rel="noopener noreferrer">
                                <FaGithub style={{ color: 'white', fontWeight: 900 }} />
                            </a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer
import { Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import logo from '../../assets/images/thumbs up.gif'


const NewsLetter = () => {


    return (
        <>
        <Col lg={12}>
        <TrackVisibility>
        {({ isVisible }) =>
            <div style={{display: `${isVisible ? 'block' : 'none'}`}} className={ `newsletter-bx ${isVisible ? 'animate__animated animate__zoomInLeft' : "" }`}>
                    <div style={{ width: "100%", display: "flex", height: '80px', justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                        <h3>Thank You for Visiting!!!</h3>
                        <img src={logo} alt="thumbs up gif" width="10px"/>
                    </div>
            </div>
             }
             </TrackVisibility>
        </Col>
        </>
    )
}

export default NewsLetter
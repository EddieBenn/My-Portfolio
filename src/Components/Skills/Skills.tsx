import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import eighty from '../../assets/images/eightyPercent.jpeg'
import ninetyFive from '../../assets/images/ninetyFivePercent.jpeg'
import colorSharp from '../../assets/images/color-sharp.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? 'animate__animated animate__bounce' : ""}>
                                        <h2>Skills</h2>
                                        <h4>Backend Engineering using Node.js, NestJS, TypeScript</h4>
                                        <p style={{ margin: '10px' }}>Express.js, NestJS, Knex.js, InversifyJS, MongoDB, Typescript, Google Cloud Platform, Amazon Web Services, PostgreSQL, MySQL, Postman, Swagger, Jest, Git and GitHub, and Test-driven Development.</p>
                                        <h4>Frontend Engineering using HTML/CSS and React</h4>
                                        <p style={{ margin: '10px' }}>HTML 5, CSS 3, React with Typescript, Redux Toolkit and Tailwind CSS</p>
                                        <h4>Agile Methodologies</h4>
                                        <p style={{ margin: '10px' }}>Strong Communication Skills, Excellent Attention to Details, Fast Learner, Competent Problem-solving Skills, Time Management Skills, Analytical Thinking, Competent Teamwork Ability, and Excellent Leadership Skills</p>
                                    </div>
                                }
                            </TrackVisibility>
                            <br />
                                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                            <div className='item'>
                                                <img src={ninetyFive} alt='skill' />
                                                <h5>Backend Development (NestJS/Typescript)</h5>
                                            </div>
                                            <div className='item'>
                                                <img src={eighty} alt='skill' />
                                                <h5>Frontend Development (React/Typescript)</h5>
                                            </div>
                                            <div className='item'>
                                                <img src={ninetyFive} alt='skill' />
                                                <h5>Agile Methodologies</h5>
                                            </div>
                                        </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt='color-sharp' className='background-image-left' />
        </section>
    )
}


export default Skills
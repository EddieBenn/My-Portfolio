import { Col } from 'react-bootstrap';
import '../Projects.css'

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string;
    image: string;
    projectUrl: string;
    contribution?: string;
    onClick?: () => void | any;
}

const ProjectCard = (CardProps:ProjectCardProps) => {

    const handleClick = () => {
        if (CardProps.onClick) {
            CardProps.onClick();
        }
    };

    return(
        <Col sm={6} md={4}>
            <div className='proj-imgbx' onClick={handleClick}>
                <img src= {CardProps.image} alt='project' height={'100%'}/>
                <div className='proj-txtx'>
                    <h4 style={{fontSize: '20px'}}>{CardProps.title}</h4>
                    <span>{CardProps.description}</span><br />
                    <span><h5 style={{color: '#E69E7F', display: 'inline'}}><b>Tech: </b></h5>{CardProps.technologies}</span><br />
                    <span><h5 style={{color: '#E69E7F', display: 'inline'}}><b>My Role: </b></h5>{CardProps.contribution}</span>
                </div>
            </div>
        </Col>
    )
}


export default ProjectCard
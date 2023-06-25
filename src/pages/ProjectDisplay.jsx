import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectsList';
import { AiFillGithub } from "react-icons/ai";
import '../styles/ProjectDisplay.css'

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = projectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <p>
            <b>
                Technologies: 
            </b>
            {project.technologies}  
        </p>
        < AiFillGithub />
    </div>
  )
}

export default ProjectDisplay
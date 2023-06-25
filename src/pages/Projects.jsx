/* eslint-disable react/jsx-key */
import ProjectItem from "../Components/ProjectItem"
import '../styles/Projects.css'
import { projectList } from "../helpers/ProjectsList"


const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
      {projectList.map((project, idx) => (
        <ProjectItem id={idx} image={project.image} name={project.name} />
      ))}
      </div>
    </div>
  )
}

export default Projects
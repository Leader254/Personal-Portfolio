/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'

const ProjectItem = ({image, name, id}) => {
  const navigate = useNavigate();
  return (
    <div className="projectItem" onClick={() => {
      navigate(`/project/${id}`)
    }}>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
        <h2> {name} </h2>
    </div>
  )
}

export default ProjectItem
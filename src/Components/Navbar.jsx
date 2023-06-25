import { Link , useLocation} from "react-router-dom";
import '../styles/Navbar.css';
import { FiMenu } from 'react-icons/fi';
import { useState, useEffect } from "react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setNavbar(false);
    }, [location])
    


  return (
    <div className="navbar" id={navbar ? "open" : close}>
        <div className="toggleButton">
            <button onClick={() =>{
                setNavbar(!navbar);
            }}>
                <FiMenu />
            </button>
        </div>
        <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Experience</Link>
        </div>
    </div>
  )
}

export default Navbar
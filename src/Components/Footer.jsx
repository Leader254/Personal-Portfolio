import { BsTwitter } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { SiLinkedin } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <AiFillGithub />
            <SiLinkedin />
            <BiLogoInstagramAlt />
            <BsTwitter />
        </div>
        <p> &copy; Made with ❤ by Sam.</p>
    </div>
  )
}

export default Footer
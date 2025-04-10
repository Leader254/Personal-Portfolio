import { BsTwitter } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { SiLinkedin } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/Leader254" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
        <a href="https://linkedin.com/in/samuel-gatheru" target="_blank" rel="noopener noreferrer">
          <SiLinkedin />
        </a>
        <a href="https://instagram.com/i.ts_samh" target="_blank" rel="noopener noreferrer">
          <BiLogoInstagramAlt />
        </a>
        <a href="https://x.com/SamKaka_" target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
      </div>
      <p>&copy; Made with ❤ by Sam.</p>
    </div>
  )
}

export default Footer

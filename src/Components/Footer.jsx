import { BsTwitter } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { SiLinkedin } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import '../styles/Footer.css'
import { Link } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://github.com/Leader254">
          <AiFillGithub />
        </Link>
        <Link to="https://linkedin.com/in/samuel%20gatheru">
          <SiLinkedin />
        </Link>
        <Link to="https://instagram.com/i.ts_samh">
          <BiLogoInstagramAlt />
        </Link>
        <Link to="https://twitter.com/samkaka_">
          <BsTwitter />
        </Link>
      </div>
      <p> &copy; Made with ❤ by Sam.</p>
    </div>
  )
}

export default Footer
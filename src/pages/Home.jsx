/* eslint-disable react/no-unescaped-entities */
import { SiLinkedin } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { TbMailFilled } from "react-icons/tb";
import { FaDev } from "react-icons/fa"
import '../styles/Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>
          Hello, I'm Samuel Wachira
        </h2>
        <div className="prompt">
          <p>I am a software developer mainly focused in building web systems with different web Technologies.</p>
          <Link to="https://www.github.com/Leader254">
            <AiFillGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/samuel-wachira-2b0b3a1b0/">
            < SiLinkedin />
          </Link>
          <Link to="mailto: samuelwachira219@gmail.com">
            < TbMailFilled />
          </Link>
          <Link to="https://dev.to/samuelwachira">
            < FaDev />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h2>Front-End And Tools</h2>
            <span>Javascript, React, Next Js, Tailwind CSS, Git & Github
            </span>
          </li>
          <li className="item">
            <h2>Back-End & Databases</h2>
            <span>
              Nodejs,.NET, Sql, Express, Postman & ThunderClient, Mssql, Azure, Azure Data Studio.
            </span>
          </li>
          <li className="item">
            <h2>Languages And Hosting</h2>
            <span>
              Javascript, C#, Python, Azure, Netlify, Vercel, Github Pages.
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
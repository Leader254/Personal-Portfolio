/* eslint-disable react/no-unescaped-entities */
import { SiLinkedin } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { TbMailFilled } from "react-icons/tb";
import '../styles/Home.css'
// import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>
          Hello, I'm Samuel Wachira
          {/* <Typewriter

            onInit={(typewriter) => {
              typewriter
                .typeString("Hello, I'm Samuel Wachira")
                .pauseFor(1000)
                .deleteAll()
                .typeString("A Software Developer")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          /> */}
        </h2>
        <div className="prompt">
          <p>I am a software developer mainly focused in building web systems with different web Technologies.</p>
          < AiFillGithub />
          < SiLinkedin />
          < TbMailFilled />
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h2>Front-End And Tools</h2>
            <span>
              Html, Css, Javascript, React, Bootstrap, Tailwind CSS, Sass, Yarn,
              Npm, Git, Github, Vscode, Adobe Photoshop
            </span>
          </li>
          <li className="item">
            <h2>Back-End & Databases</h2>
            <span>
              Nodejs, Sql, Express, Postman & ThunderClient, Api, Jwt Auth, Sql Server, Mssql, Azure, Azure Data Studio.
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
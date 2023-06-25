import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";
// import '../styles/Experience.css'
import { BsPersonWorkspace } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#000"> 
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2019 - 2023"
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">Kirinyaga University</h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">Bsc Computer Science</h4>
          <p>
            Took my university education here and graduated with a Bsc Computer Science degree.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2017 - 2018"
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">Mwicwiri Secondary School</h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">High School Education</h4>
          <p>
            Took my form 3 and form 4 education here and graduated with a KCSE certificate and a mean grade of C+.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015 - 2016"
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<IoSchoolSharp />}
        >
          <h3 className="vertical-timeline-element-title">Ndathi Boys High School</h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">High School Education</h4>
          <p>
            Took my form 1 and form 2 education here and later transferred to Mwicwiri Secondary School.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022, 3 months"
        iconStyle={{ background: '#e9d35b', color: '#fff' }}
        icon={<BsPersonWorkspace />}
        >
          <h3 className="vertical-timeline-element-title">OutSpan Medical College</h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">IT intern and Support Desk</h4>
          <p>
            I worked as an IT intern and support desk at Outspan Medical College. I was tasked with the responsibility of maintaining the college computer systems and networks. I also helped students with their computer problems.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023, 3 months"
        iconStyle={{ background: '#e9d35b', color: '#fff' }}
        icon={<BsPersonWorkspace />}
        >
          <h3 className="vertical-timeline-element-title">The Jitu Training</h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">Software Development Trainee</h4>
          <p>
            I worked as a software development trainee at The Jitu Training. I was tasked with the responsibility of learning and mastering different web technologies such as HTML, CSS, Javascript, React, Tailwind CSS, Sass, Yarn, Npm, Git, Github, Nodejs, Sql, Express, Postman & ThunderClient, Api, Jwt Auth, Sql Server, Mssql, Azure, Azure Data Studio, Azure, Netlify, Vercel, Github Pages.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#000">

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Now"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<BsPersonWorkspace />}
        >
          <h3 className="vertical-timeline-element-title">The Jitu</h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
          <p>
            I worked as a Software Developer at The Jitu, where I contributed to various projects using a wide range of technologies. My responsibilities included building frontend applications with Next.js and React.js, developing backend services with Node.js and .NET, and managing SQL databases for ERP systems and reporting solutions.
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
            I worked as a software development trainee at The Jitu Training. I learned and mastered different web technologies such as HTML, CSS, Javascript, React, Tailwind CSS, Sass, Yarn, Npm, Git, Github, Nodejs, Sql, Express, Postman, Api, Jwt Auth, Sql Server, Mssql, Azure, and more.
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
          <h4 className="vertical-timeline-element-subtitle">IT Intern and Support Desk</h4>
          <p>
            I worked as an IT intern and support desk at Outspan Medical College. I was tasked with maintaining the college computer systems and networks and helping students with their computer problems.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: '#000', color: '#fff' }}
          icon={<IoSchoolSharp />}
        >
          <h2 className="text-center font-bold text-xl">Education</h2>
        </VerticalTimelineElement>

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

      </VerticalTimeline>
    </div>
  )
}

export default Experience;

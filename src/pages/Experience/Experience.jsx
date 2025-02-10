import React from 'react'
import './Experience.scss'

import Lottie from 'lottie-react';
import experience from '../../assets/experience.json'

const Experience = () => {
  return (
    <div className='experience'>
      <div className="experience-heading">
        <div className="experience-heading-img-div">
          <Lottie className="experience-img" animationData={experience} loop={true} autoplay={true} speed={1} />
        </div>
        <div className="experience-heading-text-div">
          <div className="experience-heading-text">
            <h1>Experience</h1>
          </div>
          <div className="experience-heading-sub-text">
            <h3>Work and Internship</h3>
          </div>
          <p className="experience-header-detail-text">I've completed one internship. I've mostly done projects on my own and I am actively looking for full time jobs.</p>
        </div>
      </div>
      <div className="experience-body">
        <div className="work-experience-heading">
          <h1>Here's my experience</h1>
        </div>
        <div className="work-experience-body">
          <div className="work-experience-section">
            <div className="heading">
              <h2>Internship</h2>
            </div>
            <div className="work-experience-card card">

              <div className="card-header">
                <div className="card-img">
                  <img src="../src/assets/digital.jpeg" alt="" srcset="" />
                </div>
                <div className="card-title">
                  <div className="role-name">
                    <h2>Software Developer Intern</h2>
                  </div>
                  <div className="company-name">
                    <h3>DIGITAL LIVE24,</h3>
                  </div>
                </div>
                <div className="card-duration">
                  <h3>Sep, 23 - Feb, 2024</h3>
                </div>
              </div>
              <div className="card-content">
                <ul>
                  <li>⚡<p>I worked on a <b>Content Management System (CMS)</b> project, contributing to the development and enhancement of digital content management solutions.</p></li>
                  <li>⚡<p>Assisting in the design, development, and implementation of CMS features.</p></li>
                  <li>⚡<p>Writing clean, efficient, and maintainable code to improve content organization and accessibility.</p></li>
                  <li>⚡<p>Collaborating with cross-functional teams to integrate user-friendly interfaces and backend functionalities.</p></li>
                  <li>⚡<p>Debugging and troubleshooting issues to enhance system performance and reliability.</p></li>
                  <li>⚡<p>Learning and applying best practices in software development, including version control, API integration, and database management.</p></li>
                  <li>⚡<p>This experience helped me strengthen my technical skills in web development and gain hands-on exposure to real-world software engineering practices.</p></li>
                  <li>
                    <div className="icons">
                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />


                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />


                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg" />


                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="work-experience-section">
            <div className="heading">
              <h2>Work</h2>
            </div>
            <div className="work-experience-card card">
              Loading...
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

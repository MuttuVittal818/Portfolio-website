import React from 'react';
import './Projects.scss';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import Lottie from 'lottie-react';
import project from '../../assets/project.json';

const Projects = () => {
  return (
    <div className='project'>
      <div className="project-heading">
        <div className="project-heading-img-div">
          <Lottie className="project-img" animationData={project} loop={true} autoplay={true} speed={1} />
        </div>
        <div className="project-heading-text-div">
          <div className="project-heading-text">
            <h1>Projects</h1>
          </div>
          <p className="project-header-detail-text">My projects makes use of vast variety of latest technology tools. My best experience is to create  Web Development projects.</p>
        </div>
      </div>

      <div className="project-body">
        <div className="project-work-heading">
          <h1>Here's my projects</h1>
        </div>
        <div className="project-work-body">
          <div className="project-work-card card">
            <div className="project-work-img item1">
              <img src="/image/project1.png" />
            </div>
            <div className="project-work-content item2">
              <div className="project-work-header">
                <div className="project-work-heading">
                  <div className="project-work-title">
                    <h2>QR-Codes Generater & Reader</h2>
                    <h3>Simple Static website</h3>
                  </div>

                </div>
                <div className="project-work-duration">
                  <h3>June, 2023</h3>
                  <div className="project-work-links">
                    <a href="https://qr-codes-generater-and-reader-web-project.vercel.app/"><OpenInNewSharpIcon /></a>
                    <a href="https://github.com/MuttuVittal818/QR-Codes-Generater-and-Reader-Web-Project"><GitHubIcon /></a>
                  </div>
                </div>
              </div>

              <div className="project-work-body">
                <ul>
                  <li>⚡
                    <p>Tech Stack: HTML, CSS, JavaScript, Libraries</p>
                  </li>
                  <li>⚡
                    <p>Developed a QR code website with generator and reader functionalities using qrcode.js and html5-qrcode.</p>
                  </li>
                  <li>⚡
                    <p>Managed Designed a user-friendly interface supporting text input and image upload for scanning.</p>
                  </li>
                  <li>⚡
                    <p>Created a well-structured menu for navigating the home page, generating QR codes, scanning QR codes, uploading images, and additional options for setting up the QR code.</p>
                  </li>
                  <li>
                    <div className="icons">
                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />


                    </div>
                  </li>
                </ul></div>
            </div>
          </div>

          <div className="project-work-card card">
            <div className="project-work-img item1">
              <img src="/image/project2.png" />
            </div>
            <div className="project-work-content">
              <div className="project-work-header">
                <div className="project-work-heading">
                  <div className="project-work-title">
                    <h2>Sorting Visualizer</h2>
                    <h3>Static website</h3>
                  </div>

                </div>
                <div className="project-work-duration">
                  <h3>January, 2022</h3>
                  <div className="project-work-links">
                    <a href="https://sortingvisualizerwebapplication.vercel.app/"><OpenInNewSharpIcon /></a>
                    <a href="https://github.com/MuttuVittal818/Fullstack_Web"><GitHubIcon /></a>
                  </div>
                </div>
              </div>
              <div className="project-work-body item2">
                <ul>
                  <li>⚡
                    <p>Tech Stack: React.js, Redux, CSS.</p>
                  </li>
                  <li>⚡
                    <p>Created a project to visualize and analyze sorting algorithms using React.js.</p>
                  </li>
                  <li>⚡
                    <p>Implemented a structured control panel to customize array size, sorting speed, and algorithm selection, with Redux for state management.</p>
                  </li>
                  <li>⚡
                    <p>Included functionality to display the time complexity and space complexity of the selected algorithm.</p>
                  </li>
                  <li>
                    <div className="icons">
                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                      <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />

                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />


                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />




                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

import React from 'react'

import Resume from '../static/img/resume.png'
import LinkedIn from '../static/img/Linkedin.png'
import Git from '../static/img/github.png'
// import dummyPP from '../static/img/dummyPP.webp'
import ResumeFile from '../static/files/Jozel_Surro_MainResume.pdf'
import ProfileP from '../static/img/ProfileP.png'



export const HomePage = () => {
  return (
    <div className='home-page' id="home">
    <section className='home-parent-header'>
      {/* <div className="floater">
        <p>Developer</p>
      </div> */}
      <div className='header-info'>
        <p className='info-title'>Software Developer</p>
        {/* <p className='info-desc'>As a recent <span className='desc-bold'>Software Development</span> graduate from Bow Valley College, I am eager to leverage my skills and transition into a software developer role, where I can apply my <span className='desc-bold'>knowledge</span> to real-world challenges and continue growing within the <span className='desc-bold'>tech industry</span>.</p> */}
        <p className='info-desc' >
           Hi!  I am a recent graduate with a solid foundation in <span className='desc-bold'>Software Development</span> and a keen eye for detail. I bring a proactive approach to problem-solving and innovation. I thrive in dynamic and collaborative environments, where I can leverage my technical skills to develop efficient, user-focused solutions.  
            <br /><br />
          My goal is to contribute to projects that shape the future of technology while continuously expanding my knowledge and adapting to emerging trends. </p>
      </div>

      <p className='info-desc'>

</p>

          
      <div className='header-photo'>
        <img
          src={ProfileP}
          className='personal-photo'
          alt='Personal'
        />
      </div>
    </section>



    <section className='home-parent-footer'>
      <a href={ResumeFile} className='header-logo-container'>
        <img
        src={Resume}
        className='header-logo resumelogo'
        alt='Resume Logo'
        />
      </a>
      <a href="https://www.linkedin.com/in/jozelsurro1998" className='header-logo-container'>
        <img
        src={LinkedIn}
        className='header-logo'
        alt='LinkedIn Logo'
        />
      </a>
      <a href="https://github.com/Jozelsurro2301" className='header-logo-container'>
        <img
        src={Git}
        className='header-logo gitlogo'
        alt='Github Logo'
        />
      </a>
    </section>

    <div class="container home-wave-container">
      <svg viewBox="0 0 500 500" preserveAspectRatio="none" class="wave-svg home-wave-svg">
      <path d="M0,100 C150,200 350,0 500,100 L500,500 L0,500 Z" />
      </svg>
    </div>

    </div>
  )
}

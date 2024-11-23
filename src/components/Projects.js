import React from 'react'
// import VideoIcon from '../static/img/video_player_temp.svg'
import externalLink from '../static/img/external-link.png'
 import BrightsityVideo from '../static/videos/Brightsity.mp4'
 import BrightsityThumbnail from '../static/img/BrightsityThumbnail.png'
 import CoworkingVideo from '../static/videos/Co-working.mp4'
 import CoworkingThumbnail from '../static/img/Co-working_Thumbnial.png'


export const Projects = () => {
  return (
    <>
    <div  className="projects" id="project">

        <div  className="project_header">
            <p className="project_header_text">Projects</p>
        </div>
        <hr className='header-hrbreak'></hr>

        

        <section className="project_container" id="Brighsity">
            
            <div className="project_info">
                <div className="project_title">
                    <p className="project_name">Brightsity Mobile Application</p>

                    <a href="https://github.com/Jozelsurro2301/BrightsityMobileApp">
                        <img
                            src={externalLink}
                            alt="External Link"
                            className="external_link"
                        />
                    </a>
                </div>
               
                <p className="project_desc">Led a team to port a online learning platform web application to a mobile platform using React Native, enhancing user accessibility and expanding the application's scope. Managed the project lifecycle from planning to developing, ensuring timely delivery and timely performance  </p>

            </div>
          
            <div className="project_video"> 
                <video 
                    src={BrightsityVideo}
                    className="video"
                    controls
                    muted
                    poster={BrightsityThumbnail}
                />
                 {/* <img 
                    src={VideoIcon}
                    className="video"
                /> */}

            </div>
        </section>

        <div className='break-lines'>
            <hr className='hrbreak'></hr>
            <hr className='hrbreak'></hr>
            <hr className='hrbreak'></hr>
        </div>
        
        {/* <section className="project_container" id='SchoolReg'>

            <div className="project_video"> 
                <img 
                    src={VideoIcon}
                    className="video"
                />
            </div>
            
            <div className="project_info">
                <div className="project_title">
                    <p className="project_name">School Registration System</p>

                    <a href="https://github.com/Jozelsurro2301/SchoolRegistration_WebApp">
                        <img
                            src={externalLink}
                            alt="External Link"
                            className="external_link"
                        />
                    </a>
                </div>

                <p className="project_desc">Designed and implemented a comprehensive school registration system to streamline the registration process and reduce administrative overhead. Developed user-friendly interfaces and efficient backend process, improving registration efficiency</p>
            </div>
          
        </section> */}

        {/* <div className='break-lines'>
            <hr className='hrbreak'></hr>
            <hr className='hrbreak'></hr>
            <hr className='hrbreak'></hr>
        </div> */}

        {/* <section className="project_container" id='FinApp'>
            
            <div className="project_info">
                <div className="project_title">
                    <p className="project_name">Financial Budget Mobile Application</p>

                    <a href="https://github.com/Jozelsurro2301/BudgetBuddy_MobileApp">
                        <img
                            src={externalLink}
                            alt="External Link"
                            className="external_link"
                        />
                    </a>
                </div>

                <p className="project_desc">Developed and designed an android mobile application for budget management, enabling users to track and manage their expenses efficiently.</p>

            </div>
                    <div className="project_video"> 
                <img 
                    src={VideoIcon}
                    className="video"
                />
            </div>
        </section>

        <div className='break-lines'>
            <hr className='hrbreak'></hr>
            <hr className='hrbreak'></hr>
            <hr className='hrbreak'></hr>
        </div> */}


        {/* <section className="project_container" id='SpotifyApp'>

            <div className="project_video"> 
                <img 
                    src={VideoIcon}
                    className="video"
                />
            </div>
            
            <div className="project_info">
                <div className="project_title">
                    <p className="project_name">Spotify Web Application</p>

                    <a href="https://github.com/Jozelsurro2301">
                        <img
                            src={externalLink}
                            alt="External Link"
                            className="external_link"
                        />
                    </a>
                </div>

                <p className="project_desc">Built a music streaming application using Spotify API with functionalities similar to Spotify, allowing users to create playlists, stream music and manage their library</p>
            </div>
            
          
        </section>

        <div className='break-lines'>
            <hr className='hrbreak'></hr>
            <hr className='hrbreak'></hr>
            <hr className='hrbreak'></hr>
        </div> */}

        <section className="project_container" id='Co-working'>
            
            <div className="project_info">
                <div className="project_title">
                    <p className="project_name">Co-working Registry Website</p>

                    <a href="https://github.com/Jozelsurro2301/CoWorkingRegistry_WebApp">
                        <img
                            src={externalLink}
                            alt="External Link"
                            className="external_link"
                        />
                    </a>
                </div>

                <p className="project_desc">Created a co-working space reservation system akin to Airbnb, allowing users to book and manage workspace reservations. Implemented robust security features and real-time booking updates, resulting in a seamless user experience.</p>
            </div>

            
            <div className="project_video"> 
                {/* <img 
                    src={VideoIcon}
                    className="video"
                /> */}

                <video
                    className='video'
                    src={CoworkingVideo}
                    muted
                    poster={CoworkingThumbnail}
                    controls
                />

              
            </div>
        </section>


        
    </div>

<div class="container projects-wave-container">
<svg viewBox="0 0 500 500" preserveAspectRatio="none" class="wave-svg projects-wave-svg">
<path d="M0,100 C150,200 350,0 500,100 L500,500 L0,500 Z" />
</svg>
</div>
</>
  )
}
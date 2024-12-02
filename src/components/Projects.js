import React from 'react'
// import VideoIcon from '../static/img/video_player_temp.svg'
import externalLink from '../static/img/external-link.png'
 import BrightsityVideo from '../static/videos/Brightsity.mp4'
 import BrightsityThumbnail from '../static/img/BrightsityThumbnail.png'
 import CoworkingVideo from '../static/videos/Co-working.mp4'
 import CoworkingThumbnail from '../static/img/Co-working_Thumbnial.png'
 import Budget_Buddy  from '../static/videos/Budget_Buddy.mp4'
 import School_Reg from '../static/videos/School_Reg.mp4'
 import School_Reg_Thumnail from '../static/img/School_Reg_Thumbnail.png'
 import Budget_Buddy_Thumbnail from '../static/img/Budget_Buddy_Thumbnail.png'
 import HTMLlogo from '../static/img/Html.webp'
 import CSSlogo from '../static/img/CSS.webp'
 import JavaScript from '../static/img/JavaScript.png'
 import Reactlogo from '../static/img/React.svg'
 import ReactNlogo from '../static/img/react-native.svg'
 import ExpoLogo from '../static/img/expo_logo.webp'
 import NodeJSlogo from '../static/img/Nodejs.png'
 import SQLitelogo from '../static/img/SQLite.png'
 import AndriodStudioLogo   from '../static/img/Andriod_StudioLogo.webp'
 import JavaLogo   from '../static/img/JavaLogo.png'



export const Projects = () => {
  return (
    <>
    <div  className="projects" id="project">

        <div  className="project_header">
            <p className="project_header_text">Projects</p>
        </div>
        {/* <hr className='header-hrbreak'></hr> */}

        

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
               
                <p className="project_desc">Led a team to successfully port a web-based online learning platform backed by <span className='project_desc_bold'>10 years</span> of research, that serves over <span className='project_desc_bold'>10,000</span> users across <span className='project_desc_bold'>7</span> countries, to a mobile application using React Native. Significantly enhancing accessibility and expanding its reach. Managed the entire project lifecycle, from strategic planning and development to deployment, ensuring on-time delivery, optimal performance, and a seamless user experience." </p>

                <div className='project_tools'>
                    <img src={ReactNlogo} className='tools' />
                    <img src={ExpoLogo} className='tools' />
                    <img src={JavaScript} className='tools' />
                    <img src={HTMLlogo} className='tools' />
                    <img src={CSSlogo} className='tools' />
                </div>

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


        <section className="project_container" id='Co-working'>


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
           
                <div className='project_tools'>
                    <img src={Reactlogo} className='tools'/>
                    <img src={SQLitelogo} className='tools'/>
                    <img src={NodeJSlogo} className='tools' />
                    <img src={JavaScript} className='tools' />
                    <img src={HTMLlogo} className='tools' />
                    <img src={CSSlogo} className='tools' />
                </div>
           
            </div>

            
        </section>
        
        

        <div className='break-lines'>
            <hr className='hrbreak'></hr>
            <hr className='hrbreak'></hr>
            <hr className='hrbreak'></hr>
        </div>

        <section className="project_container" id='FinApp'>
            
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

                <div className='project_tools'>
                    <img src={SQLitelogo} className='tools'/>
                    <img src={JavaScript} className='tools' />
                    <img src={AndriodStudioLogo} className='tools' />
                    <img src={JavaLogo} className='tools' />
                </div>
            
            </div>
            <div className="project_video"> 
                <video 
                    src={Budget_Buddy}
                    className="video"
                    controls
                    muted
                    poster={Budget_Buddy_Thumbnail}
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


        <section className="project_container" id='SchoolReg'>

        <div className="project_video"> 
                <video 
                    src={School_Reg}
                    className="video"
                    controls
                    muted
                    poster={School_Reg_Thumnail}
                />
                 {/* <img 
                    src={VideoIcon}
                    className="video"
                /> */}

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
            
                <div className='project_tools'>
                    <img src={Reactlogo} className='tools'/>
                    <img src={JavaScript} className='tools' />
                    <img src={CSSlogo} className='tools' />
                    <img src={HTMLlogo} className='tools' />
                    <img src={SQLitelogo} className='tools' />
                    <img src={NodeJSlogo} className='tools' />
                </div>
            
            </div>
          
        </section>


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

        


        
    </div>

<div class="container projects-wave-container">
<svg viewBox="0 0 500 500" preserveAspectRatio="none" class="wave-svg projects-wave-svg">
<path d="M0,100 C150,200 350,0 500,100 L500,500 L0,500 Z" />
</svg>
</div>
</>
  )
}
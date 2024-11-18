import React, { useEffect, useRef } from 'react';
import HTMLlogo from '../static/img/Html.webp'
import CSSlogo from '../static/img/CSS.webp'
import Cplus from '../static/img/C++.svg'
import Csharp from '../static/img/Csharp.png'
import JavaScript from '../static/img/JavaScript.png'
import Reactlogo from '../static/img/React-Symbol.png'
import ReactNlogo from '../static/img/react-native.svg'
import MSSQLlogo from '../static/img/MSSQL.webp'
import MySQLlogo from '../static/img/mysqyl.png'
import Dockerlogo from '../static/img/docker.png'
import Gitlogo from '../static/img/git.png'
import Postmanlogo from '../static/img/Postman.png'
import Nodelogo from '../static/img/nodeje.png'
import Figmalogo from '../static/img/Figma.png'




export const SkillsPage = () => {
 // Refs for individual logos
 const htmlLogoRef = useRef(null);
 const cssLogoRef = useRef(null);
 const jsLogoRef = useRef(null);
 const csharpLogoRef = useRef(null);
 const cplusLogoRef = useRef(null);
 const reactLogoRef = useRef(null);
 const mssqlLogoRef = useRef(null);
 const mysqlLogoRef = useRef(null);
 const reactNLogoRef = useRef(null);
 const dockerLogoRef = useRef(null);
 const gitLogoRef = useRef(null);
 const postmanLogoRef = useRef(null);
 const nodeLogoRef = useRef(null);
 const figmaLogoRef = useRef(null);

//  // Function to handle mouse movement
//  const handleMouseMove = (e, logoRef) => {
//    const { width, height, left, top } = logoRef.current.getBoundingClientRect();
//    const mouseX = e.clientX - left;
//    const mouseY = e.clientY - top;

//    const centerX = width / 2;
//    const centerY = height / 2;

//    // Calculate the mouse position relative to the center of the image
//    const deltaX = (mouseX - centerX) / centerX;
//    const deltaY = (mouseY - centerY) / centerY;

//    // Limit the rotation to avoid excessive leaning
//    const maxRotation = 15; // Max rotation in degrees
//    const rotateX = deltaY * maxRotation;  // Rotate on the X-axis
//    const rotateY = -deltaX * maxRotation; // Rotate on the Y-axis

//    // Apply transformation immediately
//    logoRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//    logoRef.current.style.transition = "none";  // Disable transition during mousemove
//  };

//  // Function to reset rotation when mouse leaves
//  const resetRotation = (logoRef) => {
//    logoRef.current.style.transition = "transform 0.5s ease-out"; // Smooth transition back
//    logoRef.current.style.transform = "rotateX(0deg) rotateY(0deg)"; // Reset to original position
//  };

//  // Attach event listeners for each logo
//  useEffect(() => {
//    const logos = [
//      { ref: htmlLogoRef },
//      { ref: cssLogoRef },
//      { ref: jsLogoRef },
//      { ref: csharpLogoRef },
//      { ref: cplusLogoRef },
//      { ref: reactLogoRef },
//      { ref: mssqlLogoRef },
//      { ref: mysqlLogoRef },
//      { ref: reactNLogoRef },
//      { ref: dockerLogoRef },
//      { ref: gitLogoRef },
//      { ref: postmanLogoRef },
//      { ref: nodeLogoRef },
//      { ref: figmaLogoRef },
//    ];

//    // Add mousemove event listeners to each logo
//    logos.forEach((logo) => {
//      const logoElement = logo.ref.current;
//      if (logoElement) {
//        const handleMouseMoveOnLogo = (e) => handleMouseMove(e, logo.ref);
//        logoElement.addEventListener('mousemove', handleMouseMoveOnLogo);

//        // Reset rotation when mouse leaves
//        logoElement.addEventListener('mouseleave', () => resetRotation(logo.ref));

//        // Clean up event listener when component unmounts
//        return () => {
//          logoElement.removeEventListener('mousemove', handleMouseMoveOnLogo);
//          logoElement.removeEventListener('mouseleave', () => resetRotation(logo.ref));
//        };
//      }
//    });
//  }, []);

// const tiltEffectSettings = {
//     max: 25, // max tilt rotation (degrees (deg))
//     perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
//     scale: 1.1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
//     speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
//     easing: "cubic-bezier(.03,.98,.52,.99)" // easing (transition-timing-function) of the enter/exit transition
//   };
  
//   const cards = document.querySelectorAll(".card");
  
//   cards.forEach(card => {
//     card.addEventListener("mouseenter", cardMouseEnter);
//     card.addEventListener("mousemove", cardMouseMove);
//     card.addEventListener("mouseleave", cardMouseLeave);
//   });
  
//   function cardMouseEnter(event) {
//     setTransition(event);
//   }
  
//   function cardMouseMove(event) {
//     const card = event.currentTarget;
//     const cardWidth = card.offsetWidth;
//     const cardHeight = card.offsetHeight;
//     const centerX = card.offsetLeft + cardWidth/2;
//     const centerY = card.offsetTop + cardHeight/2;
//     const mouseX = event.clientX - centerX;
//     const mouseY = event.clientY - centerY;
//     const rotateXUncapped = (+1)*tiltEffectSettings.max*mouseY/(cardHeight/2);
//     const rotateYUncapped = (-1)*tiltEffectSettings.max*mouseX/(cardWidth/2);
//     const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
//                     (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
//     const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
//                     (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);
  
//     card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
//                             scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
//   }
  
//   function cardMouseLeave(event) {
//     event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
//     setTransition(event);
//   }
  
//   function setTransition(event) {
//     const card = event.currentTarget;
//     clearTimeout(card.transitionTimeoutId);
//     card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
//     card.transitionTimeoutId = setTimeout(() => {
//       card.style.transition = "";
//     }, tiltEffectSettings.speed);
//   }

  return (
    <div className='skills-page' id="skills">

        <section className='skills-header'>
            <p className='skills-title'>Skills</p>
        </section>
        <hr className='styled-hr'/>
        <section className='skills-logos'>
            {/* First Row */}
            <div className="skills-logo-row" style={{ gridArea: 'a' }} ref={htmlLogoRef}>
          <img src={HTMLlogo} className="skills-logo" />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'b' }} ref={cssLogoRef}>
          <img src={CSSlogo} className="skills-logo" />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'c' }} ref={jsLogoRef}>
          <img src={JavaScript} className="skills-logo" />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'd' }} ref={csharpLogoRef}>
          <img src={Csharp} className="skills-logo" />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'e' }} ref={cplusLogoRef}>
          <img src={Cplus} className="skills-logo" />
        </div>

        {/* Second Row */}
        <div className="skills-logo-row" style={{ gridArea: 'f' }} ref={reactLogoRef}>
          <img src={Reactlogo} className="skills-logo" />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'j' }} ref={mssqlLogoRef}>
          <img src={MSSQLlogo} className="skills-logo" />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'k' }} ref={mysqlLogoRef}>
          <img src={MySQLlogo} className="skills-logo" />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'l' }} ref={reactNLogoRef}>
          <img src={ReactNlogo} className="skills-logo" />
        </div>

        {/* Third Row */}
        <div className="skills-logo-row" style={{ gridArea: 'm' }} ref={dockerLogoRef}>
          <img src={Dockerlogo} className="skills-logo" />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'n' }} ref={gitLogoRef}>
          <img src={Gitlogo} className="skills-logo" />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'o' }} ref={postmanLogoRef}>
          <img src={Postmanlogo} className="skills-logo" />
        </div>

        {/* Fourth Row */}
        <div className="skills-logo-row" style={{ gridArea: 'p' }} ref={nodeLogoRef}>
          <img src={Nodelogo} className="skills-logo" />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'q' }} ref={figmaLogoRef}>
          <img src={Figmalogo} className="skills-logo" />
        </div>

        </section>


    </div>
  )
}

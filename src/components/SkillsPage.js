import React, { useEffect} from 'react';
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



 useEffect(() => {
  const tiltEffectSettings = {
    max: 25, 
    perspective: 1000, 
    scale: 1.1, 
    speed: 500, 
    easing: "cubic-bezier(.03,.98,.52,.99)" 
  };
  
  
  function cardMouseEnter(event) {
    setTransition(event);
  }
  
  
  function cardMouseMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateX = (tiltEffectSettings.max * mouseY) / (rect.height / 2);
    const rotateY = (-tiltEffectSettings.max * mouseX) / (rect.width / 2);
    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${Math.max(
      -tiltEffectSettings.max,
      Math.min(tiltEffectSettings.max, rotateX)
    )}deg) rotateY(${Math.max(
      -tiltEffectSettings.max,
      Math.min(tiltEffectSettings.max, rotateY)
    )}deg) scale(${tiltEffectSettings.scale})`;
  }
  
  
  function cardMouseLeave(event) {
    event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition(event);
  }
  
  function setTransition(event) {
    const card = event.currentTarget;
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = "";
    }, tiltEffectSettings.speed);
  }



  const cards = document.querySelectorAll(".skills-logo-row");
  cards.forEach(card => {
    card.addEventListener("mouseenter", cardMouseEnter);
    card.addEventListener("mousemove", cardMouseMove);
    card.addEventListener("mouseleave", cardMouseLeave);
  });
  return () => {
    cards.forEach(card => {
      card.removeEventListener("mouseenter", cardMouseEnter);
      card.removeEventListener("mousemove", cardMouseMove);
      card.removeEventListener("mouseleave", cardMouseLeave);
    });
  };
}, []);



 




  return (
    <div className='skills-page' id="skills">

        <section className='skills-header'>
            <p className='skills-title'>Skills</p>
        </section>
        <hr className='styled-hr'/>
        <section className='skills-logos'>
            {/* First Row */}
        <div className="skills-logo-row" style={{ gridArea: 'a' }} >
          <img src={HTMLlogo} className="skills-logo"  alt='HTML Logo'/>
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'b' }} >
          <img src={CSSlogo} className="skills-logo" alt='CSS Logo' />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'c' }} >
          <img src={JavaScript} className="skills-logo" alt='JavaScript Logo' />
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'd' }} >
          <img src={Csharp} className="skills-logo" alt='C Sharp Logo'/>
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'e' }} >
          <img src={Cplus} className="skills-logo" alt='C plus plus Logo'/>
        </div>

        {/* Second Row */}
        <div className="skills-logo-row" style={{ gridArea: 'f' }} >
          <img src={Reactlogo} className="skills-logo" alt='React Logo'/>
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'j' }} >
          <img src={MSSQLlogo} className="skills-logo" alt='MSSQL Logo'/>
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'k' }}>
          <img src={MySQLlogo} className="skills-logo" alt='MySQL Logo'/>
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'l' }} >
          <img src={ReactNlogo} className="skills-logo" alt='React Native Logo'/>
        </div>

        {/* Third Row */}
        <div className="skills-logo-row" style={{ gridArea: 'm' }} >
          <img src={Dockerlogo} className="skills-logo" alt='Docker Logo'/>
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'n' }} >
          <img src={Gitlogo} className="skills-logo" alt='Github Logo'/>
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'o' }} >
          <img src={Postmanlogo} className="skills-logo" alt='Postman Logo'/>
        </div>

        {/* Fourth Row */}
        <div className="skills-logo-row" style={{ gridArea: 'p' }} >
          <img src={Nodelogo} className="skills-logo" alt='Node JS Logo'/>
        </div>
        <div className="skills-logo-row" style={{ gridArea: 'q' }} >
          <img src={Figmalogo} className="skills-logo" alt='Figma Logo'/>
        </div>

        </section>

        <div class="container skills-wave-container">
          <svg viewBox="0 0 500 500" preserveAspectRatio="none" class="wave-svg skills-wave-svg">
          <path d="M0,150 C100,250 400,50 500,150 L500,500 L0,500 Z" />
          </svg>
        </div>
    </div>
  )
}

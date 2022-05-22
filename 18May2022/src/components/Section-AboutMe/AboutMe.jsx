import React from 'react'
import "./AboutMe.css"
import profile from "./portfolioAvatar.jpg"
import programming from "./Programming.gif"

const AboutMe = () => {
    return (
        <div className="about__me" id="aboutme">
            <div className="about__me__top">
            <div className="text-box__about__me">
            <h1 className="about__me__heading">A Full-Stack MERN-Web-Developer</h1>
            <h4 className=" about__me__paragraph"> I create Full-Stack Web Based Application on Demand using Mern or Ejs-Templeting</h4>
            </div>
            <div className="profile__img__container">
                <img className="profile__img" src={profile} />
            </div>
            </div>
            <div className="about__me__bottom">
                <img className="about__bottom__img" src={programming}></img>
                
            </div>
        </div>
    )
}

export default AboutMe



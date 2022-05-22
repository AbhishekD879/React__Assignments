import React, { useState } from 'react'
import "./Header.css"
import logo from "./logo.png"

const Header = () => {
    const [burgerToggler,setburgerToggler]=useState("");
   
    let toggleBarHandler=()=>{
        if(burgerToggler===""){
            setburgerToggler("active");
            
        }else{
            setburgerToggler("");
           
        }
    }
    return (
        <div className="Nav__bar">
            <div className="nav__logo">
               {/* <h2 className="logo">AD</h2> */}
               <img className="logo" src={logo} />
            </div>
            <a className="navbar__burger" onClick={toggleBarHandler} role="button" aria-label="menu" aria-expanded="false" data-target="#navMenu">
                <span className="bar" aria-hidden="true"></span>
                <span className="bar" aria-hidden="true"></span>
                <span className="bar" aria-hidden="true"></span>
            </a>
            <div className={`nav__itemsbar ${burgerToggler}`} id="navMenu">
                    <div className="nav_item"><a href="#aboutme">About Me</a></div>
                    <div className="nav_item"><a href="#MYSKILLS">My Skills</a></div>
                    <div className="nav_item"><a href="#CONTACTME">Contact Me</a></div>
            </div>
            

        </div>
    )
}

 export default Header

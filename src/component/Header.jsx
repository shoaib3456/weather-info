import React from 'react'
import '../styles/index.css'
import {Link} from 'react-router-dom'

const Header =(props)=>{
    return (
        <>
        <header className="header">
        <div className="logo-container">
            <img src={process.env.PUBLIC_URL+"images/logo.png"} alt="logo" />
             <span className="">Weather Info</span> 
        </div>

            <ul className="navigation-bar">
               <Link  to="/" className="list-items" style={{border:"2px solid"+props.homeActive}}> Home</Link>
               <Link  to="/about" className="list-items" style={{border:"2px solid"+props.contactActive}}> About</Link>
            </ul>

        </header>
        
        </>
    )
}


export default Header
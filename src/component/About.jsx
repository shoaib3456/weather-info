import React from 'react'
import '../styles/about.css'
import Header from './Header'
import Footer from './Footer'

const About = ()=>{
    return (
        <>
        <Header homeActive ="#1e84be00" contactActive="#2b9ddf"/>
        <div className="about-conatiner">
            <h4>About Weather Info App ?</h4>
            <p>
                This is simple weather forecast and Temperature React app. we can search the weather sitution of any place and city with some more features like weather status,minimum and maximum Temperature of the day and wind status.
            </p>
            <h4>How it's Work ?</h4>
            <p>
                In this react app i am using a <a href ="http://openweathermap.org/">Openweathermap</a> Api for realtime weather forcast and Information. i am using react router technology for increasing the website experiance.  
            </p>
            <h4>How to use ?</h4>
            <p>
                <p>You can easily find a wether status by follwing these steps.</p>
                <ul>
                    <li>Go to the,home page. </li>
                    <li>find a serchbar and enter your location/place.</li>
                    <li>click on serch icon or hit Enter. </li>
                    <li>You can see the wether status are locted on a bottom of search bar. </li>
                </ul>
            </p>
        </div>
        <Footer size="100px"/>
        </>
    )
}

export default About
import React, { useState } from 'react'
import Header from './Header'
import '../styles/index.css'
import Footer from './Footer'

const getDateFunc=()=>{
  var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
  let date = new Date()
  let curDate = month[date.getMonth()]+" / "+date.getDate()+" / "+date.getFullYear()
  return curDate
}

const Home = () => {

  const [city,setCity] = useState("Karachi")
  const [region,setRegion] = useState("Pk")
  const [temp,setTemp] = useState("15")
  const [icon,setIcon] = useState("01d")
  const [status,setStatus] = useState("Sunny")
  const [avgTemp,setAvgTemp] = useState("14/16")
  const [speed,setSpeed] = useState("7.8")
  const [degree,setdegree] = useState("45")
  const [pressure,setPressure] = useState("2039")
  // Variables
    // --------------------
    let apiKey = "ae79137468fedd7e2fdf970f5469d986"
  async function searchWether(e){
   if(e.key=="Enter" & e.target.value!=""){
     console.log(e.target.value)
     
     const Data  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&appid=${apiKey}`
     )  .then(response => response.json())
     .then(function data(data){
      setCity(data.name)
      setRegion(data.sys.country)
      setTemp(Math.trunc( data.main.temp ))
      setIcon(data.weather[0].icon)
      setStatus(data.weather[0].description)
      setAvgTemp(Math.trunc(data.main.temp_min)+"/"+Math.trunc(data.main.temp_max))
      setSpeed(data.wind.speed)
      setdegree(data.wind.deg)
      setPressure(data.main.pressure)

      }).catch(function(){
        e.target.value=""
        alert("Please Enter Correct City Name")
      })
      }
    }

    async function intervalInfo(){
      const Data  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&units=metric&appid=${apiKey}`
      )  .then(response => response.json())
      .then(function data(data){
       setCity(data.name)
       setRegion(data.sys.country)
       setTemp(Math.trunc( data.main.temp ))
       setIcon(data.weather[0].icon)
       setStatus(data.weather[0].description)
       setAvgTemp(Math.trunc(data.main.temp_min)+"/"+Math.trunc(data.main.temp_max))
       setSpeed(data.wind.speed)
       setdegree(data.wind.deg)
       setPressure(data.main.pressure)
       })
    }
    window.onload =()=>{
      intervalInfo()
    }

  return (
    <>
      <Header contactActive ="#1e84be00" homeActive="#2b9ddf"/>
     
      <div className="bg-image">
        <img src={process.env.PUBLIC_URL+"images/bg.png"} alt="background image" />
      </div>
     
      <div className="weather-info-container">
        
        <div className="weather-input">
            <input type="text" placeholder="Enter City Name" defaultValue="karachi" onKeyPress={searchWether}/>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
            </button>
        </div>
     
        <div className="weather-info">

          <div className="weather-div-1">
           <span className="city-name">{city} {region}</span>
              <div>
                    <span className="temperature">{temp}<span className="centigrate">°C</span> </span>
                    <img src={"http://openweathermap.org/img/wn/"+icon+"@2x.png"}  alt="weather" className="weather-icon"/>
              </div>
                    <span className="weather-date">{getDateFunc()}</span>
            </div>

          <div className="weather-div-2">
            <span className="weather-status">{status}</span> 
           <span className="weather-avrage">
           Min/Max Temperature  
           <span> {avgTemp}
             <img src={process.env.PUBLIC_URL+"images/therm.png"}alt="!" className="therm-icon"/>
            </span>
            </span>
        </div>

        <div className="weather-div-3">
              <span className="wind-heading">Wind</span>
              
              <div className="wind-Container">
                <div className="wind-inner-container">
                  <img src={process.env.PUBLIC_URL+"images/umb.png"} alt="umbe"/>
                  <span>{speed}</span>
                  <span className="wind-name">speed</span>
                </div>
                <div className="wind-inner-container">
                  <img src={process.env.PUBLIC_URL+"images/degree.png"} alt="Degree"/>
                  <span>{degree}</span>
                  <span className="wind-name">Degree</span>
                </div>
                <div className="wind-inner-container">
                  <img src={process.env.PUBLIC_URL+"images/wind.png"} alt=""/>
                <span>{pressure}</span>
                  <span className="wind-name">pressure</span>
                </div>
              </div>
        </div>

      </div>
      </div>
      <Footer size="100px"/>
    </>
  )
}


export default Home
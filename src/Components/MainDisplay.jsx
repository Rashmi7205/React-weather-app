import React, { useEffect } from 'react'
import { useState } from 'react'
import Interface from './Interface'

function MainDisplay() {

    const [city,setCity] = useState("Bhubaneswar");
    const [weather_obj,setWeather] = useState({
        temp:"",
        city:"",
        time:"",
        country:"",
        windSpeed:"",
        humidity:"",
        pressure:"",
        icon:"",
        feelsLike:"",
        desc:"",
        sunrise:"",
        sunset:"",
    })
    const handleClick = ()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97fff32781e70baa24bd3e98f289aef0`)
        .then(Response=>Response.json())
        .then((responseData)=>{
            console.log(responseData)
            setWeather({
                temp:(responseData.main.temp-273.15).toFixed(1),
        city:responseData.name,
        time:new Date().toLocaleString(),
        country:responseData.sys.country,
        windSpeed:responseData.wind.speed,
        humidity:responseData.main.humidity,
        pressure:responseData.main.pressure,
        feelsLike:(responseData.main.feels_like-273.15).toFixed(1),
        desc:responseData.weather[0].description,
        sunrise:new Date((responseData.sys.sunrise)*1000).toLocaleString().split(',')[1],
        sunset:new Date((responseData.sys.sunset)*1000).toLocaleString().split(',')[1],
            })
        })    
        .catch(Error=>{
            setCity("Your city not Found")
            alert("Enter a valid city name")
        })
    }

    //Making the very first API Call
    useEffect(()=>{
       handleClick();
    },[])

    
  return (
    <div className='main'>
        {/* Header Section */}
        <div className="header">
            <h1 className="name">Forcasta</h1>
            <div className="search">
            <input type="text" id="search-box" placeholder='Enter City Name'
                onChange={(e)=>setCity(e.target.value)}
            />
            <button className='search-btn'
            onClick={handleClick}>
                Search
            </button>
            </div>
        </div>
        <Interface obj={weather_obj}/>
    </div>
  )
}

export default MainDisplay
import React from 'react'

function Interface({obj}) {
  return (
    <div className='desc-section'>
        <div className="desc-sec-1">
            <div className="info">
                <h1>{obj.temp}<sup>o</sup>C</h1>
                <p>Feel Like {obj.feelsLike}<sup>o</sup>C</p>
                <h3>{obj.desc}</h3>
            </div>
            <div className="info-desc">
                <h1 id="city">{obj.city}</h1>
                <p>Time :{obj.time} </p>
                <p>Country:{obj.country}</p>
                <p>Sunrise:{obj.sunrise}<br/> Sunset:{obj.sunset}</p>
            </div>
        </div>
        <div className="desc-sec-2">
            <div className="wind">
                <h1>Wind Speed</h1>
                <h3>{obj.windSpeed} km/hr</h3>
            </div>
            <div className="pressure">
                <h1>Pressure</h1>
                <h3>{obj.pressure}mbar</h3>
            </div>
            <div className="humidity">
                <h1>Humidity</h1>
                <h3>{obj.humidity}%</h3>
            </div>
        </div>
    </div>
  )
}

export default Interface
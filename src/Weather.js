import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeaterData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeaterData({
      ready: true,
      temperature: response.data.main.temp,
      urlIcon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: "Sunday 10:00",
      humidity: response.data.main.humidity,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>

        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.urlIcon} alt={weatherData.description} />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f56ed63e7341631afd873caeeee0eff2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

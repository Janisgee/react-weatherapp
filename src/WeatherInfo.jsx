import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.weatherData.name}</h1>
      <ul>
        <li></li>
        <li className="weatherDescription">{props.weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 float">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt={props.weatherData.description}
            className="weather-image"
          />
          <span className="temperature">
            {Math.round(props.weatherData.temperature)}
          </span>
          <span className="units">°C | °F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Sunrise: {props.weatherData.sunrise}</li>
            <li>Sunset: {props.weatherData.sunset}</li>
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {props.weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

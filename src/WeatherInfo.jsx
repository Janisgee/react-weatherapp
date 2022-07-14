import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import FormattedTimeForSun from "./FormattedTimeForSun";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  const timeOffset = props.weatherData.timezone;

  return (
    <div className="WeatherInfo">
      <h1>{props.weatherData.name}</h1>
      <ul>
        <li>
          <FormattedDate
            date={props.weatherData.date}
            timeOffset={timeOffset}
            searchCity={props.weatherData.name}
          />
        </li>
        <li className="weatherDescription">{props.weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-start">
              <WeatherIcon
                code={props.weatherData.icon}
                description={props.weatherData.description}
              />
            </div>
            <div className="float-start">
              <WeatherTemperature
                celsius={props.weatherData.temperature}
                fahrenheit={props.weatherData.temperature * 1.8 + 32}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Sunrise:
              <FormattedTimeForSun
                time={props.weatherData.sunrise}
                timeOffset={timeOffset}
              />
            </li>
            <li>
              Sunset:{" "}
              <FormattedTimeForSun
                time={props.weatherData.sunset}
                timeOffset={timeOffset}
              />
            </li>
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {props.weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

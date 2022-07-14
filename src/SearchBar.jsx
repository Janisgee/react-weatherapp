import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function SearchBar(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);

    setWeatherData({
      name: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      timezone: response.data.timezone * 1000,
    });
  }

  function search() {
    const apiKey = `4b9efd876f2cf008bb604369b1d1e09f`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  function getInputValue(event) {
    setCity(event.target.value);
  }

  const form = (
    <form className="SearchBar " onSubmit={handleSearch}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Please type a city nane ..."
            autoFocus="on"
            autoComplete="off"
            className="form-control"
            onChange={getInputValue}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <WeatherInfo weatherData={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <div>Loading for the {props.city} ...</div>
      </div>
    );
  }
}

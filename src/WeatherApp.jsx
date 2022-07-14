import "./WeatherApp.css";
import SearchBar from "./SearchBar";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <SearchBar defaultCity="Hong Kong" />
      </div>
      <p className="text-center openSourced">
        This project was coded by{" "}
        <a href="http://www.linkedin.com/in/jc-janis-chan">Janis Chan</a> and is{" "}
        <a href="https://github.com/Janisgee/react-weatherapp">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://react-weatherapp01.netlify.app">hosted on Netlify</a>.
      </p>
    </div>
  );
}

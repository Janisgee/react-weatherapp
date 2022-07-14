import "./WeatherApp.css";
import SearchBar from "./SearchBar";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <SearchBar defaultCity="Hong Kong" />
      </div>
    </div>
  );
}

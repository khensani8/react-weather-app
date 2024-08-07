import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Johannesburg"/>
      <footer>
        This project was coded by Khensani Ngobeni and is {""}
        <a
          href="https://github.com/khensani8/react-weather-app"
          target="_blank"
          rel="noreferrer">
          {" "}
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}

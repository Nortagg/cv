import "./projects.component.styles.scss";

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <h1 className="projects-main-title">Projects</h1>
      <div className="projects-content">
        <div className="weather-app-content">
          <div className="weather-app-title">
            <h2 className="weather-app-title-text">Weather app</h2>
            <p className="weather-app-subtitle">HTML/SCSS/React</p>
          </div>
          <img
            className="weather-img"
            src="/weather.png"
            alt="weather app"
          ></img>
          <p className="weather-description">
            I am excited to present my debut weather app created with React in
            Visual Studio Code. Leveraging the openweathermap.org free plan API,
            I successfully incorporated real-time weather data and a
            comprehensive 3-hourly and daily forecast.
          </p>
          <div className="weather-link-holder">
            <a
              className="weather-link"
              href="https://weather-app-silk-zeta.vercel.app/"
            >
              Check on Web
            </a>
          </div>
        </div>
        <h2>...</h2>
      </div>
    </div>
  );
}

import "./projects.component.styles.scss";
import { AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <h1 className="projects-main-title">Projects</h1>
      <div className="project-content">
        <div className="project-title">
          <h2 className="project-title-text">Weather app</h2>
          <p className="project-subtitle">HTML/SCSS/JavaScript</p>
        </div>
        <img className="weather-img" src="/weather.png" alt="weather app"></img>
        <p className="project-description">
          I am excited to present my debut weather app created with React in
          Visual Studio Code. Leveraging the openweathermap.org free plan API, I
          successfully incorporated real-time weather data and a comprehensive
          3-hourly and daily forecast.
        </p>
        <div className="project-link-holder">
          <a
            className="project-link-to-web"
            href="https://weather-app-silk-zeta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check on Web
          </a>
          <a
            className="project-link-git"
            href="https://github.com/Nortagg/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiOutlineGithub />
          </a>
        </div>
      </div>

      <div className="project-content">
        <div className="project-title">
          <h2 className="project-title-text">Weather app 2.</h2>
          <p className="project-subtitle">HTML/SCSS/JavaScript</p>
        </div>
        <div className="img-colection">
          <img
            className="weather-img-2-1"
            src="/weather1.png"
            alt="weather app"
          />
          <img
            className="weather-img-2"
            src="/weather2.png"
            alt="weather app"
          />
        </div>

        <p className="project-description">
          So, since I was really into the whole weather app thing, I went ahead
          and made another one, but this time I used a different API and went
          all in on giving you more weather details.
        </p>
        <div className="project-link-holder">
          <a
            className="project-link-git"
            href="https://github.com/Nortagg/Weather-Now"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>

      <div className="project-content">
        <div className="project-title">
          <h2 className="project-title-text">Movie app</h2>
          <p className="project-subtitle">HTML/SCSS/JavaScript/Firebase</p>
        </div>
        <img className="weather-img" src="/movieapp1.png" alt="weather app" />
        <p className="project-description">
          Check out the Movie Check Project, your go-to spot for everything
          movies and TV series! It's designed a super easy-to-use platform that
          lets you dive into a massive collection of your favorite films and
          shows. Plus, once you've signed, you can unlock some cool features,
          like creating your own personal movie stash, marking what you've
          already seen, and setting up a watchlist.
        </p>
        <div className="project-link-holder">
          <a
            className="project-link-to-web"
            href="https://movie-check-weld.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check on Web
          </a>
          <a
            className="project-link-git"
            href="https://github.com/Nortagg/MyMovies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

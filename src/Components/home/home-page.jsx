import "./home-page.styles.scss";
import {
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <div className="welcome-bar-on-top">Welcome</div>
      <img className="img" src="me.jpg" alt="" />
      <h1 className="title-name-nl">Nikola Ležaić</h1>
      <h2 className="title-proffesion">WEB DEVELOPER</h2>
      <h3 className="contact-bar">CONTACT</h3>
      <div className="phone-number-container">
        <div className="phone-icon">
          <AiOutlinePhone />
        </div>
        +381 61 6652 987
      </div>
      <div className="mail-instagram-git-wrapper">
        <div className="mail-link-icon-line-container">
          <a href="mailto:lezaicnikola10@gmail.com">
            <div className="mail-icon">
              <SiGmail />
            </div>
          </a>
        </div>
        <div className="insta-link-icon-line-container">
          <a
            target="_blank"
            href="https://www.instagram.com/lezaic_n/"
            rel="noopener noreferrer"
          >
            <div className="insta-icon">
              <AiOutlineInstagram />
            </div>
          </a>
        </div>
        <div className="git-link-icon-container">
          <a
            target="_blank"
            href="https://github.com/Nortagg"
            rel="noopener noreferrer"
          >
            <div className="git-icon">
              <AiOutlineGithub />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

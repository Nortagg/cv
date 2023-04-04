import "./home-page.styles.scss";
import {
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="welcome">Welcome</div>
      <img className="img" src="ja.png" alt="" />
      <h1 className="name-ln">Nikola Ležaić</h1>
      <h2 className="title-about">IT HELP DESK SUPPORT</h2>
      <h3 className="contact">CONTACT</h3>
      <div className="p-number-container">
        <div className="phone-icon">
          <AiOutlinePhone />
        </div>
        +381 61 6652 987
      </div>
      <div className="contact-container">
        <div className="mail-container">
          <a href="mailto:lezaicnikola10@gmail.com">
            <div className="mail-icon">
              <SiGmail />
            </div>
          </a>
          |
        </div>

        <div className="insta-container">
          <a target="_blank" href="https://www.instagram.com/lezaic_n/">
            <div className="insta-icon">
              <AiOutlineInstagram />
            </div>
          </a>
          |
        </div>

        <div className="git-container">
          <a target="_blank" href="https://github.com/Nortagg">
            <div className="git-icon">
              <AiOutlineGithub />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

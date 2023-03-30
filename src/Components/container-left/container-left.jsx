import "./container-left.styles.scss";
import {
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function HomeLeft() {
  return (
    <div className="card-left">
      <div className="img-background">
        <img className="img" src="ja.png" alt="" />
      </div>
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
          <a href="https://www.instagram.com/lezaic_n/">
            <div className="insta-icon">
              <AiOutlineInstagram />
            </div>
          </a>
          |
        </div>

        <div className="git-container">
          <a href="https://github.com/Nortagg">
            <div className="git-icon">
              <AiOutlineGithub />
            </div>
          </a>
        </div>
      </div>
      <h3 className="skill-title">SKILLS SUMMARY</h3>
      <ul className="skills">
        <li>Customer Service</li>
        <li>Microsoft Office</li>
        <li>Computer Skills</li>
        <li>Adaptability</li>
        <li>Active Listening</li>
        <li>Highly Organized</li>
        <li>Ability to Learn Quickly</li>
        <li>Highly responsible and reliable</li>
      </ul>
      <h3 className="hobbies-title">HOBBIES</h3>
      <ul className="hobbies">
        <li>Gaming</li>
        <li>Programming</li>
      </ul>
      <h3 className="languages-title">LANGUAGES</h3>
      <ul className="languages">
        <li>Serbian - Native</li>
        <li>English - Advanced</li>
      </ul>
    </div>
  );
}

import "./container-left.styles.scss";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

export default function HomeLeft() {
  return (
    <div className="card-left">
      <img className="img" src="ja.png" alt="" />
      <h1 className="name-ln">Nikola Lezaic</h1>
      <h2 className="title-about">IT HELP DESK SUPPORT</h2>
      <div className="contact-container">
        <h3>CONCTACT</h3>
        <div className="mail-container">
          <div className="mail-icon">
            <AiOutlineMail />
          </div>
          <a href="mailto:lezaicnikola10@gmail.com">lezaicnikola10@gmail.com</a>
        </div>

        <div className="p-number-container">
          <div className="phone-icon">
            <AiOutlinePhone />
          </div>
          +381 61 6652 987
        </div>

        <div className="insta-container">
          <div className="insta-icon">
            <AiOutlineInstagram />
          </div>
          <a href="https://www.instagram.com/lezaic_n/">lezaic_n</a>
        </div>

        <div className="git-container">
          <div className="git-icon">
            <AiOutlineGithub />
          </div>
          <a href="https://github.com/Nortagg">Nortagg</a>
        </div>
      </div>
      <div className="skill-container">
        <h3>SKILLS SUMMARY</h3>
        <ul>
          <li>Customer Service</li>
          <li>Microsoft Office</li>
          <li>Computer Skills</li>
          <li>Adaptability</li>
          <li>Active Listening</li>
          <li>Highly Organized</li>
          <li>Ability to Learn Quickly</li>
          <li>Highly responsible and reliable</li>
        </ul>
      </div>
      <div className="hobbies-container">
        <h3>HOBBIES</h3>
        <ul>
          <li>Gaming</li>
          <li>Programming</li>
        </ul>
      </div>
      <div className="languages-container">
        <h3>LANGUAGES</h3>
        <ul>
          <li>Serbian - Native</li>
          <li>English - Advanced</li>
        </ul>
      </div>
    </div>
  );
}

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
      <div className="img-background">
        <img className="img" src="ja.png" alt="" />
      </div>
      <h1 className="name-ln">Nikola Ležaić</h1>
      <h2 className="title-about">IT HELP DESK SUPPORT</h2>
      <h3 className="contact">CONCTACT</h3>
      <div className="contact-container">
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

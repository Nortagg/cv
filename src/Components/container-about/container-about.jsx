import "./container-about.styles.scss";
import { BsPersonGear } from "react-icons/bs";
import { IoGameControllerOutline, IoLanguageOutline } from "react-icons/io5";
export default function CardAbout() {
  return (
    <div className="card-about">
      <div className="about">About</div>
      <div className="wrapper-about">
        <h3 className="skill-title">
          SKILLS SUMMARY{" "}
          <div className="skills-icon">
            <BsPersonGear />
          </div>
        </h3>
        <ul className="skills">
          <li>Customer Service</li>
          <li>Microsoft Office</li>
          <li>Computer Skills</li>
          <li>Adaptability</li>
          <li>Html, React, CSS, JavaScript</li>
          <li>Highly Organized</li>
          <li>Ability to Learn Quickly</li>
          <li>Highly responsible and reliable</li>
        </ul>
        <h3 className="hobbies-title">
          HOBBIES{" "}
          <div className="hobbies-icon">
            <IoGameControllerOutline />
          </div>
        </h3>
        <ul className="hobbies">
          <li>Gaming</li>
          <li>Programming</li>
        </ul>
        <h3 className="languages-title">
          LANGUAGES
          <div className="languages-icon">
            <IoLanguageOutline />
          </div>
        </h3>
        <ul className="languages">
          <li>Serbian - Native</li>
          <li>English - Advanced</li>
        </ul>
      </div>
    </div>
  );
}

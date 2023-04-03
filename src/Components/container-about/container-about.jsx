import "./container-about.styles.scss";
import { BsPersonGear } from "react-icons/bs";
import { IoGameControllerOutline, IoLanguageOutline } from "react-icons/io5";
export default function CardAbout() {
  return (
    <div className="card-about">
      <h3 className="skill-title">SKILLS SUMMARY</h3>
      <div className="skills-icon">
        <BsPersonGear />
      </div>
      <ul className="skills">
        <li>Customer Service</li>
        <li>Microsoft Office</li>
        <li>Computer Skills</li>
        <li>Adaptability</li>
        <li>Html, React, CSS</li>
        <li>Highly Organized</li>
        <li>Ability to Learn Quickly</li>
        <li>Highly responsible and reliable</li>
      </ul>
      <h3 className="hobbies-title">HOBBIES</h3>
      <div className="hobbies-icon">
        <IoGameControllerOutline />
      </div>
      <ul className="hobbies">
        <li>Gaming</li>
        <li>Programming</li>
      </ul>
      <h3 className="languages-title">LANGUAGES</h3>
      <div className="languages-icon">
        <IoLanguageOutline />
      </div>
      <ul className="languages">
        <li>Serbian - Native</li>
        <li>English - Advanced</li>
      </ul>
    </div>
  );
}

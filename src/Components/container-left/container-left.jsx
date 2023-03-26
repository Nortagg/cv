import "./container-left.styles.scss";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function HomeLeft() {
  return (
    <div className="card-left">
      <img className="img" src="ja.png" alt="" />
      <h1>Nikola Lezaic ("komsa")</h1>
      <h2>IT HELP DESK SUPPORT</h2>
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
          <p>+381 61 6652 987</p>
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

import "./container-about.styles.scss";
export default function CardAbout() {
  return (
    <div className="card-about">
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

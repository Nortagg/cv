import "./header.styles.scss";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header-wraper">
      <Link className="name-title-left" to="/">
        Nikola Ležaić
        <div className="home">
          <span className="line">/</span> Home
        </div>
      </Link>
      <div className="links-container-right">
        <Link className="profile-route-text" to="/Profile">
          Profile
        </Link>
        <Link className="about-route-text" to="/About">
          About
        </Link>
        <Link className="contact-route-text" to="/Contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

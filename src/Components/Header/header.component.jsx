import "./header.styles.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    if (menuActive === false) {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }
  };

  return (
    <div className="header-wraper">
      <Link className="name-title-left" to="/">
        Nikola Ležaić
        <p className="home-text">
          <span className="line"></span>
          Home
        </p>
      </Link>
      <button onClick={handleClick} className="menu-button">
        <TfiMenu />
        {menuActive && (
          <div className="links-container-button">
            <Link className="profile-link" to="/Profile">
              Profile
            </Link>
            <Link className="about-link" to="/About">
              About
            </Link>
            <Link className="projects-link" to="/Projects">
              Projects
            </Link>
            <Link className="contact-link" to="/Contact">
              Contact
            </Link>
          </div>
        )}
      </button>
      <div className="links-container-right">
        <Link className="profile-route-text" to="/Profile">
          Profile
        </Link>
        <Link className="about-route-text" to="/About">
          About
        </Link>
        <Link className="projects-route-text" to="/Projects">
          Projects
        </Link>
        <Link className="contact-route-text" to="/Contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

import "./header.styles.scss";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header-container">
      <Link className="Name-Title" to="/">
        Nikola Ležaić
        <div className="sub-title">
          <span className="line">|</span> Home
        </div>
      </Link>
      <div className="links">
        <Link className="profile" to="/Profile">
          Profile
        </Link>
        <Link className="about" to="/About">
          About
        </Link>
      </div>
    </div>
  );
}

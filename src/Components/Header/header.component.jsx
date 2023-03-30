import "./header.styles.scss";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header-container">
      <Link className="Name-Title" to="/">
        Nikola Lezaic
      </Link>
      <Link className="info" to="/homeright">
        Info
      </Link>
      <Link className="about" to="/homeleft">
        About
      </Link>
    </div>
  );
}

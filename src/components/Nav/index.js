import { Link } from "react-router-dom";
import "./index.css";
const Nav = () => (
  <div className="header-container">
    <h1 className="portfolio-heading">Madelyn Torff</h1>

    <div className="nav-container">
      <Link to="/about" className="nav-tabs">
        <p className="nav-tabs">About</p>
      </Link>
      <Link className="nav-tabs" to="/addproject">
        <p className="nav-tabs">Project</p>
      </Link>
      <Link to="/contacts" className="nav-tabs">
        <p className="nav-tabs">Contacts</p>
      </Link>
    </div>
  </div>
);

export default Nav;

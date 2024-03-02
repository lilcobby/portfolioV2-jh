import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
          style={{ color: "aqua" }}
        >
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={
            currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
          }
          style={{ color: "aqua" }}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        {/* skills */}
        <Link
          to="/Skills"
          className={currentPage === "/Skills" ? "nav-link active" : "nav-link"}
          style={{ color: "aqua" }}
        >
          Skills
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
          style={{ color: "aqua" }}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;

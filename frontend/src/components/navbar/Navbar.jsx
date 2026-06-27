import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2 className="logo">Learnora </h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;
import { NavLink } from "react-router-dom";
import "./Layout.css";

function Sidebar() {

    return (

        <aside className="sidebar">

            <div className="logo">

                <h2>🎓 Learnora AI</h2>

            </div>

            <nav>

                <NavLink
                    to="/dashboard"
                    className="nav-item"
                >
                    🏠 Dashboard
                </NavLink>

                <NavLink
                    to="/upload"
                    className="nav-item"
                >
                    📄 Upload PDF
                </NavLink>

                <NavLink
                    to="/notes"
                    className="nav-item"
                >
                    📝 Smart Notes
                </NavLink>

                <NavLink
                    to="/flashcards"
                    className="nav-item"
                >
                    🃏 Flashcards
                </NavLink>

                <NavLink
                    to="/quiz"
                    className="nav-item"
                >
                    🧠 AI Quiz
                </NavLink>

                <NavLink
                    to="/chat"
                    className="nav-item"
                >
                    💬 AI Chat
                </NavLink>

            </nav>

        </aside>

    );

}

export default Sidebar;
import { useNavigate } from "react-router-dom";
import "./Layout.css";

function Header() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        navigate("/login");

    };

    return (

        <header className="topbar">

            <div>

                <h1>Learnora AI</h1>

                <p>Your AI-powered study companion</p>

            </div>

            <button
                className="logout-btn"
                onClick={logout}
            >
                Logout
            </button>

        </header>

    );

}

export default Header;
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import "../styles/Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    }

    const stats = [
        {
            title: "Resources",
            value: "1",
            icon: "📄"
        },
        {
            title: "AI Notes",
            value: "1",
            icon: "📝"
        },
        {
            title: "Flashcards",
            value: "15",
            icon: "🃏"
        },
        {
            title: "Quiz",
            value: "10",
            icon: "🧠"
        }
    ];

    return (

        <Layout>

            <div className="dashboard-page">

                <div className="dashboard-header">

                    <div>

                        <h1>{greeting} 👋</h1>

                        <p>
                            Welcome to Learnora AI. Continue your learning journey.
                        </p>

                    </div>

                </div>

                {/* Statistics */}

                <div className="stats-grid">

                    {
                        stats.map((item, index) => (

                            <div
                                className="stat-card"
                                key={index}
                            >

                                <div className="stat-icon">
                                    {item.icon}
                                </div>

                                <h2>{item.value}</h2>

                                <p>{item.title}</p>

                            </div>

                        ))
                    }

                </div>

                {/* Quick Actions */}

                <h2 className="section-title">
                    Quick Actions
                </h2>

                <div className="action-grid">

                    <div
                        className="action-card"
                        onClick={() => navigate("/upload")}
                    >
                        <span>📄</span>
                        <h3>Upload PDF</h3>
                        <p>Upload study material.</p>
                    </div>

                    <div
                        className="action-card"
                        onClick={() => navigate("/notes")}
                    >
                        <span>📝</span>
                        <h3>Smart Notes</h3>
                        <p>Generate AI notes.</p>
                    </div>

                    <div
                        className="action-card"
                        onClick={() => navigate("/flashcards")}
                    >
                        <span>🃏</span>
                        <h3>Flashcards</h3>
                        <p>Revise with AI cards.</p>
                    </div>

                    <div
                        className="action-card"
                        onClick={() => navigate("/quiz")}
                    >
                        <span>🧠</span>
                        <h3>AI Quiz</h3>
                        <p>Test your knowledge.</p>
                    </div>

                    <div
                        className="action-card"
                        onClick={() => navigate("/chat")}
                    >
                        <span>💬</span>
                        <h3>AI Chat</h3>
                        <p>Ask questions instantly.</p>
                    </div>

                </div>

                {/* Recent Activity */}

                <h2 className="section-title">
                    Recent Activity
                </h2>

                <div className="recent-card">

                    <div className="recent-left">

                        <h3>📄 No Recent Files</h3>

                        <p>
                            Your uploaded study materials will appear here.
                        </p>

                    </div>

                    <button
                        className="upload-now-btn"
                        onClick={() => navigate("/upload")}
                    >
                        Upload Now
                    </button>

                </div>

            </div>

        </Layout>

    );

}

export default Dashboard;
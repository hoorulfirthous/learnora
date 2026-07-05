import Layout from "../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    

    return (

        <Layout>

            <div className="dashboard-container">

                <div className="welcome-card">

                    <h1>👋 Welcome to Learnora AI</h1>

                    <p>

                        Your AI-powered learning companion for studying smarter.

                    </p>

                </div>

                <div className="quick-grid">

                    <div
                        className="feature-card"
                        onClick={() => navigate("/upload")}
                    >
                        <h2>📄 Upload PDF</h2>
                        <p>Upload study material.</p>
                    </div>

                    <div
                        className="feature-card"
                        onClick={() => navigate("/notes")}
                    >
                        <h2>📝 Smart Notes</h2>
                        <p>Generate AI notes.</p>
                    </div>

                    <div
                        className="feature-card"
                        onClick={() => navigate("/quiz")}
                    >
                        <h2>🧠 AI Quiz</h2>
                        <p>Practice automatically.</p>
                    </div>

                    <div
                        className="feature-card"
                        onClick={() => navigate("/chat")}
                    >
                        <h2>🤖 AI Chat</h2>
                        <p>Ask questions instantly.</p>
                    </div>

                </div>

                <h2 className="section-title">

                    Learning Overview

                </h2>

                <div className="stats-grid">

                    <div className="stat-card">

                        <h3>PDFs</h3>

                        <span>1</span>

                    </div>

                    <div className="stat-card">

                        <h3>Notes</h3>

                        <span>1</span>

                    </div>

                    <div className="stat-card">

                        <h3>Quizzes</h3>

                        <span>1</span>

                    </div>

                    <div className="stat-card">

                        <h3>AI Chats</h3>

                        <span>0</span>

                    </div>

                </div>

                

            </div>

        </Layout>

    );

}

export default Dashboard;
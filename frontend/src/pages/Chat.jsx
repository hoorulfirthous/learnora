import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import chatAPI from "../api/chatApi";
import "../styles/Chat.css";

function Chat() {

    const navigate = useNavigate();

    const [question, setQuestion] = useState("");

    const [messages, setMessages] = useState([
        {
            type: "ai",
            text: "👋 Hello! I'm Learnora AI. Ask me anything about your uploaded PDF."
        }
    ]);

    const [loading, setLoading] = useState(false);

    const chatEndRef = useRef(null);

    useEffect(() => {

        chatEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });

    }, [messages, loading]);

    const askQuestion = async () => {

        if (!question.trim()) return;

        const userQuestion = question;

        setMessages(prev => [

            ...prev,

            {
                type: "user",
                text: userQuestion
            }

        ]);

        setQuestion("");

        setLoading(true);

        try {

            const res = await chatAPI.post("/ask", {
                question: userQuestion
            });

            setMessages(prev => [

                ...prev,

                {
                    type: "ai",
                    text: res.data.answer
                }

            ]);

        }

        catch (err) {

            console.log(err);

            setMessages(prev => [

                ...prev,

                {
                    type: "ai",
                    text: "❌ Unable to generate an answer. Please try again."
                }

            ]);

        }

        finally {

            setLoading(false);

        }

    };

    const clearChat = () => {

        setMessages([
            {
                type: "ai",
                text: "👋 Hello! I'm Learnora AI. Ask me anything about your uploaded PDF."
            }
        ]);

    };

    const suggestions = [

        "Summarize this PDF",

        "Explain the important concepts",

        "Generate exam questions",

        "What are the key points?",

        "Explain this in simple words"

    ];

    return (

        <Layout>

            <div className="chat-container">

                <div className="chat-header">

                    <div>

                        <h1>AI Study Assistant</h1>

                        <p>

                            Ask questions based on your uploaded study material.

                        </p>

                    </div>

                    <button
                        className="clear-btn"
                        onClick={clearChat}
                    >

                        Clear Chat

                    </button>

                </div>

                <div className="suggestions">

                    {

                        suggestions.map((item, index) => (

                            <button

                                key={index}

                                className="suggestion-chip"

                                onClick={() => setQuestion(item)}

                            >

                                {item}

                            </button>

                        ))

                    }

                </div>

                <div className="chat-box">

                    {

                        messages.map((msg, index) => (

                            <div

                                key={index}

                                className={`message ${msg.type}`}

                            >

                                <div className="avatar">

                                    {

                                        msg.type === "user"

                                            ? "👤"

                                            : "🤖"

                                    }

                                </div>

                                <div className="bubble">

                                    {msg.text}

                                </div>

                            </div>

                        ))

                    }

                    {

                        loading && (

                            <div className="message ai">

                                <div className="avatar">

                                    🤖

                                </div>

                                <div className="bubble typing">

                                    <span></span>

                                    <span></span>

                                    <span></span>

                                </div>

                            </div>

                        )

                    }

                    <div ref={chatEndRef}></div>

                </div>

                <div className="chat-input">

                    <textarea

                        rows="2"

                        placeholder="Ask anything about your uploaded PDF..."

                        value={question}

                        onChange={(e) => setQuestion(e.target.value)}

                        onKeyDown={(e) => {

                            if (e.key === "Enter" && !e.shiftKey) {

                                e.preventDefault();

                                askQuestion();

                            }

                        }}

                    />

                    <button

                        className="send-btn"

                        onClick={askQuestion}

                        disabled={loading}

                    >

                        {

                            loading

                                ? "Thinking..."

                                : "Send"

                        }

                    </button>

                </div>

                <button

                    className="dashboard-btn"

                    onClick={() => navigate("/dashboard")}

                >

                    Back to Dashboard

                </button>

            </div>

        </Layout>

    );

}

export default Chat;
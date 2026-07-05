import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadAPI from "../api/uploadApi";
import "../styles/Quiz.css";

function Quiz() {

    const navigate = useNavigate();

    const [quiz, setQuiz] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        loadQuiz();
    }, []);

    const loadQuiz = async () => {

        try {

            const res = await uploadAPI.get("/quiz/generate");

            if (Array.isArray(res.data.quiz)) {

                setQuiz(res.data.quiz);

            } else {

                setQuiz([]);

            }

        } catch (err) {

            console.log(err);
            alert("Unable to generate quiz.");

        } finally {

            setLoading(false);

        }

    };

    const handleSubmit = () => {

        if (!selectedOption) {

            alert("Please select an answer.");
            return;

        }

        setSubmitted(true);

        if (selectedOption === current.answer) {

            setScore(prev => prev + 1);

        }

    };

    const handleNext = () => {

        if (currentQuestion + 1 < quiz.length) {

            setCurrentQuestion(prev => prev + 1);
            setSelectedOption("");
            setSubmitted(false);

        }

    };

    const restartQuiz = () => {

        setCurrentQuestion(0);
        setSelectedOption("");
        setSubmitted(false);
        setScore(0);

    };

    if (loading) {

        return (

            <div className="quiz-page">

                <div className="quiz-card">

                    <h2>Generating AI Quiz...</h2>

                </div>

            </div>

        );

    }

    if (quiz.length === 0) {

        return (

            <div className="quiz-page">

                <div className="quiz-card">

                    <h2>No Quiz Available</h2>

                    <button
                        className="dashboard-btn"
                        onClick={() => navigate("/dashboard")}
                    >
                        Dashboard
                    </button>

                </div>

            </div>

        );

    }

    const current = quiz[currentQuestion] || {};

    if (currentQuestion >= quiz.length) {

        return (

            <div className="quiz-page">

                <div className="quiz-card">

                    <h1>🎉 Quiz Completed!</h1>

                    <h2>
                        Your Score: {score} / {quiz.length}
                    </h2>

                    <div className="quiz-buttons">

                        <button
                            className="upload-btn"
                            onClick={restartQuiz}
                        >
                            Retake Quiz
                        </button>

                        <button
                            className="dashboard-btn"
                            onClick={() => navigate("/dashboard")}
                        >
                            Dashboard
                        </button>

                    </div>

                </div>

            </div>

        );

    }

    return (

        <div className="quiz-page">

            <div className="quiz-card">

                <h1>📝 AI Quiz</h1>

                <p className="subtitle">

                    Question {currentQuestion + 1} of {quiz.length}

                </p>

                <h2 className="question">

                    {current.question}

                </h2>

                <div className="options">

                    {(current.options || []).map((option, index) => {

                        let className = "option";

                        if (submitted) {

                            if (option === current.answer) {

                                className += " correct";

                            } else if (option === selectedOption) {

                                className += " wrong";

                            }

                        }

                        return (

                            <label
                                key={index}
                                className={className}
                            >

                                <input
                                    type="radio"
                                    name="answer"
                                    value={option}
                                    checked={selectedOption === option}
                                    disabled={submitted}
                                    onChange={(e) =>
                                        setSelectedOption(e.target.value)
                                    }
                                />

                                {option}

                            </label>

                        );

                    })}

                </div>

                {

                    !submitted ?

                        <button
                            className="upload-btn"
                            onClick={handleSubmit}
                        >
                            Submit Answer
                        </button>

                        :

                        <div className="result">

                            {

                                selectedOption === current.answer ?

                                    <h3 className="correct-text">

                                        ✅ Correct!

                                    </h3>

                                    :

                                    <h3 className="wrong-text">

                                        ❌ Wrong!

                                    </h3>

                            }

                            <p>

                                Correct Answer:

                                <strong>

                                    {" "}

                                    {current.answer}

                                </strong>

                            </p>

                            <button
                                className="upload-btn"
                                onClick={() => {

                                    if (currentQuestion + 1 === quiz.length) {

                                        setCurrentQuestion(quiz.length);

                                    } else {

                                        handleNext();

                                    }

                                }}
                            >

                                {

                                    currentQuestion + 1 === quiz.length ?

                                        "Finish Quiz"

                                        :

                                        "Next Question"

                                }

                            </button>

                        </div>

                }

            </div>

        </div>

    );

}

export default Quiz;

import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import flashcardAPI from "../api/flashcardApi";
import "../styles/Flashcards.css";

function Flashcards() {

    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentCard, setCurrentCard] = useState(0);
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        loadFlashcards();
    }, []);

    const loadFlashcards = async () => {

        try {

            const res = await flashcardAPI.get("/generate");

            if (Array.isArray(res.data.flashcards)) {

                setFlashcards(res.data.flashcards);

            } else {

                setFlashcards([]);

            }

        } catch (err) {

            console.log(err);

            alert("Unable to generate flashcards.");

        } finally {

            setLoading(false);

        }

    };

    const nextCard = () => {

        if (currentCard < flashcards.length - 1) {

            setCurrentCard(currentCard + 1);
            setFlipped(false);

        }

    };

    const previousCard = () => {

        if (currentCard > 0) {

            setCurrentCard(currentCard - 1);
            setFlipped(false);

        }

    };

    const restartDeck = () => {

        setCurrentCard(0);
        setFlipped(false);

    };

    if (loading) {

        return (

            <Layout>

                <div className="flashcards-container">

                    <h2>Generating AI Flashcards...</h2>

                </div>

            </Layout>

        );

    }

    if (flashcards.length === 0) {

        return (

            <Layout>

                <div className="flashcards-container">

                    <h2>No Flashcards Available</h2>

                </div>

            </Layout>

        );

    }

    const card = flashcards[currentCard];

    return (

        <Layout>

            <div className="flashcards-container">

                <h1>🃏 AI Flashcards</h1>

                <p className="flashcard-progress">

                    Card {currentCard + 1} of {flashcards.length}

                </p>

                <div
                    className={`flashcard ${flipped ? "flipped" : ""}`}
                    onClick={() => setFlipped(!flipped)}
                >

                    {

                        !flipped ?

                            <>

                                <span className="card-label">

                                    QUESTION

                                </span>

                                <h2>

                                    {card.question}

                                </h2>

                                <p>

                                    Click to reveal answer

                                </p>

                            </>

                            :

                            <>

                                <span className="card-label">

                                    ANSWER

                                </span>

                                <h2>

                                    {card.answer}

                                </h2>

                                <p>

                                    Click again to hide

                                </p>

                            </>

                    }

                </div>

                <div className="flashcard-buttons">

                    <button
                        onClick={previousCard}
                        disabled={currentCard === 0}
                    >
                        ◀ Previous
                    </button>

                    <button
                        onClick={restartDeck}
                    >
                        🔄 Restart
                    </button>

                    <button
                        onClick={nextCard}
                        disabled={currentCard === flashcards.length - 1}
                    >
                        Next ▶
                    </button>

                </div>

            </div>

        </Layout>

    );

}

export default Flashcards;


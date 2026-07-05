import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Layout from "../components/layout/Layout";
import uploadAPI from "../api/uploadApi";
import "../styles/Notes.css";

function Notes() {

    const [notes, setNotes] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {

        try {

            const res = await uploadAPI.get("/notes/generate");

            setNotes(res.data.notes);

        } catch (err) {

            console.log(err);

            setNotes("Unable to generate notes.");

        } finally {

            setLoading(false);

        }

    };

    const copyNotes = async () => {

        try {

            await navigator.clipboard.writeText(notes);

            alert("Notes copied successfully!");

        } catch {

            alert("Failed to copy notes.");

        }

    };

    const downloadNotes = () => {

        const blob = new Blob([notes], {
            type: "text/plain"
        });

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "Learnora_AI_Notes.md";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);

    };

    return (

        <Layout>

            <div className="notes-container">

                <div className="notes-header">

                    <div>

                        <h1>📘 Smart Notes</h1>

                        <p>
                            AI-generated revision notes from your uploaded PDF.
                        </p>

                    </div>

                    <div className="notes-actions">

                        <button
                            className="copy-btn"
                            onClick={copyNotes}
                        >
                            📋 Copy
                        </button>

                        <button
                            className="download-btn"
                            onClick={downloadNotes}
                        >
                            ⬇ Download
                        </button>

                    </div>

                </div>

                <div className="notes-card">

                    {

                        loading ?

                            <div className="loading">

                                <div className="loader"></div>

                                <p>Generating AI Notes...</p>

                            </div>

                            :

                            <div className="notes-content markdown-body">

                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                >
                                    {notes}
                                </ReactMarkdown>

                            </div>

                    }

                </div>

            </div>

        </Layout>

    );

}

export default Notes;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import uploadAPI from "../api/uploadApi";
import "../styles/Upload.css";

function Upload() {

    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {

        if (!file) {
            alert("Please select a PDF.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);

        try {

            const res = await uploadAPI.post(
                "/upload/pdf",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            const pdfText = res.data.text;

            setText(pdfText);

            // Store PDF text for all AI modules
            await Promise.all([
                uploadAPI.post("/notes/store", {
                    text: pdfText,
                }),

                uploadAPI.post("/quiz/store", {
                    text: pdfText,
                }),

                uploadAPI.post("/chat/store", {
                    text: pdfText,
                }),

                uploadAPI.post("/flashcards/store", {
                    text: pdfText,
                }),
            ]);

            alert("PDF uploaded successfully!");

            setTimeout(() => {
                navigate("/notes");
            }, 1000);

        } catch (err) {

            console.error(err);

            alert(
                err.response?.data?.detail ||
                "Failed to upload PDF."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <Layout>

            <div className="upload-container">

                <div className="upload-header">

                    <h1>Upload Study Material</h1>

                    <p>
                        Upload your PDF and let Learnora AI generate
                        notes, flashcards, quizzes and AI answers.
                    </p>

                </div>

                <div className="upload-card">

                    <div className="upload-icon">
                        📄
                    </div>

                    <h2>Drag & Drop PDF</h2>

                    <p>
                        or browse from your computer
                    </p>

                    <input
                        type="file"
                        id="pdf"
                        accept=".pdf"
                        hidden
                        onChange={(e) => setFile(e.target.files[0])}
                    />

                    <label
                        htmlFor="pdf"
                        className="browse-btn"
                    >
                        Browse Files
                    </label>

                    {file && (

                        <div className="file-preview">

                            <h3>Selected File</h3>

                            <p>📄 {file.name}</p>

                            <span>
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                            </span>

                        </div>

                    )}

                    {loading && (

                        <div className="progress-box">

                            <div className="progress-bar">

                                <div className="progress-fill"></div>

                            </div>

                            <p>Extracting PDF...</p>

                        </div>

                    )}

                    <button
                        className="upload-btn"
                        disabled={loading}
                        onClick={handleUpload}
                    >

                        {loading
                            ? "Processing..."
                            : "Generate AI Notes"}

                    </button>

                </div>

            </div>

        </Layout>

    );

}

export default Upload;
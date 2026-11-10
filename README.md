#  Learnora AI – AI-Powered Learning Platform

**Learn smarter. Learn faster. Learn with AI.**

Learnora AI is an AI-powered learning platform designed to simplify the way students study and revise academic materials. It transforms uploaded PDF documents into structured study notes, interactive flashcards, multiple-choice quizzes, and AI-powered question-answering experiences using Google's Gemini API.

The platform combines Generative AI with full-stack web development to create an interactive and personalized learning environment.

---

##  Key Features

###  1. PDF Upload & Text Extraction

* Upload academic PDF documents.
* Extract textual content from uploaded materials.
* Process extracted content for AI-powered learning features.
* Share extracted document context across different learning modules.

###  2. Smart Notes Generation

* Automatically generate structured study notes.
* Organize information using headings and bullet points.
* Highlight important concepts.
* Generate concise, revision-friendly content.
* Copy and download generated notes.

###  3. AI Flashcard Generation

* Generate 15 revision flashcards from uploaded study materials.
* Automatically create question-and-answer pairs.
* Support interactive learning and quick revision.

###  4. AI Quiz Generation

* Generate 10 multiple-choice questions.
* Provide four options for each question.
* Include automatically generated correct answers.
* Help students evaluate their understanding.

###  5. AI-Powered Chat Assistant

* Ask questions based on uploaded study materials.
* Receive contextual answers using Gemini.
* Restrict answers to the provided study material.
* Provide a fallback response when information is unavailable.

###  6. Interactive Dashboard

* Centralized learning dashboard.
* Quick navigation to learning modules.
* Dashboard statistics.
* Recent upload activity.

###  7. User Authentication

* User registration and login.
* JWT-based authentication.
* Password hashing for secure credential storage.

---

##  Technology Stack

| Category          | Technologies                          |
| ----------------- | ------------------------------------- |
| Frontend          | React.js, Vite, JavaScript            |
| Styling           | CSS3                                  |
| Backend           | Python, FastAPI                       |
| AI Integration    | Google Gemini API                     |
| AI Model          | Gemini 2.5 Flash                      |
| Database          | MongoDB                               |
| Authentication    | JWT, Passlib                          |
| PDF Processing    | PyPDF                                 |
| API Testing       | Postman                               |
| Development Tools | VS Code, Git, GitHub, MongoDB Compass |

---

##  System Architecture

Learnora AI follows a client-server architecture.

```text
                 USER
                   |
                   ▼
          REACT.JS FRONTEND
                   |
                   ▼
             FASTAPI BACKEND
                   |
                   ▼
             PDF UPLOAD
                   |
                   ▼
            TEXT EXTRACTION
                   |
                   ▼
          EXTRACTED PDF TEXT
                   |
          ┌────────┼─────────┐
          |        |         |
          ▼        ▼         ▼
        NOTES     QUIZ    FLASHCARDS
          |        |         |
          └────────┼─────────┘
                   |
                   ▼
             GEMINI API
                   |
          ┌────────┴────────┐
          |                 |
          ▼                 ▼
     GENERATED         AI CHAT
      CONTENT          ASSISTANT
          |                 |
          └────────┬────────┘
                   |
                   ▼
             REACT FRONTEND
                   |
                   ▼
             USER INTERFACE
```

---

##  Technical Implementation

Some of the important technical contributions behind Learnora AI include:

* Developed a component-based React frontend using reusable components and React Router for navigation.
* Built RESTful backend endpoints using FastAPI for authentication, PDF processing, notes, quizzes, flashcards, and AI chat.
* Integrated Google's Gemini API using the Python GenAI SDK to generate educational content.
* Implemented PDF text extraction and passed the extracted content to multiple AI-powered modules.
* Designed structured prompt templates to generate notes, MCQs, and flashcards in predefined formats.
* Implemented JSON-based response parsing to process AI-generated quiz and flashcard data.
* Integrated MongoDB for database operations.
* Implemented JWT-based authentication and password hashing.
* Used Axios for frontend-backend API communication.
* Tested backend endpoints and API responses using Postman.

---

##  Project Structure

### Frontend

```text
frontend/
│
├── public/
│
└── src/
    │
    ├── api/
    │   ├── uploadApi.js
    │   └── chatApi.js
    │
    ├── components/
    │   └── layout/
    │       ├── Header.jsx
    │       ├── Sidebar.jsx
    │       └── Layout.jsx
    │
    ├── pages/
    │   ├── Dashboard.jsx
    │   ├── Upload.jsx
    │   ├── Notes.jsx
    │   ├── Flashcards.jsx
    │   ├── Quiz.jsx
    │   └── Chat.jsx
    │
    ├── styles/
    │
    ├── App.jsx
    └── main.jsx
```

### Backend

```text
backend/
│
├── app/
│   │
│   ├── routers/
│   │   ├── auth.py
│   │   ├── upload.py
│   │   ├── notes.py
│   │   ├── quiz.py
│   │   ├── flashcards.py
│   │   ├── chat.py
│   │   └── user.py
│   │
│   ├── services/
│   │   └── gemini_service.py
│   │
│   └── main.py
│
├── .env
└── requirements.txt
```

*Note: The structure above is representative. Adjust filenames and folders to match your final repository.*

---

##  Installation & Setup

### Prerequisites

Make sure you have installed:

* Python 3.10+
* Node.js and npm
* MongoDB
* Google Gemini API Key

### 1. Clone the Repository

```bash
git clone https://github.com/hoorulfirthous/learnora.git

cd learnora
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

**Windows:**

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

### 3. Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
GEMINI_API_KEY=your_gemini_api_key
MONGODB_URL=your_mongodb_connection_string
```

Add any other environment variables required by your authentication and database configuration.

**Important:** Never upload your `.env` file or expose API keys in your GitHub repository.

### 4. Start the Backend

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

### 5. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 6. Environment Configuration

The application requires a valid Google Gemini API key.

You can obtain one through Google AI Studio.

Never commit API credentials, database passwords, JWT secrets, or other sensitive configuration values.

---

## Future Enhancements

The following improvements are planned for future releases:

* Support for Word documents and YouTube video transcripts.
* Persistent storage of uploaded study materials.
* Learning history and document management.
* User-wise learning analytics.
* Flashcard bookmarking and progress tracking.
* Chapter-wise notes generation.
* Export study notes as PDF.
* Enhanced quiz performance analytics.
* RAG-based document retrieval and semantic search.

---

## Project Objective

The primary objective of Learnora AI is to make academic learning more efficient by reducing manual study preparation and providing AI-powered tools that help students understand, revise, and evaluate their knowledge.

---

## Developer

**Hoorul Firthous A**

B.E. Computer Science and Engineering
SRM Madurai College for Engineering and Technology

**Technical Interests:**

* Full Stack Development
* Generative AI
* Python Development
* AI-Powered Applications
* Database Management

**Learnora AI – Transforming study materials into smarter learning experiences.**

**ScreenShots**

<img width="1883" height="1030" alt="Screenshot 2026-07-04 190315" src="https://github.com/user-attachments/assets/f0c88278-fef0-4049-bd8c-9fa97ffa40c3" />
<img width="1890" height="1007" alt="Screenshot 2026-07-04 190426" src="https://github.com/user-attachments/assets/e176308a-612c-4fb4-b3cc-db7b4f4e7038" />
<img width="1893" height="1007" alt="Screenshot 2026-07-04 190445" src="https://github.com/user-attachments/assets/9d78dfde-ed21-4e95-92ef-37f7a1f52453" />
<img width="1897" height="1027" alt="Screenshot 2026-07-04 190555" src="https://github.com/user-attachments/assets/219ca726-799e-4752-b283-aeba4bdbd80a" />
<img width="1892" height="1018" alt="Screenshot 2026-07-04 190627" src="https://github.com/user-attachments/assets/41cecb79-5026-46cd-bf69-220a4bc308e1" />
<img width="1852" height="1007" alt="Screenshot 2026-07-04 190705" src="https://github.com/user-attachments/assets/57c60fb5-5c08-41f0-9b42-61addac5d9d8" />
<img width="1872" height="997" alt="Screenshot 2026-07-04 190739" src="https://github.com/user-attachments/assets/c5f160e5-9b2a-458a-bf5d-92272b1cc395" />
<img width="1807" height="977" alt="Screenshot 2026-07-05 135616" src="https://github.com/user-attachments/assets/15a35c81-7d9e-441b-96aa-378cc362b7d2" />
<img width="1892" height="1016" alt="Screenshot 2026-07-05 135811" src="https://github.com/user-attachments/assets/f2182856-dde0-4134-84a2-d9738778f911" />











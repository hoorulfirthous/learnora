from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import health
from app.routers import auth
from app.routers import database_test
from app.routers import user
from app.routers import upload
from app.routers import notes
from app.routers import quiz
from app.routers import chat
from app.routers import flashcards

app = FastAPI(
    title="Learnora AI API",
    version="1.0.0"
)

# CORS Configuration
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(health.router)
app.include_router(auth.router)
app.include_router(database_test.router)
app.include_router(user.router)
app.include_router(upload.router)
app.include_router(notes.router)
app.include_router(quiz.router)
app.include_router(chat.router)
app.include_router(flashcards.router)
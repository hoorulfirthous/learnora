from fastapi import APIRouter
from pydantic import BaseModel

from app.services.gemini_service import generate_quiz

router = APIRouter(
    prefix="/quiz",
    tags=["Quiz"]
)

pdf_text = ""


class QuizStore(BaseModel):
    text: str


# ==========================
# Store PDF
# ==========================

@router.post("/store")
async def store(data: QuizStore):

    global pdf_text

    pdf_text = data.text

    return {
        "message": "Quiz PDF stored successfully."
    }


# ==========================
# Generate Quiz
# ==========================

@router.get("/generate")
async def generate():

    global pdf_text

    if pdf_text.strip() == "":
        return {
            "quiz": []
        }

    quiz = generate_quiz(pdf_text)

    return {
        "quiz": quiz
    }
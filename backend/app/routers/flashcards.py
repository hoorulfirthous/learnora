from fastapi import APIRouter
from app.services.gemini_service import generate_flashcards

router = APIRouter(
    prefix="/flashcards",
    tags=["Flashcards"]
)

pdf_text = ""


@router.post("/store")
async def store(data: dict):

    global pdf_text

    pdf_text = data.get("text", "")

    return {
        "message": "Flashcard text stored successfully."
    }


@router.get("/generate")
async def generate():

    global pdf_text

    if pdf_text == "":
        return {
            "flashcards": []
        }

    flashcards = generate_flashcards(pdf_text)

    return {
        "flashcards": flashcards
    }
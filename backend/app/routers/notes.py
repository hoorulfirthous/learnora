from fastapi import APIRouter
from pydantic import BaseModel
from app.services.gemini_service import generate_notes

router = APIRouter(
    prefix="/notes",
    tags=["Notes"]
)

pdf_text = ""


class NotesRequest(BaseModel):
    text: str


@router.post("/store")
async def store(data: NotesRequest):

    global pdf_text

    pdf_text = data.text

    return {"message": "Stored Successfully"}


@router.get("/generate")
async def generate():

    global pdf_text

    if pdf_text == "":
        return {
            "notes": "Please upload a PDF first."
        }

    notes = generate_notes(pdf_text)

    return {
        "notes": notes
    }
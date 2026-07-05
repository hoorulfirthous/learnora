from fastapi import APIRouter
from pydantic import BaseModel

from app.services.gemini_service import ask_gemini

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"]
)

# Store uploaded PDF text
pdf_text = ""


class ChatStore(BaseModel):
    text: str


class ChatRequest(BaseModel):
    question: str


# ==========================
# Store PDF Text
# ==========================

@router.post("/store")
async def store(data: ChatStore):

    global pdf_text

    pdf_text = data.text

    return {
        "message": "Chat PDF stored successfully."
    }


# ==========================
# Ask AI
# ==========================

@router.post("/ask")
async def ask(request: ChatRequest):

    global pdf_text

    if pdf_text.strip() == "":
        return {
            "answer": "Please upload a PDF first."
        }

    answer = ask_gemini(
        context=pdf_text,
        question=request.question
    )

    return {
        "answer": answer
    }
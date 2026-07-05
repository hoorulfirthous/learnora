from fastapi import APIRouter, UploadFile, File
from pypdf import PdfReader

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)


@router.post("/pdf")
async def upload_pdf(file: UploadFile = File(...)):
    try:
        reader = PdfReader(file.file)

        text = ""

        for page in reader.pages:
            extracted = page.extract_text()
            if extracted:
                text += extracted + "\n"

        return {
            "filename": file.filename,
            "text": text
        }

    except Exception as e:
        return {
            "error": str(e)
        }
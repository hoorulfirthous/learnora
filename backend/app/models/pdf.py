from pydantic import BaseModel

class PDFDocument(BaseModel):
    user_id: str
    filename: str
    text: str
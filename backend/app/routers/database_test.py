from fastapi import APIRouter
from app.database import db

router = APIRouter(
    prefix="/database",
    tags=["Database"]
)

@router.get("/")
async def database_info():
    collections = await db.list_collection_names()

    return {
        "database": "learnora_ai",
        "collections": collections
    }
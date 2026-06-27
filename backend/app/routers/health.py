from fastapi import APIRouter

from fastapi import Depends

from app.dependencies.auth import get_current_user

router = APIRouter()


@router.get("/")
def health_check():
    return {
        "status": "healthy",
        "message": "Learnora AI API Running"
    }


@router.get("/profile")
async def profile(
    current_user: str = Depends(get_current_user)
):

    return {
        "message": "Welcome to Learnora AI",
        "email": current_user
    }
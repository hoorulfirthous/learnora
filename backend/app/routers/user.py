from fastapi import APIRouter, Depends, HTTPException

from app.database import db
from app.dependencies.auth import get_current_user

router = APIRouter(
    prefix="/user",
    tags=["User"]
)


@router.get("/me")
async def get_me(
    current_user: str = Depends(get_current_user)
):

    user = await db.users.find_one(
        {"email": current_user}
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return {
        "username": user["username"],
        "email": user["email"]
    }
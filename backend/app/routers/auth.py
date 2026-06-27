from fastapi import APIRouter, HTTPException

from app.database import db
from app.schemas.user import UserRegister,UserLogin
from app.utils.security import hash_password, verify_password
from app.utils.jwt_handler import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/register")
async def register(user: UserRegister):

    # Check existing email
    existing_user = await db.users.find_one(
        {"email": user.email}
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    # Convert schema to dictionary
    user_data = user.model_dump()

    # Hash password
    user_data["password"] = hash_password(
        user.password
    )

    # Save to MongoDB
    await db.users.insert_one(user_data)

    return {
        "message": "Registration Successful"
    }


@router.post("/login")
async def login(user: UserLogin):

    # Find user by email
    existing_user = await db.users.find_one(
        {"email": user.email}
    )

    if not existing_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # Verify password
    if not verify_password(
        user.password,
        existing_user["password"]
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # Create JWT
    token = create_access_token(
        {
            "sub": existing_user["email"]
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }
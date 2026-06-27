from fastapi import FastAPI


from app.routers import health

from app.routers import auth

from app.routers import database_test


app = FastAPI(
    title="Learnora AI API",
    version="1.0.0"
)

app.include_router(
    health.router
)

app.include_router(
    auth.router
)

app.include_router(
    database_test.router
    )



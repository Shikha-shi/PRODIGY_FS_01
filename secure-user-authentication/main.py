from fastapi import FastAPI
from sqlalchemy import text

from database.database import Base, engine
from app.models.user import User
from app.routers.auth import router as auth_router


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Secure User Authentication API",
    description="Authentication system for Prodigy Infotech Task 01",
    version="1.0.0"
)
app.include_router(auth_router)

@app.get("/")
def root():
    return {
        "message": "Secure User Authentication API is running"
    }


@app.get("/test-db")
def test_database():
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))

    return {
        "database": "connected",
        "result": result.scalar()
    }
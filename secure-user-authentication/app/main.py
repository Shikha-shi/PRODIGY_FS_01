from fastapi import FastAPI
from sqlalchemy import text

from database.database import Base, engine
from app.models.user import User


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Secure User Authentication API",
    description="Authentication system for Prodigy Infotech Internship Task 01",
    version="1.0.0"
)


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
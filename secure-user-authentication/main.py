from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.database import Base, engine
from app.models.user import User
from app.routers.auth import router as auth_router


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Secure User Authentication API",
    description="Authentication system for Prodigy Infotech Task 01",
    version="1.0.0"
)


# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "message": "Secure User Authentication API is running"
    }
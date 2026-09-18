# 🔐 Secure User Authentication System

A secure user authentication system built as part of the **Prodigy Infotech Internship – Task 01**.

The application provides user registration, secure password hashing, JWT-based authentication, protected routes, and role-based access control.

## 🚀 Features

- User registration
- User login
- Secure password hashing using Argon2
- JWT authentication
- Protected user routes
- Duplicate email prevention
- Input validation
- Role-based access control
- Admin-only routes
- PostgreSQL database
- SQLAlchemy ORM
- Responsive frontend
- Postman API testing

## 🛠️ Tech Stack

### Backend
- Python
- FastAPI
- SQLAlchemy
- PostgreSQL
- PyJWT
- pwdlib / Argon2
- Pydantic

### Frontend
- HTML
- CSS
- JavaScript

### Tools
- Postman
- pgAdmin 4
- Git & GitHub

## 📁 Project Structure

```text
secure-user-authentication/
│
├── app/
│   ├── dependencies/
│   │   └── auth.py
│   ├── models/
│   │   └── user.py
│   ├── routers/
│   │   └── auth.py
│   ├── schemas/
│   │   └── auth.py
│   ├── services/
│   │   └── auth.py
│   ├── main.py
│   └── settings.py
│
├── database/
│   └── database.py
│
├── requirements.txt
└── README.md
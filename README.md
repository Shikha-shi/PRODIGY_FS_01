# 🔐 Secure User Authentication System

A full-stack **Secure User Authentication System** developed as part of the **Prodigy Infotech Internship – Task 01**.

This project implements secure user registration and login, password hashing, JWT-based authentication, protected routes, and Role-Based Access Control (RBAC) with a modern responsive frontend.

---

## 🚀 Features

### 🔐 Authentication

- User registration
- User login
- Secure password hashing using Argon2
- JWT-based authentication
- JWT token expiration
- Protected API routes
- Authenticated user profile endpoint
- Duplicate email prevention
- Input validation

### 🛡️ Authorization

- Role-Based Access Control (RBAC)
- User and Admin roles
- Admin-only protected endpoint
- Active/inactive account validation
- Unauthorized access protection

### 🗄️ Database

- PostgreSQL database
- SQLAlchemy ORM
- Unique email validation
- User account management
- Automatic account creation timestamp

### 🎨 Frontend

- Modern responsive authentication UI
- Login page
- Registration page
- User dashboard
- Admin dashboard
- Dynamic user information
- Password visibility toggle
- Secure session handling
- Cyan/Navy themed interface
- Responsive design
- Lucide icons

### 🧪 Testing & Development

- Swagger/OpenAPI documentation
- Postman API testing
- pgAdmin 4
- Git & GitHub

---

# 🛠️ Tech Stack

## Backend

- **Python**
- **FastAPI**
- **SQLAlchemy**
- **PostgreSQL**
- **PyJWT**
- **pwdlib**
- **Argon2**
- **Pydantic**
- **Uvicorn**

## Frontend

- **HTML5**
- **CSS3**
- **JavaScript**
- **Lucide Icons**

## Tools

- **Postman**
- **pgAdmin 4**
- **Git**
- **GitHub**
- **Swagger UI**

---

# 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │      Frontend        │
                    │  HTML/CSS/JavaScript │
                    └──────────┬───────────┘
                               │
                               │ HTTP Requests
                               ▼
                    ┌──────────────────────┐
                    │       FastAPI        │
                    │      REST API        │
                    └──────────┬───────────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
                 ▼                           ▼
        ┌─────────────────┐        ┌─────────────────┐
        │ Authentication  │        │ Authorization   │
        │      JWT        │        │      RBAC       │
        └────────┬────────┘        └────────┬────────┘
                 │                           │
                 └─────────────┬─────────────┘
                               ▼
                    ┌──────────────────────┐
                    │     SQLAlchemy       │
                    │         ORM          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     PostgreSQL       │
                    │      Database        │
                    └──────────────────────┘
```

---

# 🔄 Authentication Flow

```text
User Registration
        │
        ▼
Input Validation
        │
        ▼
Password Hashing using Argon2
        │
        ▼
Store User in PostgreSQL
        │
        ▼
User Login
        │
        ▼
Verify Password
        │
        ▼
Generate JWT Access Token
        │
        ▼
Client Stores Access Token
        │
        ▼
Protected API Request
        │
        ▼
JWT Verification
        │
        ▼
Authenticated User
```

---

# 🛡️ Authorization Flow

The application uses **Role-Based Access Control (RBAC)**.

```text
                    JWT Token
                        │
                        ▼
                 Verify Token
                        │
                        ▼
                 Identify User
                        │
               ┌────────┴────────┐
               │                 │
           User Role         Admin Role
               │                 │
               ▼                 ▼
        User Dashboard      Admin Panel
```

---

# 📌 API Endpoints

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| `POST` | `/auth/register` | None | Register a new user |
| `POST` | `/auth/login` | None | Login and receive JWT |
| `GET` | `/auth/me` | JWT Required | Get authenticated user information |
| `GET` | `/auth/admin` | Admin Only | Access admin-protected resource |

---

# ⚙️ Environment Variables

Create a `.env` file inside:

```text
secure-user-authentication/
```

Example:

```env
DATABASE_URL=postgresql+psycopg://username:password@localhost:5432/secure_auth_db

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=30
```

> ⚠️ Never commit your `.env` file or expose your database password or JWT secret.

The `.env` file is excluded from Git using `.gitignore`.

---

# ▶️ Running the Backend

Navigate to the backend directory:

```bash
cd secure-user-authentication
```

Activate the virtual environment:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

Backend API:

```text
http://127.0.0.1:8000
```

---

# 📚 API Documentation

FastAPI provides interactive API documentation automatically.

### Swagger UI

```text
http://127.0.0.1:8000/docs
```

### ReDoc

```text
http://127.0.0.1:8000/redoc
```

---

# 🌐 Running the Frontend

Open another terminal and navigate to:

```bash
cd frontend
```

Start the frontend server:

```bash
python -m http.server 5500
```

Open the application:

```text
http://127.0.0.1:5500/index.html
```
# Project Setup

## Phase

Phase 3 – Project Setup

---

# Objective

The objective of this phase was to prepare the complete development environment before implementing the application. This included verifying the required software, setting up the Python virtual environment, organizing the project structure, configuring essential files, installing dependencies, and ensuring the backend server runs successfully.

---

# Development Environment

| Software | Version |
|----------|---------|
| Python | 3.14.6 |
| pip | 26.1.2 |
| Git | 2.54.0 |
| Visual Studio Code | 1.131.0 |

---

# Python Virtual Environment

A dedicated Python virtual environment was created to isolate project dependencies.

### Create Virtual Environment

```bash
python -m venv .venv
```

### Activate (Windows)

```bash
.venv\Scripts\activate
```

---

# Project Structure

```
LegalDraft-AI/
│
├── .venv/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── database/
│   │   ├── models/
│   │   ├── prompts/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── static/
│   │   └── utils/
│   ├── tests/
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── main.py
│   └── requirements.txt
│
├── docs/
├── frontend/
│   ├── assets/
│   ├── css/
│   └── js/
│
├── uploads/
├── .gitignore
├── LICENSE
└── README.md
```

---

# Configuration Files

The following configuration files were created.

| File | Purpose |
|------|---------|
| `.env` | Stores environment variables such as the Gemini API key |
| `.env.example` | Template for required environment variables |
| `.gitignore` | Excludes unnecessary files from Git |
| `requirements.txt` | Lists Python dependencies |
| `main.py` | Entry point of the FastAPI application |
| `LICENSE` | Defines the project's license |

---

# Python Dependencies

The following packages were installed.

- FastAPI
- Uvicorn
- Google GenAI SDK
- SQLAlchemy
- Pydantic
- Python Dotenv
- ReportLab
- Python Multipart

Dependencies were installed using:

```bash
pip install -r requirements.txt
```

---

# FastAPI Application

A basic FastAPI application was created in `backend/main.py`.

The application includes:

- Project title
- Version information
- Description
- Root endpoint (`/`)

---

# Verification

The application was started using:

```bash
uvicorn main:app --reload
```

The following endpoints were verified successfully:

| Endpoint | Purpose | Status |
|----------|---------|--------|
| `/` | Root API | ✅ Working |
| `/docs` | Swagger API Documentation | ✅ Working |

---

# Deliverables

By the end of this phase:

- Development environment configured
- Virtual environment created
- Project directory structure established
- Configuration files added
- Required dependencies installed
- FastAPI application initialized
- API server running successfully
- Swagger documentation accessible

---

# Outcome

The project is fully prepared for development. The backend server is operational, the project structure is organized, and the environment is ready for implementing application features in the next phase.
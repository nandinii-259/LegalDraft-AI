# System Architecture

## Overview

LegalDraft AI follows a three-tier architecture consisting of:

1. Frontend
2. Backend
3. External Services

This separation ensures the application is modular, maintainable, and scalable.

---

# High-Level Architecture

```
+----------------------+
|      Frontend        |
| HTML • CSS • JS      |
+----------+-----------+
           |
           | HTTP Requests
           v
+----------------------+
|   FastAPI Backend    |
| Business Logic       |
| AI Integration       |
| PDF Generation       |
| Database Access      |
+----+-----------+-----+
     |           |
     |           |
     v           v
 Gemini API    SQLite
     |
     v
 Generated Legal Document
```

---

# Components

## Frontend

Responsibilities:

- Display pages
- Collect user input
- Call backend APIs
- Show generated agreements
- Download PDFs
- Interact with AI Assistant

Technologies:

- HTML
- CSS
- JavaScript

---

## Backend

Responsibilities:

- Receive API requests
- Validate input
- Generate prompts
- Communicate with Gemini AI
- Store documents
- Generate PDFs
- Return responses

Technology:

- FastAPI

---

## Database

Responsibilities:

- Store generated documents
- Store agreement information
- Store AI conversation history

Technology:

- SQLite

---

## AI Service

Responsibilities:

- Generate legal agreements
- Explain clauses
- Improve documents
- Answer user questions

Technology:

- Google Gemini API

---

## PDF Generator

Responsibilities:

- Convert generated agreement into downloadable PDF.

Technology:

- ReportLab

---

# Benefits of this Architecture

- Modular
- Easy to maintain
- Easy to extend
- Secure API key management
- Clear separation of responsibilities
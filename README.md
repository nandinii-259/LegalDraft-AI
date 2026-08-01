# ⚖️ LegalDraft AI

An AI-powered legal agreement generation platform that enables users to generate professional legal documents, manage document history, download agreements as PDFs, and leverage AI-powered legal assistance such as clause explanation, agreement improvement, summarization, risk analysis, and document-based chat.

---

## 🚀 Features

### 📝 Agreement Generator
- Generate legal agreements using Google Gemini AI
- Rental Agreement support
- Employment Agreement support
- Non-Disclosure Agreement (NDA) support

### 📂 Document Management
- Save agreements in SQLite database
- View agreement history
- View individual agreements
- Delete agreements

### 📄 PDF Export
- Download generated agreements as PDF
- Print agreements directly from browser

### 🤖 AI Workspace
- Chat with Agreement
- Explain Legal Clauses
- Improve Agreement Language
- Summarize Agreements
- AI Risk Analysis

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- React Markdown
- React Toastify
- Lucide React

### Backend
- FastAPI
- Python
- SQLAlchemy
- SQLite
- Google Gemini API
- ReportLab

---

## 📁 Project Structure

```
LegalDraft-AI/

│── backend/
│   ├── app/
│   ├── generated_pdfs/
│   ├── requirements.txt
│   └── main.py
│
│── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ✨ Application Features

### 🏠 Home Page
- Hero Section
- Features Overview
- How It Works

### 📑 Agreement Generator
- Dynamic Agreement Form
- AI Generated Agreement
- Copy Agreement
- Download PDF
- Print Agreement
- Regenerate Agreement

### 📚 Agreement History
- View All Agreements
- View Agreement Details
- Delete Agreement

### 🤖 AI Workspace
- AI Chat
- Clause Explanation
- Agreement Improvement
- Agreement Summarization
- Risk Analysis

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/LegalDraft-AI.git
```

---

### Backend Setup

```bash
cd backend

python -m venv .venv

# Windows
.venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file inside the backend directory.

```env
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
```

Run Backend

```bash
uvicorn main:app --reload --port 8001
```

Swagger Documentation

```
http://127.0.0.1:8001/docs
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Application

```
http://localhost:5173
```

---

## 📸 Screenshots

### Home Page

_Add Screenshot_

### Agreement Generator

_Add Screenshot_

### Generated Agreement

_Add Screenshot_

### Agreement History

_Add Screenshot_

### AI Workspace

_Add Screenshot_

---

## 🔗 API Endpoints

### Agreements

- Generate Agreement

### Documents

- Get All Documents
- Get Single Document
- Delete Document
- Download PDF

### AI

- Chat with Agreement
- Explain Clause
- Improve Agreement
- Summarize Agreement
- Risk Analysis

---

## 📈 Future Improvements

- User Authentication
- User Dashboard
- Multiple Agreement Templates
- Digital Signatures
- Cloud Database
- Deployment
- Search & Filter Agreements
- Responsive UI Enhancements

---

## 👩‍💻 Author

**Nandini Agrawal**

Final Year Electronics & Telecommunication Engineering Student

Interested in:
- AI Engineering
- Full Stack Development
- Machine Learning
- Generative AI

---

## ⭐ If you like this project

Please consider giving this repository a ⭐ on GitHub.
# Feature 3.1 – AI Assistant

## Objective

Allow users to ask questions about a generated legal agreement using AI.

---

## Technologies Used

- FastAPI
- Google Gemini API
- SQLAlchemy
- SQLite

---

## Workflow

User

↓

Select Agreement

↓

Ask Question

↓

Gemini Reads Agreement

↓

AI Returns Answer

---

## API Endpoint

POST

/api/v1/chat

---

## Request

```json
{
    "document_id": 2,
    "question": "Summarize this agreement."
}
```

## Response

```json
{
    "answer": "..."
}
```

---

## Capabilities

- Summarize Agreement
- Explain Clauses
- Answer Questions
- Extract Important Information

---

## Result

✅ Users can interact with their legal agreements using AI.

---

## Status

Completed
# Feature 3.2 – Explain Legal Clauses

## Objective

Allow users to understand complex legal clauses in simple, easy-to-read language using AI.

---

## Technologies Used

- FastAPI
- Google Gemini API
- Prompt Engineering

---

## Workflow

User

↓

Enter Legal Clause

↓

POST /api/v1/explain

↓

Gemini AI

↓

Simple Explanation

---

## API Endpoint

POST

/api/v1/explain

---

## Request

```json
{
    "clause": "The tenant shall pay rent before the 5th day of every month."
}
```

## Response

```json
{
    "explanation": "This means the tenant must pay rent on or before the fifth day of every month."
}
```

---

## Result

✅ Users can easily understand legal language without legal expertise.

---

## Status

Completed
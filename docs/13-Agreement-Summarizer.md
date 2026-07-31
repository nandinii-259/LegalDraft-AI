# Feature 3.4 – Agreement Summarizer

## Objective

Allow users to generate a concise summary of a legal agreement using AI.

---

## Technologies Used

- FastAPI
- Google Gemini API
- Prompt Engineering

---

## Workflow

User

↓

Enter Agreement

↓

POST /api/v1/summarize

↓

Gemini AI

↓

Agreement Summary

---

## API Endpoint

POST

/api/v1/summarize

---

## Request

```json
{
    "agreement": "..."
}
```

## Response

```json
{
    "summary": "..."
}
```

---

## Capabilities

- Summarize Long Agreements
- Extract Important Information
- Quick Overview
- Highlight Key Clauses

---

## Result

✅ Users can quickly understand lengthy legal agreements.

---

## Status

Completed
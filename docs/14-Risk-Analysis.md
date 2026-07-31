# Feature 3.5 – Risk Analysis

## Objective

Analyze a legal agreement and identify legal risks, missing clauses, ambiguous language, and provide improvement suggestions using AI.

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

POST /api/v1/risk-analysis

↓

Gemini AI

↓

Risk Analysis Report

---

## API Endpoint

POST

/api/v1/risk-analysis

---

## Request

```json
{
    "agreement": "The tenant shall pay rent monthly."
}
```

## Response

```json
{
    "analysis": "..."
}
```

---

## Capabilities

- Detect Missing Clauses
- Detect Ambiguous Language
- Highlight Legal Risks
- Suggest Improvements

---

## Result

✅ Users receive an AI-generated legal risk assessment.

---

## Status

Completed
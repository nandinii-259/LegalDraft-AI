# Feature 2.1 - Save Agreement to Database

## Objective

Store every AI-generated legal agreement permanently in the SQLite database.

---

## Technologies Used

- FastAPI
- SQLAlchemy
- SQLite
- Gemini API

---

## Workflow

User
↓

Generate Agreement
↓

Gemini AI

↓

Agreement Generated

↓

Save to SQLite Database

↓

Return API Response

---

## Database Tables

### agreement_types

Stores different agreement categories.

Example:

- Rental Agreement

---

### documents

Stores generated legal agreements.

Fields:

- id
- agreement_type_id
- title
- form_data
- generated_content

---

## API Endpoint

POST

/api/v1/agreements/generate

---

## Result

✅ AI-generated agreements are automatically stored in the database.

---

## Status

Completed
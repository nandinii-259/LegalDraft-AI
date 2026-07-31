# Feature 2.3 – View Single Agreement

## Objective

Allow users to retrieve the complete details of a specific agreement using its document ID.

---

## Technologies Used

- FastAPI
- SQLAlchemy
- SQLite

---

## Workflow

User

↓

Agreement History

↓

Select Agreement

↓

GET /api/v1/documents/{id}

↓

Display Complete Agreement

---

## API Endpoint

GET

/api/v1/documents/{document_id}

---

## Response

Returns:

- Document ID
- Agreement Title
- Agreement Type
- Form Data
- Generated Agreement
- Creation Date

---

## Result

✅ Users can view any previously generated agreement.

---

## Status

Completed
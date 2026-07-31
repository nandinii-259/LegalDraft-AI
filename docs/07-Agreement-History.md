# Feature 2.2 – Agreement History

## Objective

Allow users to view all previously generated legal agreements stored in the database.

---

## Technologies Used

- FastAPI
- SQLAlchemy
- SQLite

---

## Workflow

User

↓

Generate Agreement

↓

Save to Database

↓

GET /api/v1/documents

↓

Display Agreement History

---

## API Endpoint

GET

/api/v1/documents

---

## Response

Returns all generated agreements sorted by newest first.

Each agreement contains:

- Document ID
- Title
- Agreement Type
- Creation Date

---

## Result

✅ Users can view all previously generated agreements.

---

## Status

Completed
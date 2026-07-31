# Feature 2.4 – Delete Agreement

## Objective

Allow users to permanently delete a generated agreement from the database.

---

## Technologies Used

- FastAPI
- SQLAlchemy
- SQLite

---

## Workflow

User

↓

Select Agreement

↓

DELETE /api/v1/documents/{document_id}

↓

Agreement Removed from Database

---

## API Endpoint

DELETE

/api/v1/documents/{document_id}

---

## Response

Returns a success message after the agreement is deleted.

Example:

{
    "message": "Agreement deleted successfully."
}

---

## Result

✅ Users can permanently remove agreements from the system.

---

## Status

Completed
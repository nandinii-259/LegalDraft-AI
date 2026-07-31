# API Design

## Overview

The backend exposes REST APIs that allow the frontend to communicate with the AI system and database.

Base URL:

```
/api/v1
```

---

# Agreement APIs

## Generate Agreement

POST /agreements/generate

Purpose:

Generate a legal agreement using AI.

---

## Get Document

GET /documents/{id}

Purpose:

Retrieve a previously generated document.

---

## Get All Documents

GET /documents

Purpose:

Retrieve all saved documents.

---

## Delete Document

DELETE /documents/{id}

Purpose:

Delete a saved document.

---

# AI Assistant APIs

## Ask AI

POST /assistant/chat

Purpose:

Ask questions about a generated agreement.

---

## Improve Agreement

POST /assistant/improve

Purpose:

Request improvements to the generated agreement.

---

## Explain Clause

POST /assistant/explain

Purpose:

Generate a simplified explanation of a legal clause.

---

# PDF API

## Download PDF

GET /documents/{id}/pdf

Purpose:

Generate and download a PDF version of the document.

---

# Health API

GET /health

Purpose:

Verify that the backend service is running.

---

# Response Format

Successful Response

```json
{
  "success": true,
  "data": {}
}
```

Error Response

```json
{
  "success": false,
  "message": "Error description"
}
```
# Database Design

## Overview

The application stores generated legal documents and related information using SQLite.

---

# Tables

## agreement_types

Stores all supported agreement types.

| Column | Type | Description |
|---------|------|-------------|
| id | INTEGER | Primary Key |
| name | TEXT | Agreement name |

---

## documents

Stores generated legal documents.

| Column | Type | Description |
|---------|------|-------------|
| id | INTEGER | Primary Key |
| agreement_type_id | INTEGER | Foreign Key |
| title | TEXT | Document title |
| form_data | JSON/TEXT | User input |
| generated_content | TEXT | AI generated agreement |
| created_at | DATETIME | Creation timestamp |

---

## ai_conversations

Stores AI Assistant conversations.

| Column | Type | Description |
|---------|------|-------------|
| id | INTEGER | Primary Key |
| document_id | INTEGER | Related document |
| user_message | TEXT | User question |
| ai_response | TEXT | AI response |
| created_at | DATETIME | Timestamp |

---

# Relationships

agreement_types (1)
      |
      |
      |------< documents (Many)

documents (1)
      |
      |
      |------< ai_conversations (Many)

---

# Database Goals

- Simple
- Lightweight
- Easy to maintain
- Suitable for MVP
from sqlalchemy.orm import Session

from app.models.document import Document
from app.prompts import build_chat_prompt
from app.services.gemini_service import GeminiService


class ChatService:

    @staticmethod
    def ask(document_id: int, question: str, db: Session):

        document = (
            db.query(Document)
            .filter(Document.id == document_id)
            .first()
        )

        if document is None:
            return {
                "answer": "Document not found."
            }

        prompt = build_chat_prompt(
            agreement=document.generated_content,
            question=question,
        )

        gemini = GeminiService()

        answer = gemini.generate(prompt)

        return {
            "answer": answer
        }
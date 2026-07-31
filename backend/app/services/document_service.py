from sqlalchemy.orm import Session, joinedload

from app.models.document import Document


class DocumentService:

    @staticmethod
    def get_all(db: Session):

        documents = (
            db.query(Document)
            .options(joinedload(Document.agreement_type))
            .order_by(Document.id.desc())
            .all()
        )

        result = []

        for document in documents:

            result.append(
                {
                    "id": document.id,
                    "title": document.title,
                    "agreement_type": document.agreement_type.name,
                    "created_at": document.created_at,
                }
            )

        return result

    @staticmethod
    def get(document_id: int, db: Session):

        document = (
            db.query(Document)
            .options(joinedload(Document.agreement_type))
            .filter(Document.id == document_id)
            .first()
        )

        if document is None:
            return {
                "message": "Document not found"
            }

        return {
            "id": document.id,
            "title": document.title,
            "agreement_type": document.agreement_type.name,
            "form_data": document.form_data,
            "generated_content": document.generated_content,
            "created_at": document.created_at,
        }

    @staticmethod
    def delete(document_id: int, db: Session):

        document = (
            db.query(Document)
            .filter(Document.id == document_id)
            .first()
        )

        if document is None:
            return {
                "message": "Document not found"
            }

        db.delete(document)

        db.commit()

        return {
            "message": "Agreement deleted successfully."
        }
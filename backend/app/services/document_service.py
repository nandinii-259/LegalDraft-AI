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

        for doc in documents:

            result.append(
                {
                    "id": doc.id,
                    "title": doc.title,
                    "agreement_type": doc.agreement_type.name,
                    "created_at": doc.created_at,
                }
            )

        return result

    @staticmethod
    def get(document_id: int, db: Session):

        return (
            db.query(Document)
            .options(joinedload(Document.agreement_type))
            .filter(Document.id == document_id)
            .first()
        )

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
            "message": "Document deleted successfully"
        }
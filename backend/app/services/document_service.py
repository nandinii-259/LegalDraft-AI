class DocumentService:

    @staticmethod
    def get_all():
        return []

    @staticmethod
    def get(document_id: int):
        return {
            "id": document_id,
            "message": "Document retrieval will be implemented later."
        }

    @staticmethod
    def delete(document_id: int):
        return {
            "message": f"Document {document_id} deleted (placeholder)."
        }
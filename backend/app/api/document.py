from fastapi import APIRouter

from app.services.document_service import DocumentService

router = APIRouter(prefix="/documents", tags=["Documents"])


@router.get("/")
def get_documents():
    return DocumentService.get_all()


@router.get("/{document_id}")
def get_document(document_id: int):
    return DocumentService.get(document_id)


@router.delete("/{document_id}")
def delete_document(document_id: int):
    return DocumentService.delete(document_id)
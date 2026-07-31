from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.document import (
    DocumentResponse,
    DocumentDetailResponse,
)
from app.services.document_service import DocumentService

router = APIRouter(
    prefix="/documents",
    tags=["Documents"],
)


@router.get(
    "/",
    response_model=List[DocumentResponse],
)
def get_documents(
    db: Session = Depends(get_db),
):
    return DocumentService.get_all(db)


@router.get(
    "/{document_id}",
    response_model=DocumentDetailResponse,
)
def get_document(
    document_id: int,
    db: Session = Depends(get_db),
):
    return DocumentService.get(document_id, db)


@router.delete("/{document_id}")
def delete_document(
    document_id: int,
    db: Session = Depends(get_db),
):
    return DocumentService.delete(document_id, db)
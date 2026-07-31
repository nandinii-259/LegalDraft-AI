from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.chat import (
    ChatRequest,
    ChatResponse,
)
from app.services.chat_service import ChatService

router = APIRouter(
    prefix="/chat",
    tags=["AI Assistant"],
)


@router.post(
    "/",
    response_model=ChatResponse,
)
def chat(
    request: ChatRequest,
    db: Session = Depends(get_db),
):
    return ChatService.ask(
        document_id=request.document_id,
        question=request.question,
        db=db,
    )
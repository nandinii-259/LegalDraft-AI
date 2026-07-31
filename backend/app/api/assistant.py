from fastapi import APIRouter

from app.schemas.ai_assistant import AIAssistantRequest
from app.services.assistant_service import AssistantService

router = APIRouter(prefix="/assistant", tags=["AI Assistant"])


@router.post("/chat")
def chat(request: AIAssistantRequest):
    return AssistantService.chat(request)


@router.post("/improve")
def improve():
    return AssistantService.improve()


@router.post("/explain")
def explain():
    return AssistantService.explain()
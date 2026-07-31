from fastapi import APIRouter

from app.api.agreement import router as agreement_router
from app.api.document import router as document_router
from app.api.assistant import router as assistant_router
from app.api.health import router as health_router

api_router = APIRouter(prefix="/api/v1")

api_router.include_router(agreement_router)
api_router.include_router(document_router)
api_router.include_router(assistant_router)
api_router.include_router(health_router)
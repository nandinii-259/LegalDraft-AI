from fastapi import APIRouter

from app.api.agreement import router as agreement_router
from app.api.chat import router as chat_router
from app.api.document import router as document_router
from app.api.explain import router as explain_router
from app.api.improve import router as improve_router
from app.api.summarize import router as summarize_router

api_router = APIRouter()

api_router.include_router(
    agreement_router,
    prefix="/agreements",
)

api_router.include_router(
    document_router,
)

api_router.include_router(
    chat_router,
)

api_router.include_router(
    explain_router,
)

api_router.include_router(
    improve_router,
)

api_router.include_router(
    summarize_router,
)
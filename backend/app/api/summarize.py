from fastapi import APIRouter

from app.schemas.summarize import (
    SummarizeRequest,
    SummarizeResponse,
)
from app.services.summarize_service import SummarizeService

router = APIRouter(
    prefix="/summarize",
    tags=["AI Summarizer"],
)


@router.post(
    "/",
    response_model=SummarizeResponse,
)
def summarize(
    request: SummarizeRequest,
):
    return SummarizeService.summarize(
        agreement=request.agreement
    )
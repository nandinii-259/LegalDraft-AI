from fastapi import APIRouter

from app.schemas.improve import (
    ImproveRequest,
    ImproveResponse,
)
from app.services.improve_service import ImproveService

router = APIRouter(
    prefix="/improve",
    tags=["AI Improvement"],
)


@router.post(
    "/",
    response_model=ImproveResponse,
)
def improve(
    request: ImproveRequest,
):
    return ImproveService.improve(
        agreement=request.agreement,
        instruction=request.instruction,
    )
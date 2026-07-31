from fastapi import APIRouter

from app.schemas.explain import (
    ExplainRequest,
    ExplainResponse,
)
from app.services.explain_service import ExplainService

router = APIRouter(
    prefix="/explain",
    tags=["AI Explanation"],
)


@router.post(
    "/",
    response_model=ExplainResponse,
)
def explain(
    request: ExplainRequest,
):
    return ExplainService.explain(
        request.clause
    )
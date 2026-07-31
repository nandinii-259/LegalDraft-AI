from fastapi import APIRouter

from app.schemas.risk import (
    RiskAnalysisRequest,
    RiskAnalysisResponse,
)
from app.services.risk_service import RiskService

router = APIRouter(
    prefix="/risk-analysis",
    tags=["AI Risk Analysis"],
)


@router.post(
    "/",
    response_model=RiskAnalysisResponse,
)
def analyze_risk(
    request: RiskAnalysisRequest,
):
    return RiskService.analyze(
        agreement=request.agreement
    )
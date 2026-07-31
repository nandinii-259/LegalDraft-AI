from pydantic import BaseModel


class RiskAnalysisRequest(BaseModel):
    agreement: str


class RiskAnalysisResponse(BaseModel):
    analysis: str
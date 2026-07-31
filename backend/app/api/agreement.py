from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.agreement import AgreementGenerateRequest
from app.services.agreement_service import AgreementService

router = APIRouter(prefix="/agreements", tags=["Agreements"])


@router.post("/generate")
def generate_agreement(
    request: AgreementGenerateRequest,
    db: Session = Depends(get_db),
):
    return AgreementService.generate(request, db)
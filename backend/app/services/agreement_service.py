from sqlalchemy.orm import Session

from app.models.agreement_type import AgreementType
from app.models.document import Document
from app.prompts import build_agreement_prompt
from app.schemas.agreement import (
    AgreementGenerateRequest,
    AgreementGenerateResponse,
)
from app.services.gemini_service import GeminiService


class AgreementService:

    @staticmethod
    def generate(
        request: AgreementGenerateRequest,
        db: Session,
    ) -> AgreementGenerateResponse:

        prompt = build_agreement_prompt(
            agreement_type=request.agreement_type,
            title=request.title,
            form_data=request.form_data,
        )

        gemini = GeminiService()

        agreement = gemini.generate(prompt)

        agreement_type = (
            db.query(AgreementType)
            .filter(
                AgreementType.name == request.agreement_type
            )
            .first()
        )

        if agreement_type is None:

            agreement_type = AgreementType(
                name=request.agreement_type
            )

            db.add(agreement_type)
            db.commit()
            db.refresh(agreement_type)

        document = Document(
            agreement_type_id=agreement_type.id,
            title=request.title,
            form_data=str(request.form_data),
            generated_content=agreement,
        )

        db.add(document)

        db.commit()

        db.refresh(document)

        return AgreementGenerateResponse(
            document_id=document.id,
            generated_content=agreement,
            pdf_path="Coming Soon",
        )
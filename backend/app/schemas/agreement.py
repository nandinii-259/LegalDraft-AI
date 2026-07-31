from pydantic import BaseModel


class AgreementGenerateRequest(BaseModel):
    agreement_type: str
    title: str
    form_data: dict


class AgreementGenerateResponse(BaseModel):
    document_id: int
    generated_content: str
    pdf_path: str
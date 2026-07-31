from datetime import datetime

from pydantic import BaseModel


class DocumentResponse(BaseModel):
    id: int
    title: str
    agreement_type: str
    created_at: datetime

    class Config:
        from_attributes = True
class DocumentDetailResponse(BaseModel):
    id: int
    title: str
    agreement_type: str
    form_data: str
    generated_content: str
    created_at: datetime

    class Config:
        from_attributes = True  
from datetime import datetime

from pydantic import BaseModel


class DocumentResponse(BaseModel):
    id: int
    agreement_type: str
    title: str
    generated_content: str
    created_at: datetime

    model_config = {
        "from_attributes": True
    }
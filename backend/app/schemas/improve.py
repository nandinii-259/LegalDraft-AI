from pydantic import BaseModel


class ImproveRequest(BaseModel):
    agreement: str
    instruction: str


class ImproveResponse(BaseModel):
    improved_agreement: str
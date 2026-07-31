from pydantic import BaseModel


class SummarizeRequest(BaseModel):
    agreement: str


class SummarizeResponse(BaseModel):
    summary: str
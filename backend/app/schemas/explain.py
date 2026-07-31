from pydantic import BaseModel


class ExplainRequest(BaseModel):
    clause: str


class ExplainResponse(BaseModel):
    explanation: str
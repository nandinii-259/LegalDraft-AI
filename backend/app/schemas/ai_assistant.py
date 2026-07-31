from pydantic import BaseModel


class AIAssistantRequest(BaseModel):
    document_id: int
    message: str


class AIAssistantResponse(BaseModel):
    response: str
from app.schemas.ai_assistant import (
    AIAssistantRequest,
    AIAssistantResponse,
)


class AssistantService:

    @staticmethod
    def chat(
        request: AIAssistantRequest,
    ) -> AIAssistantResponse:

        return AIAssistantResponse(
            response="AI Assistant integration will be implemented in Step 4.8."
        )

    @staticmethod
    def improve():
        return {
            "message": "Improve agreement functionality coming soon."
        }

    @staticmethod
    def explain():
        return {
            "message": "Explain clause functionality coming soon."
        }
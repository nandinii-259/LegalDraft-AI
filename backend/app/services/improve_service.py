from app.prompts import build_improve_prompt
from app.services.gemini_service import GeminiService


class ImproveService:

    @staticmethod
    def improve(
        agreement: str,
        instruction: str,
    ):

        prompt = build_improve_prompt(
            agreement,
            instruction,
        )

        gemini = GeminiService()

        improved = gemini.generate(prompt)

        return {
            "improved_agreement": improved
        }
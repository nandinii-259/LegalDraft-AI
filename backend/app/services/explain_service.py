from app.prompts import build_explain_prompt
from app.services.gemini_service import GeminiService


class ExplainService:

    @staticmethod
    def explain(clause: str):

        prompt = build_explain_prompt(clause)

        gemini = GeminiService()

        explanation = gemini.generate(prompt)

        return {
            "explanation": explanation
        }
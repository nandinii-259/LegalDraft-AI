from app.prompts import build_risk_prompt
from app.services.gemini_service import GeminiService


class RiskService:

    @staticmethod
    def analyze(agreement: str):

        prompt = build_risk_prompt(
            agreement
        )

        gemini = GeminiService()

        analysis = gemini.generate(prompt)

        return {
            "analysis": analysis
        }
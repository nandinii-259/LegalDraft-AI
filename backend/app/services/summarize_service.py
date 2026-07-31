from app.prompts import build_summarize_prompt
from app.services.gemini_service import GeminiService


class SummarizeService:

    @staticmethod
    def summarize(agreement: str):

        prompt = build_summarize_prompt(
            agreement
        )

        gemini = GeminiService()

        summary = gemini.generate(prompt)

        return {
            "summary": summary
        }
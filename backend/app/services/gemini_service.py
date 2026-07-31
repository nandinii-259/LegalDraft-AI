from google import genai
from google.genai.errors import APIError

from app.core.config import settings


class GeminiService:

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )

        # Models to try in order
        self.models = [
            "gemini-3.5-flash",
            "gemini-2.0-flash",
            "gemini-flash-latest",
            "gemini-pro-latest",
        ]

    def generate(self, prompt: str) -> str:

        last_error = None

        for model in self.models:

            try:

                response = self.client.models.generate_content(
                    model=model,
                    contents=prompt,
                )

                print(f"Using Gemini Model: {model}")

                return response.text.strip()

            except APIError as e:

                print(f"{model} failed.")

                last_error = e

        raise Exception(
            f"All Gemini models failed.\n{last_error}"
        )
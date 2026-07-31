from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "LegalDraft AI"
    APP_VERSION: str = "1.0.0"
    APP_DESCRIPTION: str = "AI-powered Legal Document Generator"

    GEMINI_API_KEY: str

    DATABASE_URL: str = "sqlite:///./legaldraft.db"

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


settings = Settings()
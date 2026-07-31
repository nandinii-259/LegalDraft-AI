from fastapi import FastAPI

app = FastAPI(
    title="LegalDraft AI",
    version="1.0.0",
    description="AI-powered Legal Document Generator"
)

@app.get("/")
def root():
    return {
        "message": "Welcome to LegalDraft AI API"
    }
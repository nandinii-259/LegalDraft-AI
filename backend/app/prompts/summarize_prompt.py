def build_summarize_prompt(agreement: str) -> str:

    return f"""
You are an experienced legal assistant.

Read the following legal agreement and provide a concise summary.

Your summary should include:

- Agreement Type
- Parties Involved
- Purpose
- Important Clauses
- Responsibilities
- Payment Terms (if applicable)
- Duration (if applicable)
- Termination Conditions
- Key Takeaways

Keep the summary professional and under 250 words.

--------------------------------

Agreement:

{agreement}

--------------------------------

Summary:
"""
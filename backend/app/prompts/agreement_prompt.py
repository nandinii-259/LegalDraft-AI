def build_agreement_prompt(
    agreement_type: str,
    title: str,
    form_data: dict,
) -> str:
    """
    Build a prompt for generating a legal agreement.
    """

    return f"""
You are an experienced legal drafting assistant.

Generate a professional first draft of a {agreement_type}.

Document Title:
{title}

User Details:
{form_data}

Requirements:
- Use clear and professional legal language.
- Organize the document with appropriate headings.
- Include standard clauses relevant to the agreement.
- Do not fabricate information that is not provided.
- End the document with signature sections for all parties.

This is a drafting assistant. The output should be treated as a draft and reviewed before legal use.
"""
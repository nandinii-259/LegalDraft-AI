def build_explain_prompt(clause: str) -> str:

    return f"""
You are an experienced legal assistant.

Explain the following legal clause in very simple English.

Do not use legal jargon.

Keep the explanation under 150 words.

Clause:

{clause}

Simple Explanation:
"""
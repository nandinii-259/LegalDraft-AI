def build_chat_prompt(
    agreement: str,
    question: str,
) -> str:

    return f"""
You are an experienced legal AI assistant.

Below is a legal agreement.

----------------------------

{agreement}

----------------------------

Answer ONLY using the information contained in the agreement.

If the answer is not present in the agreement, say:

"I could not find that information in the agreement."

User Question:

{question}

Answer:
"""
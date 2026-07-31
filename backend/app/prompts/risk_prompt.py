def build_risk_prompt(agreement: str) -> str:

    return f"""
You are an experienced legal risk analyst.

Analyze the following legal agreement.

Identify:

- Missing clauses
- Legal risks
- Ambiguous wording
- Weak protections
- Missing responsibilities
- Suggestions for improvement

Return the analysis in this format:

## Potential Risks

- ...

## Missing Clauses

- ...

## Suggestions

- ...

--------------------------------

Agreement:

{agreement}

--------------------------------

Risk Analysis:
"""
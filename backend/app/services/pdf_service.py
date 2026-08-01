import os
import re
from xml.sax.saxutils import escape

from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, SimpleDocTemplate


class PDFService:

    @staticmethod
    def clean_text(text: str) -> str:
        """
        Clean Gemini markdown so ReportLab can render it safely.
        """

        if not text:
            return ""

        # Remove markdown headings
        text = re.sub(r"^#{1,6}\s*", "", text, flags=re.MULTILINE)

        # Remove markdown bold/italic
        text = text.replace("**", "")
        text = text.replace("__", "")
        text = text.replace("*", "")

        # Remove markdown separators
        text = text.replace("---", "")

        # Remove HTML line breaks
        text = text.replace("<br>", "")
        text = text.replace("<br/>", "")
        text = text.replace("<br />", "")

        # Escape HTML characters
        text = escape(text)

        return text

    @staticmethod
    def generate(document_id: int, title: str, content: str):

        os.makedirs("generated_pdfs", exist_ok=True)

        filename = f"generated_pdfs/document_{document_id}.pdf"

        doc = SimpleDocTemplate(filename)

        styles = getSampleStyleSheet()

        story = []

        story.append(
            Paragraph(
                f"<b>{escape(title)}</b>",
                styles["Heading1"],
            )
        )

        story.append(
            Paragraph(" ", styles["BodyText"])
        )

        cleaned_content = PDFService.clean_text(content)

        for line in cleaned_content.split("\n"):

            line = line.strip()

            if not line:
                continue

            story.append(
                Paragraph(line, styles["BodyText"])
            )

        doc.build(story)

        return filename
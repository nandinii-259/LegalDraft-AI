import os
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, SimpleDocTemplate


class PDFService:

    @staticmethod
    def generate(document_id: int, title: str, content: str):

        os.makedirs("generated_pdfs", exist_ok=True)

        filename = f"generated_pdfs/document_{document_id}.pdf"

        doc = SimpleDocTemplate(filename)

        styles = getSampleStyleSheet()

        story = []

        story.append(Paragraph(f"<b>{title}</b>", styles["Heading1"]))

        story.append(Paragraph("<br/><br/>", styles["BodyText"]))

        # Remove markdown formatting
        content = content.replace("**", "")
        content = content.replace("##", "")
        content = content.replace("---", "")

        for line in content.split("\n"):

            if line.strip():

                story.append(
                    Paragraph(line, styles["BodyText"])
                )

        doc.build(story)

        return filename
from sqlalchemy import Column, DateTime, ForeignKey, Integer, Text
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database.database import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)

    agreement_type_id = Column(
        Integer,
        ForeignKey("agreement_types.id"),
        nullable=False
    )

    title = Column(Text, nullable=False)

    form_data = Column(Text, nullable=False)

    generated_content = Column(Text, nullable=False)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    agreement_type = relationship(
        "AgreementType",
        back_populates="documents"
    )

    conversations = relationship(
        "AIConversation",
        back_populates="document",
        cascade="all, delete"
    )
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base


class AgreementType(Base):
    __tablename__ = "agreement_types"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)

    documents = relationship(
        "Document",
        back_populates="agreement_type",
        cascade="all, delete"
    )
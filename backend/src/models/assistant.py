from pydantic import BaseModel
from typing import List


class AssistantRequest(BaseModel):
    """Incoming payload from the client."""
    message: str


class AssistantReply(BaseModel):
    """Structured reply returned by the assistant service and API."""
    message: str
    focus_keywords: List[str]
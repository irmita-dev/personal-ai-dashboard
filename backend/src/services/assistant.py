from src.models.assistant import AssistantReply


class AssistantService:
    """
    Very small rule-based assistant service.

    It takes a plain message string and returns:
    - a reply string
    - a list of simple focus-related keywords
    """

    def generate_reply(self, message: str) -> AssistantReply:
        """Generate a reply based on the raw message text."""
        text = message.lower()

        suggestions: list[str] = []

        if "focus" in text or "deep work" in text:
            suggestions.append(
                "Try a 90-minute deep-focus block with a 10-minute break. "
                "Silence notifications and close distracting tabs."
            )

        if "plan" in text or "today" in text:
            suggestions.append(
                "Pick your 1–3 most important tasks and schedule them into your calendar."
            )

        if "python" in text or "learning" in text:
            suggestions.append(
                "Review your notes from the last session and implement a tiny practice project."
            )

        if not suggestions:
            suggestions.append(
                "I can help you plan deep-work blocks, summarize your week, "
                "or design a small coding project."
            )

        reply_text = " ".join(suggestions)

        return AssistantReply(
            message=reply_text,
            focus_keywords=["focus", "deep work", "plan", "learning"],
        )
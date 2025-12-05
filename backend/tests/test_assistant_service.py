from src.services.assistant import AssistantService
from src.models.assistant import AssistantReply


def test_assistant_service_returns_reply_and_keywords():
    service = AssistantService()

    result: AssistantReply = service.generate_reply(
        "Help me plan my deep work today in Python."
    )

    # Should return a non-empty reply message
    assert isinstance(result.message, str)
    assert len(result.message) > 0

    # And at least one focus keyword
    assert isinstance(result.focus_keywords, list)
    assert len(result.focus_keywords) > 0
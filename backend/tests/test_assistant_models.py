from src.models.assistant import AssistantRequest, AssistantReply


def test_assistant_request_holds_message():
    req = AssistantRequest(message="Hello AI")
    assert req.message == "Hello AI"


def test_assistant_reply_shape():
    reply = AssistantReply(message="Hi there", focus_keywords=["focus"])
    assert reply.message == "Hi there"
    assert isinstance(reply.focus_keywords, list)
    assert len(reply.focus_keywords) >= 1
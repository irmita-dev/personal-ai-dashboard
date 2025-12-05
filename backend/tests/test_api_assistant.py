from fastapi.testclient import TestClient
from src.api.main import app

client = TestClient(app)


def test_assistant_reply_endpoint_exists_and_returns_shape():
    payload = {"message": "Help me plan my deep-work blocks for today."}

    response = client.post("/api/assistant/reply", json=payload)
    assert response.status_code == 200

    data = response.json()
    assert "message" in data
    assert "focus_keywords" in data
    assert isinstance(data["focus_keywords"], list)
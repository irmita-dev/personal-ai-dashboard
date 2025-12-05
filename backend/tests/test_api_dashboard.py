from fastapi.testclient import TestClient

from src.api.main import app

client = TestClient(app)


def test_app_has_correct_title():
    """FastAPI app should expose a clear title for docs."""
    assert app.title == "Personal AI Dashboard API"


def test_productivity_endpoint_works():
    """API should expose a smaller productivity-only endpoint."""
    response = client.get("/api/dashboard/productivity")

    assert response.status_code == 200
    data = response.json()

    assert "today_hours" in data
    assert "today_sessions" in data
    assert "last_7_days" in data
    assert len(data["last_7_days"]) == 7
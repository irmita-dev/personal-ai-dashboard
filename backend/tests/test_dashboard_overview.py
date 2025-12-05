from fastapi.testclient import TestClient

from src.api.main import app

client = TestClient(app)


def test_dashboard_overview_endpoint_exists_and_returns_shape():
    """API endpoint should exist and return the expected JSON shape."""
    response = client.get("/api/dashboard/overview")

    assert response.status_code == 200
    data = response.json()

    # Top-level keys
    for key in ["date", "focus", "energy", "learning", "productivity", "performance"]:
        assert key in data

    # Nested structures
    assert set(data["focus"].keys()) == {"planned", "completed", "label"}
    assert set(data["energy"].keys()) == {"score", "label"}
    assert set(data["learning"].keys()) == {"minutes", "topic"}
    assert set(data["productivity"].keys()) == {
        "today_hours",
        "today_sessions",
        "last_7_days",
    }
    assert set(data["performance"].keys()) == {
        "focus_trend",
        "energy_trend",
        "insights",
    }
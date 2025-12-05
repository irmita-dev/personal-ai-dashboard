from src.models.dashboard import DashboardOverview, ProductivitySummary
from src.services.dashboard import DashboardService


def test_service_returns_overview():
    """Service should build a valid DashboardOverview object."""
    service = DashboardService()
    overview = service.get_overview()

    assert isinstance(overview, DashboardOverview)
    assert overview.focus.planned > 0
    assert overview.productivity.today_sessions > 0


def test_service_returns_productivity_summary():
    """Service should be able to return productivity summary only."""
    service = DashboardService()
    summary = service.get_productivity_summary()

    assert isinstance(summary, ProductivitySummary)
    assert summary.today_hours > 0
    assert len(summary.last_7_days) == 7
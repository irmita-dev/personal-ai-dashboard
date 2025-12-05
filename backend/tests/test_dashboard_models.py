from datetime import date

from src.models.dashboard import (
    DashboardOverview,
    EnergySummary,
    FocusSummary,
    LearningSummary,
    PerformanceAnalytics,
    ProductivitySummary,
)


def test_dashboard_model_structure():
    """DashboardOverview should nest all summary models correctly."""
    focus = FocusSummary(planned=3, completed=2, label="Daily Tasks")
    energy = EnergySummary(score=75, label="Good")
    learning = LearningSummary(minutes=30, topic="Python")
    productivity = ProductivitySummary(
        today_hours=5.5,
        today_sessions=12,
        last_7_days=[4, 5, 6, 7, 6, 7, 8],
    )
    performance = PerformanceAnalytics(
        focus_trend=[60, 65, 70],
        energy_trend=[68, 70, 72],
        insights=["a", "b"],
    )

    overview = DashboardOverview(
        date=date.today(),
        focus=focus,
        energy=energy,
        learning=learning,
        productivity=productivity,
        performance=performance,
    )

    assert overview.focus.planned == 3
    assert overview.productivity.today_hours == 5.5
    assert len(overview.productivity.last_7_days) == 7
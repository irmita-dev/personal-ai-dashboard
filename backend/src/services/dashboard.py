from datetime import date

from src.models.dashboard import (
    DashboardOverview,
    EnergySummary,
    FocusSummary,
    LearningSummary,
    PerformanceAnalytics,
    ProductivitySummary,
)


class DashboardService:
    """Service layer that returns structured dashboard overview data."""

    def get_overview(self) -> DashboardOverview:
        """Return a static but well-structured overview for now."""
        today = date.today()

        focus = FocusSummary(
            planned=3,
            completed=2,
            label="Daily Tasks",
        )

        energy = EnergySummary(
            score=75,
            label="Good",
        )

        learning = LearningSummary(
            minutes=30,
            topic="Python",
        )

        productivity = ProductivitySummary(
            today_hours=5.5,
            today_sessions=12,
            last_7_days=[4, 5, 6, 7, 6, 7, 8],
        )

        performance = PerformanceAnalytics(
            focus_trend=[60, 65, 70, 72, 75],
            energy_trend=[68, 70, 72, 73, 75],
            insights=[
                "Focus is trending upward.",
                "Most sessions happen between 09:00–11:00.",
                "AI sessions are mostly used for code review and planning.",
            ],
        )

        return DashboardOverview(
            date=today,
            focus=focus,
            energy=energy,
            learning=learning,
            productivity=productivity,
            performance=performance,
        )

    def get_productivity_summary(self) -> ProductivitySummary:
        """Return only the productivity portion of the overview."""
        overview = self.get_overview()
        return overview.productivity
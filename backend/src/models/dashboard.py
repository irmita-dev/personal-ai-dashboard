from datetime import date
from typing import List

from pydantic import BaseModel


class FocusSummary(BaseModel):
    planned: int
    completed: int
    label: str


class EnergySummary(BaseModel):
    score: int
    label: str


class LearningSummary(BaseModel):
    minutes: int
    topic: str


class ProductivitySummary(BaseModel):
    """Productivity metrics for the dashboard."""

    today_hours: float
    today_sessions: int
    last_7_days: List[int]


class PerformanceAnalytics(BaseModel):
    """Higher-level analytics and insights."""

    focus_trend: List[int]
    energy_trend: List[int]
    insights: List[str]


class DashboardOverview(BaseModel):
    """Top-level dashboard overview model returned by the API."""

    date: date
    focus: FocusSummary
    energy: EnergySummary
    learning: LearningSummary
    productivity: ProductivitySummary
    performance: PerformanceAnalytics
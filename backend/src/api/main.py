from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.models.dashboard import DashboardOverview, ProductivitySummary
from src.models.assistant import AssistantRequest, AssistantReply
from src.services.dashboard import DashboardService
from src.services.assistant import AssistantService


app = FastAPI(title="Personal AI Dashboard API")

# Frontend runs on Vite dev server
origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

dashboard_service = DashboardService()
assistant_service = AssistantService()


@app.get("/health")
def health() -> dict:
    """Simple health check endpoint used by tests and frontend."""
    return {"status": "ok"}


@app.get("/api/dashboard/overview", response_model=DashboardOverview)
def get_dashboard_overview() -> DashboardOverview:
    """Public API endpoint used by the frontend dashboard."""
    return dashboard_service.get_overview()


@app.get("/api/dashboard/productivity", response_model=ProductivitySummary)
def get_productivity() -> ProductivitySummary:
    """Smaller endpoint that returns only productivity data."""
    return dashboard_service.get_productivity_summary()


@app.post("/api/assistant/reply", response_model=AssistantReply)
def post_assistant_reply(request: AssistantRequest) -> AssistantReply:
    """
    Accept an AssistantRequest body and return an AssistantReply.

    We pass only the raw message text into the service layer.
    """
    return assistant_service.generate_reply(request.message)


if __name__ == "__main__":
    # Manual debug runner (optional)
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)
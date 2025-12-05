// Global styles
import "./index.css";

import { useState, useEffect } from "react";

// -----------------------------------------------
// API helper to fetch the dashboard overview
// -----------------------------------------------
async function fetchOverview() {
  const response = await fetch("http://127.0.0.1:8000/api/dashboard/overview");

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data");
  }
  return response.json();
}

// ===============================================
// MAIN APP
// ===============================================

function App() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="app-page">
      <TopNav activeTab={activeTab} onNavigate={setActiveTab} />

      {activeTab === "overview" && <OverviewPage />}
      {activeTab === "assistant" && <AssistantPage />}
      {activeTab === "weather" && <PlaceholderPage title="Weather" />}
      {activeTab === "crypto" && <PlaceholderPage title="Crypto" />}

      <Footer />
    </div>
  );
}

// ===============================================
// TOP NAVIGATION BAR
// ===============================================

function TopNav({ activeTab, onNavigate }) {
  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <div className="brand">
          <div className="brand-icon">🤖</div>
          <div>
            <div className="brand-text-small">Personal</div>
            <div className="brand-text-big">AI Dashboard</div>
          </div>
        </div>

        <nav className="main-nav">
          <button
            className={activeTab === "overview" ? "nav-active" : ""}
            onClick={() => onNavigate("overview")}
          >
            Overview
          </button>

          <button
            className={activeTab === "assistant" ? "nav-active" : ""}
            onClick={() => onNavigate("assistant")}
          >
            AI Assistant
          </button>

          <button
            className={activeTab === "weather" ? "nav-active" : ""}
            onClick={() => onNavigate("weather")}
          >
            Weather
          </button>

          <button
            className={activeTab === "crypto" ? "nav-active" : ""}
            onClick={() => onNavigate("crypto")}
          >
            Crypto
          </button>
        </nav>

        <div className="nav-user">IRMITA DEV</div>
      </div>
    </header>
  );
}

// ===============================================
// OVERVIEW PAGE (fetches backend data)
// ===============================================

function OverviewPage() {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOverview()
      .then((data) => {
        setOverview(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load dashboard data from backend.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      {error && (
        <div style={{ textAlign: "center", marginTop: "20px", color: "#f87171" }}>
          {error}
        </div>
      )}

      <OverviewSection overview={overview} loading={loading} />
    </>
  );
}

// ===============================================
// OVERVIEW CONTENT SECTION
// ===============================================

function OverviewSection({ overview }) {
  // Default fallback values before backend loads
  const fallbackProductivity = {
    deep_work_hours: 25,
    sessions: 12,
    last_7_days: [35, 45, 40, 55, 60, 50, 68],
  };

  // Choose backend data if loaded, otherwise fallback
  const productivity = overview?.productivity ?? fallbackProductivity;

  // Safely resolve hours (backend uses deep_work_hours)
  const hours =
    typeof productivity.deep_work_hours === "number"
      ? productivity.deep_work_hours
      : typeof productivity.weekHours === "number"
      ? productivity.weekHours
      : 0;

  const performanceInsights =
    overview?.performance?.insights ?? [
      "Focus is trending upward.",
      "You are most productive between 09:00–11:00.",
      "AI sessions are mostly used for code review and planning.",
    ];

  const totalMessages = 14;
  const messageBreakdown = [
    { label: "Coding help", value: 7 },
    { label: "Planning", value: 4 },
    { label: "Notes & ideas", value: 3 },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-panel">
          <div className="hero-bg" />
          <div className="hero-content">
            <div className="hero-kicker">Personal AI</div>
            <div className="hero-title">Dashboard</div>
            <p className="hero-subtitle">
              A calm control center for your focus, learning and coding
              productivity — designed to feel like a cinematic command panel.
            </p>
          </div>
        </div>
      </section>

      {/* DATA CARDS */}
      <section className="cards">
        {/* Productivity card */}
        <article className="card">
          <h2 className="card-title">Productivity Summary</h2>
          <div className="productivity-main">{hours}h</div>
          <div className="productivity-sub">
            Deep work this week · {productivity.sessions} AI sessions
          </div>

          {/* Bars */}
          <div className="productivity-bars">
            {productivity.last_7_days.map((h, idx) => (
              <div key={idx} className="productivity-bar">
                <div
                  className="productivity-bar-inner"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>

          <div className="card-label-small">Last 7 days</div>
        </article>

        {/* Message breakdown */}
        <article className="card">
          <h2 className="card-title">Message Breakdown</h2>

          <div className="message-content">
            <div className="message-donut">
              <div className="message-donut-outer" />
              <div className="message-donut-inner" />
              <div className="message-donut-center">{totalMessages}</div>
            </div>

            <div className="message-list">
              {messageBreakdown.map((m) => (
                <div key={m.label} className="message-row">
                  <span>{m.label}</span>
                  <span>{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-label-small">Today&apos;s AI usage</div>
        </article>

        {/* Performance */}
        <article className="card">
          <h2 className="card-title">Performance Analytics</h2>

          <div className="performance-box">
            <div className="performance-hills" />
          </div>

          <ul className="performance-list">
            {performanceInsights.map((line, idx) => (
              <li key={idx}>
                <span className="performance-bullet" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="card-label-small">Last 7 days</div>
        </article>

        {/* AI Assistant card */}
        <AssistantCard />
      </section>
    </>
  );
}

// ===============================================
// ASSISTANT CARD ON OVERVIEW PAGE
// ===============================================

function AssistantCard() {
  return (
    <article className="card card-ai">
      <div className="card-ai-header">
        <div className="card-ai-icon">🤖</div>
        <div>
          <div className="card-ai-title">AI Assistant</div>
          <div className="card-ai-sub">How can I assist you today?</div>
        </div>
      </div>

      <div className="card-ai-body">
        <div>Try prompts like:</div>
        <ul>
          <li>"Help me plan my deep-work blocks for today."</li>
          <li>"Summarize what I&apos;ve learned this week in Python."</li>
          <li>
            "Generate a checklist for shipping a small coding project."
          </li>
        </ul>
      </div>
    </article>
  );
}

// ===============================================
// FULL AI ASSISTANT PAGE
// ===============================================

function AssistantPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Helper to send the message to backend
  async function sendMessage(e) {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setError("");
    setReply("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/assistant/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Failed to get reply");
      }

      const data = await response.json();
      setReply(data.reply);
    } catch (err) {
      console.error(err);
      setError("Something went wrong talking to your AI assistant.");
    } finally {
      setLoading(false);
    }
  }

  // Quick-prompt helper
  function usePrompt(text) {
    setMessage(text);
    setReply("");
    setError("");
  }

  return (
    <main style={{ padding: "24px 24px 40px" }}>
      {/* Cinematic assistant panel */}
      <div
        className="hero-panel"
        style={{
          maxWidth: "1120px",
          margin: "0 auto 24px",
          height: "auto",
          padding: "0",
        }}
      >
        <div className="hero-bg" />
        <div
          className="hero-content"
          style={{
            alignItems: "flex-start",
            textAlign: "left",
            padding: "26px 36px 28px",
          }}
        >
          <div className="hero-kicker">AI Assistant</div>
          <div className="hero-title" style={{ letterSpacing: "0.18em" }}>
            How can I help you today?
          </div>
          <p className="hero-subtitle" style={{ maxWidth: "520px" }}>
            Hi Irmita! I am your cinematic AI dashboard assistant. What would you
            like to focus on today?
          </p>

          {/* Quick prompt chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "16px",
            }}
          >
            <button
              type="button"
              onClick={() =>
                usePrompt("Help me plan my deep-work blocks for today.")
              }
              className="chip-button"
              style={chipStyle}
            >
              Help me plan my deep-work blocks for today.
            </button>
            <button
              type="button"
              onClick={() =>
                usePrompt("Summarize what I’ve learned this week in Python.")
              }
              className="chip-button"
              style={chipStyle}
            >
              Summarize what I&apos;ve learned this week in Python.
            </button>
            <button
              type="button"
              onClick={() =>
                usePrompt(
                  "Generate a checklist for shipping a small coding project."
                )
              }
              className="chip-button"
              style={chipStyle}
            >
              Generate a checklist for a small coding project.
            </button>
          </div>
        </div>
      </div>

      {/* Conversation card */}
      <div
        className="card"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          minHeight: "260px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h2 className="card-title">Ask anything about your focus, deep work or learning.</h2>

        <form onSubmit={sendMessage} style={{ display: "flex", gap: "10px" }}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your question or planning request here..."
            rows={3}
            style={{
              flex: 1,
              resize: "vertical",
              borderRadius: "14px",
              border: "1px solid rgba(55,65,81,0.8)",
              backgroundColor: "#020617",
              color: "#e5e7eb",
              padding: "10px 12px",
              fontFamily: "inherit",
              fontSize: "14px",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              alignSelf: "flex-end",
              borderRadius: "999px",
              border: "none",
              padding: "10px 22px",
              background:
                "linear-gradient(to right, #fbbf24, #f97316)",
              color: "#111827",
              fontWeight: 600,
              fontSize: "14px",
              cursor: loading ? "default" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </form>

        {error && (
          <div style={{ color: "#f87171", fontSize: "13px" }}>{error}</div>
        )}

        {reply && (
          <div
            style={{
              marginTop: "8px",
              padding: "12px 14px",
              borderRadius: "14px",
              background:
                "radial-gradient(circle at top, rgba(37,99,235,0.22), #020617)",
              border: "1px solid rgba(30,64,175,0.7)",
              fontSize: "14px",
              lineHeight: 1.5,
            }}
          >
            {reply}
          </div>
        )}
      </div>
    </main>
  );
}

// Small inline style used for quick-prompt chips
const chipStyle = {
  borderRadius: "999px",
  border: "1px solid rgba(148,163,184,0.6)",
  background: "rgba(15,23,42,0.9)",
  color: "#e5e7eb",
  fontSize: "11px",
  padding: "6px 10px",
  cursor: "pointer",
};

// ===============================================
// PLACEHOLDER PAGES (Weather, Crypto)
// ===============================================

function PlaceholderPage({ title }) {
  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ color: "#fff", marginBottom: "20px" }}>{title}</h2>
      <p style={{ color: "#ccc" }}>This tab will come to life later.</p>
    </div>
  );
}

// ===============================================
// FOOTER
// ===============================================

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>AI Assistant</span>
        <span>Built with FastAPI · React · TDD</span>
      </div>
    </footer>
  );
}

export default App;
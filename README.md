<h1>Personal AI Dashboard</h1>

<p>
A full-stack personal productivity dashboard built with <strong>FastAPI</strong> and <strong>React</strong>.  
Designed with a cinematic UI and structured using Clean Architecture and Test-Driven Development.  
The dashboard visualizes productivity, focus, learning and AI usage in a calm, futuristic interface.
</p>

---

<!-- BADGES -->
<p>
  <img src="https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-0.110+-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Testing-Pytest-0A9EDC?style=for-the-badge&logo=pytest" />
  <img src="https://img.shields.io/badge/Architecture-Clean-8A2BE2?style=for-the-badge" />
</p>

---

<h2><strong>Features</strong></h2>

<ul>
  <li><strong>React Frontend</strong> — cinematic custom UI, zero UI libraries, fully responsive</li>
  <li><strong>FastAPI Backend</strong> — typed endpoints, clean structure, Pydantic models</li>
  <li><strong>TDD</strong> — backend test suite powered by pytest (13 tests passing)</li>
  <li><strong>Dashboard Overview</strong> — productivity, messages, analytics, learning</li>
  <li><strong>AI Assistant</strong> — simple local rule-based assistant</li>
  <li><strong>Weather & Crypto Tabs</strong> — ready for API integration</li>
</ul>

---

<h2><strong>Tech Stack</strong></h2>

<ul>
  <li><strong>Frontend:</strong> React, Vite, Modern CSS, Component-based architecture</li>
  <li><strong>Backend:</strong> FastAPI, Python, Uvicorn</li>
  <li><strong>Testing:</strong> Pytest</li>
  <li><strong>Architecture:</strong> Clean Architecture + service layers</li>
</ul>

---

<h2><strong>Project Structure</strong></h2>

<pre>
personal-ai-dashboard/
│
├── backend/
│ ├── src/
│ │ ├── api/
│ │ ├── models/
│ │ ├── services/
│ │ └── main.py
│ ├── tests/
│ ├── requirements.txt
│ └── venv/ (ignored)
│
└── frontend/
    ├── public/
    ├── src/
    │ ├── components/
    │ ├── pages/
    │ ├── App.jsx
    │ └── main.jsx
    ├── index.html
    └── package.json
</pre>

---

<h2><strong>Installation</strong></h2>

<h3>Backend (FastAPI)</h3>

<pre>
cd backend
python3 -m venv venv
source venv/bin/activate # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn src.api.main:app --reload --port 8000
</pre>

<p>Backend available at:</p>

<ul>
  <li>http://127.0.0.1:8000</li>
  <li>http://127.0.0.1:8000/docs</li>
</ul>

<h3>Frontend (React + Vite)</h3>

<pre>
cd frontend
npm install
npm run dev
</pre>

<p>Frontend available at:</p>
<ul>
  <li>http://localhost:5173</li>
</ul>

---

<h2><strong>Running Tests</strong></h2>

<pre>
cd backend
pytest -q
</pre>

<p>
The backend test suite includes <strong>13 fully passing tests</strong> covering:
</p>

<ul>
  <li>Dashboard models</li>
  <li>Dashboard services</li>
  <li>API integration</li>
  <li>AI assistant endpoint</li>
</ul>

---

<h2><strong>API Overview</strong></h2>

<h3>GET /api/dashboard/overview</h3>
<p>Returns structured productivity, focus, energy, learning, and analytics data.</p>

<h3>POST /api/assistant/reply</h3>
<p>Local rule-based assistant returning a generated message.</p>

---

<h2><strong>Preview</strong></h2>

<p>
<img src="./preview/dashboard-preview.png" alt="Dashboard Preview" width="100%" />
</p>

---

<h2><strong>Roadmap</strong></h2>

<ul>
  <li>Real Weather API integration</li>
  <li>Real Crypto prices integration</li>
  <li>OpenAI-powered assistant</li>
  <li>User profiles & authentication</li>
  <li>Dark/Light mode</li>
  <li>Mobile layout improvements</li>
</ul>

---

<h2><strong>Author</strong></h2>

<p>
<strong>Irmita Dev — Python Developer</strong><br>
Building • Learning • Improving
</p>
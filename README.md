<h1 align="center">ＰＥＲＳＯＮＡＬ　ＡＩ　ＤＡＳＨＢＯＡＲＤ</h1>
</p>

<p>
A full-stack personal productivity dashboard built with <strong>FastAPI</strong> and <strong>React</strong>.  
Designed with a cinematic UI and structured using Clean Architecture and Test-Driven Development.  
The dashboard visualizes productivity, focus, learning and AI usage in a calm, futuristic interface.
</p>

---

<!-- BADGES -->
<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-0.110+-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Testing-Pytest-0A9EDC?style=for-the-badge&logo=pytest" />
  <img src="https://img.shields.io/badge/Architecture-Clean-8A2BE2?style=for-the-badge" />
</p>

---

<p align="center">
  <img src="Personal-ai-dashboard-frontend-ai-dashboard-dashboard-demo1.png" width="85%" />
</p>

---

<h2><strong>ＦＥＡＴＵＲＥＳ</strong></h2>

<ul>
  <li><strong>React Frontend</strong> — cinematic custom UI, zero UI libraries, fully responsive</li>
  <li><strong>FastAPI Backend</strong> — typed endpoints, clean structure, Pydantic models</li>
  <li><strong>TDD</strong> — backend test suite powered by pytest (13 tests passing)</li>
  <li><strong>Dashboard Overview</strong> — productivity, messages, analytics, learning</li>
  <li><strong>AI Assistant</strong> — simple local rule-based assistant</li>
  <li><strong>Weather & Crypto Tabs</strong> — ready for API integration</li>
</ul>

---

<h2><strong>ＴＥＣＨ　ＳＴＡＣＫ</strong></h2>

<ul>
  <li><strong>Frontend:</strong> React, Vite, Modern CSS, Component-based architecture</li>
  <li><strong>Backend:</strong> FastAPI, Python, Uvicorn</li>
  <li><strong>Testing:</strong> Pytest</li>
  <li><strong>Architecture:</strong> Clean Architecture + service layers</li>
</ul>

---

<h2><strong>ＰＲＯＪＥＣＴ　ＳＴＲＵＣＴＵＲＥ</strong></h2>

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

<h2><strong>ＩＮＳＴＡＬＬＡＴＩＯＮ</strong></h2>

<h3>ＢＡＣＫＥＮＤ　（ＦＡＳＴＡＰＩ）</h3>

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

<h3>ＦＲＯＮＴＥＮＤ　（ＲＥＡＣＴ　＋　ＶＩＴＥ）</h3>

<pre>
cd frontend
npm install
npm run dev
</pre>

<p>Frontend available at:</p>
<ul>
  <li>http://localhost:5179</li>
</ul>

---

<h2><strong>ＲＵＮＮＩＮＧ　ＴＥＳＴＳ</strong></h2>

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

<h2><strong>ＡＰＩ　ＯＶＥＲＶＩＥＷ</strong></h2>

<h3>GET /api/dashboard/overview</h3>
<p>Returns structured productivity, focus, energy, learning, and analytics data.</p>

<h3>POST /api/assistant/reply</h3>
<p>Local rule-based assistant returning a generated message.</p>

---

<h2><strong>ＰＲＥＶＩＥＷ</strong></h2>

<p>
Link: https://github.com/irmita-dev/personal-ai-dashboard/commit/9de59f1146c37d2ae47e0a24b86fb7b4c95ac23a 
</p>

---

<h2><strong>ＲＯＡＤＭＡＰ</strong></h2>

<ul>
  <li>Real Weather API integration</li>
  <li>Real Crypto prices integration</li>
  <li>OpenAI-powered assistant</li>
  <li>User profiles & authentication</li>
  <li>Dark/Light mode</li>
  <li>Mobile layout improvements</li>
</ul>

---

<h2><strong>ＡＵＴＨＯＲ</strong></h2>

<p>
<strong>𝐈𝐑𝐌𝐈𝐓𝐀 𝐃𝐄𝐕 — 𝐏𝐘𝐓𝐇𝐎𝐍 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑</strong><br>
𝐵𝑢𝑖𝑙𝑑𝑖𝑛𝑔 • 𝐿𝑒𝑎𝑟𝑛𝑖𝑛𝑔 • 𝐼𝑚𝑝𝑟𝑜𝑣𝑖𝑛𝑔
</p>

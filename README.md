
# 🚀 Me-API Playground

### *A Professional Full-Stack Portfolio Engine*

**Me-API Playground** is a high-performance MERN stack application designed to serve as a central hub for professional identity. It provides a structured API and a sleek interface to manage projects, technical skills, and career milestones in real-time.

---

## 🏗️ System Architecture

The application is built with a decoupled architecture for maximum scalability:

* **Frontend:** #️⃣ **React.js** (Functional Components & Hooks)
* **Backend:** 🟢 **Node.js & Express.js** (RESTful API Design)
* **Database:** 🍃 **MongoDB** (NoSQL for flexible schema management)
* **Deployment:** ☁️ **Vercel** (Frontend) & **Render** (Backend)

---

## 🛠️ Setup & Installation

### 1️⃣ Prerequisites

* **Node.js** (v14 or higher)
* **MongoDB Atlas** account or local instance

### 2️⃣ Backend Configuration

```bash
cd backend
npm install
# Create a .env file with: MONGO_URI and PORT=5000
node server.js

```

### 3️⃣ Frontend Configuration

```bash
cd frontend
npm install
npm start

```

---

## 📊 Data Schema & API Logic

The platform utilizes a centralized **Profile Collection** to ensure data integrity and fast retrieval:

---

### 🛠️ How to test manually

You can test these endpoints using a simple **cURL** command in browser:

```bash
# Check Profile Data
curl https://me-api-playground-jmou.onrender.com/api/profile

```





### **The Profile Model**

* 👤 **Identity:** `name`, `email`, `bio`, `github`, `linkedin`
* 🛠️ **Skills:** `[String]` (Categorized technical expertise)
* 📂 **Projects:** * `title`, `description`, `tech_stack`, `live_links`

> **API Feature:** The backend is optimized for **CRUD operations**, allowing for seamless updates to professional data without redeploying the frontend.

---

## 🔗 Quick Links

| Resource | Access Link |
| --- | --- |
| 🌐 **Live Demo** | [View Application](https://me-api-playground-self.vercel.app/) |
| ⚙️ **Backend API** | [API Endpoint](https://me-api-playground-jmou.onrender.com) |
| 📄 **Professional Resume** | [Download/View PDF](https://drive.google.com/file/d/1WuMTdeW3MFe5GI82d_x7aM-5gc_nsim3/view?usp=drivesdk) |

---

## 📸 Project Gallery

<div align="center">
  <img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/afbf5816-836e-4a9d-9050-a71fd90ddbd4" />

<img width="500" height="600" alt="image" src="https://github.com/user-attachments/assets/49adca76-25b4-48cd-97b7-78e2ecb1e737" />


---

### **Key Technical Highlights**

* **Responsive UI:** Fully adaptive design using modern CSS.
* **State Management:** Efficient data flow using `useState` and `useEffect` hooks.
* **Environment Security:** Sensitive credentials managed via `.env` for production safety.
ME-API-PLAYGROUND/
├── backend/                # Node.js & Express Server
│   ├── controllers/        # Business logic for API endpoints
│   ├── models/             # Mongoose schemas (Profile & Projects)
│   ├── routes/             # API route definitions
│   ├── .env                # Environment variables (Private)
│   ├── seed.js             # Initial data population script
│   ├── server.js           # Main entry point for the backend
│   └── package.json
├── frontend/               # React.js Application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── styles/         # CSS/SCSS modules
│   │   ├── App.js          # Main React component
│   │   └── index.js        # React DOM entry point
│   └── package.json
└── README.md               # Project documentation


---

## Key Features
Profile Management: Full CRUD operations for basic information and technical skills.

Project Portfolio: Manage project details, including titles, descriptions, and tech stacks.

Advanced Querying: Filter projects by specific skills and search through the portfolio using keywords.

Health Monitoring: Integrated GET /api/health endpoint for liveness checks.

## 📝 Remarks

### 1. Technical Trade-offs
* **Deployment Latency:** I chose **Render** for the backend and **Streamlit/Vercel** for the frontend to ensure a zero-cost hosting environment for this assessment. A known trade-off is the "cold start" delay on Render's free tier, where the API may take 30-50 seconds to spin up after inactivity.
* **Local vs. Cloud processing:** For the RAG pipeline (Track B), I utilized **FastEmbed** and **FlashRank** locally within the app instance to avoid extra API costs and reduce network latency during the embedding and reranking phases.

### 2. System Limits
* **Database Constraints:** The current Pinecone index is running on a **Serverless (Starter)** plan, which is ideal for this demo but has limited throughput compared to provisioned pods.
* **Context Window:** The LLM (Llama-3.1-8b) has a specific context window limit; therefore, I implemented a chunking strategy of 800-1200 tokens to ensure the most relevant information fits within the prompt without losing coherence.

### 3. Future Improvements (What I'd do next)
* **Authentication:** Implement **JWT-based secure routes** for the Me-API Playground to protect professional data from unauthorized modifications.
* **Evaluation Framework:** Integrate **RAGAS** or a similar framework to quantitatively measure the "Faithfulness" and "Answer Relevance" of the RAG pipeline.
* **Advanced Retrieval:** Add **Hybrid Search** (combining Keyword/BM25 with Vector search) to improve retrieval accuracy for specific technical terms.



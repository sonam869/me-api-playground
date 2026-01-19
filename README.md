
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

<img width="584" height="359" alt="image" src="https://github.com/user-attachments/assets/f0d584f0-8753-4a13-ac9f-207bea585127" />


---
✨ Key Features
Profile Management: Full CRUD operations for identity and technical skills.

Project Portfolio: Management of project titles, descriptions, and tech stacks.

Advanced Querying: Filter projects by specific skills or keywords via backend search logic.

Health Monitoring: Integrated GET /api/health endpoint for liveness checks.

Remarks
Trade-offs: Decided to use Vercel and Render for deployment to ensure a zero-cost, scalable environment for the assessment.

Design Choice: Implemented a modular backend structure to separate routes, controllers, and models for better maintainability.

What's Next: Integration of JWT authentication for secure profile updates and an automated PDF resume generator.


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
<img src="[https://github.com/user-attachments/assets/de884754-3068-4162-91c8-b5ead54f3d1c](https://github.com/user-attachments/assets/de884754-3068-4162-91c8-b5ead54f3d1c)" width="45%" alt="Dashboard" />
<img src="[https://github.com/user-attachments/assets/d96a0e4b-de37-4f92-8fb8-1d56434da4a6](https://github.com/user-attachments/assets/d96a0e4b-de37-4f92-8fb8-1d56434da4a6)" width="45%" alt="Projects View" />
</div>

---

### **Key Technical Highlights**

* **Responsive UI:** Fully adaptive design using modern CSS.
* **State Management:** Efficient data flow using `useState` and `useEffect` hooks.
* **Environment Security:** Sensitive credentials managed via `.env` for production safety.



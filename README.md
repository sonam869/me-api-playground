Me-API Playground 🚀
A full-stack MERN application built for the internship assessment. This platform serves as a personal "Me-API" to manage and display a professional profile, technical projects, and skills.



🏗️ System Architecture
The application follows a standard MERN stack architecture:

Frontend: React.js with functional components and Hooks.

Backend: Node.js & Express.js REST API.

Database: MongoDB (NoSQL) for flexible profile and project storage.

State Management: React useState and useEffect for real-time UI updates.


🛠️ Setup Instructions
1. Prerequisites
Node.js (v14+)

MongoDB Atlas account or local MongoDB instance


2. Backend Setup
Navigate to the backend folder: cd backend

Install dependencies: npm install

Create a .env file and add your MONGO_URI and PORT=5000.

Start the server: node server.js


3. Frontend Setup
Navigate to the frontend folder: cd frontend

Install dependencies: npm install

Start the application: npm start


📡 Sample API Requests (Requirements 1.b & 1.c)
<img width="683" height="221" alt="Screenshot 2026-01-18 154507" src="https://github.com/user-attachments/assets/8fe86c42-144d-46d1-89d0-03506c9a8ee2" />



📊 Data Schema (Requirement 2.b)
The application uses a single Profile collection in MongoDB:

Basic Info: name, email, bio, github, linkedin.

Skills: An array of strings representing technical expertise.

Projects: An array of objects, each containing:

title (String)

description (String)

tech (Array of Strings)

links (String)



🔗 
Links (Requirement 4.d)

Live Demo: [https://me-api-playground-self.vercel.app/]

Backend API: [https://me-api-playground-jmou.onrender.com]

Resume: [https://drive.google.com/file/d/1WuMTdeW3MFe5GI82d_x7aM-5gc_nsim3/view?usp=drivesdk]

screenshort of project page 
<img width="720" height="600" alt="image" src="https://github.com/user-attachments/assets/de884754-3068-4162-91c8-b5ead54f3d1c" />
<img width="720" height="600" alt="image" src="https://github.com/user-attachments/assets/d96a0e4b-de37-4f92-8fb8-1d56434da4a6" />




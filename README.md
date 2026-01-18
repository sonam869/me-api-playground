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
Navigate to the backend folder: cd back1

Install dependencies: npm install

Create a .env file and add your MONGO_URI and PORT=5000.

Start the server: npm start
3. Frontend Setup
Navigate to the frontend folder: cd frontend

Install dependencies: npm install

Start the application: npm start

📡 Sample API Requests (Requirements 1.b & 1.c)
You can test these endpoints using curl or Postman:
Feature,                       Endpoint,                                    Description
Liveness,                  GET /api/health,                      Checks if the server is running.
Top Skills,                GET /api/skills/top,                  Returns the first 5 skills from your profile.
Skill Filter,              GET /api/projects?skill=Python,       Returns only projects containing the specified skill.
Search ,                   GET /api/search?q=Feedback,           Searches through project titles and descriptions.

📊 Data Schema (Requirement 2.b)
The application uses a single Profile collection in MongoDB:

Basic Info: name, email, bio, github, linkedin.

Skills: An array of strings representing technical expertise.

Projects: An array of objects, each containing:

title (String)

description (String)

tech (Array of Strings)

links (String)

🔗 Links (Requirement 4.d)
Live Demo: [Insert your Vercel/Netlify Link here]

Backend API: [Insert your Render/Railway Link here]

Resume: [Insert a link to your Google Drive/Dropbox resume here]

⚠️ Known Limitations


Skill filtering is case-insensitive but requires exact string matching.

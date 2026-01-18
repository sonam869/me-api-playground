require('dotenv').config();
const mongoose = require('mongoose');
const Profile = require('./models/Profile');

const myData = {
  name: "Sonam Warkade", // Your actual name
  email: "sonuwarkade28@gmail.com", 
  education: "B.Tech in Computer Science, NIT Delhi (5th Semester)", 
  skills: ["Python", "Java", "Node.js", "Express.js", "MongoDB", "Data Analytics", "Machine Learning"], 
  projects: [
    {
      title: "Mess Feedback System",
      description: "A centralized platform designed to collect and analyze student feedback on campus mess facilities to improve food quality and service.",
      links: "https://github.com/sonam869", // actual GitHub base
      tech: ["Java", "MySQL", "Android", "Data Analytics"]
    },
    {
      title: "Energy Power Consumption Forecasting",
      description: "Time-series forecasting model using XGBoost and LSTM to predict energy usage patterns with high accuracy.",
      links: "https://github.com/sonam869", //actual GitHub
      tech: ["Python", "Machine Learning", "XGBoost", "LSTM"]
    }
  ],
  
  work: [
    {
      company: "Your College/Lab",
      role: "Student Researcher",
      duration: "Ongoing",
      description: "Working on various Computer Science and Machine Learning experiments."
    }
  ],
  links: {
    github: "https://github.com/sonam869", 
    linkedin: "https://linkedin.com/in/sonam-warkade-44a890286", 
    portfolio: "https://your-portfolio.com" 
  }
};

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB Atlas for seeding...");
    await Profile.deleteMany({}); 
    await Profile.create(myData);
    console.log("Seed data (including Work & Projects) successfully pushed!");
    process.exit();
  })
  .catch(err => {
    console.error("Seeding error:", err);
    process.exit(1);
  });
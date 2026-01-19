require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes');
const Profile = require('./models/Profile');
const { myData } = require('./seed');

const app = express();
app.use(cors());
app.use(express.json());

// Seeding logic updated to not block startup
const autoSeed = async () => {
  try {
    const count = await Profile.countDocuments();
    if (count === 0) {
      console.log(" No profile found. Seeding initial data...");
      await Profile.create(myData);
      console.log(" Seed data inserted successfully!");
    } else {
      console.log(" Profile already exists in database.");
    }
  } catch (error) {
    console.error(" Auto-seeding error:", error);
  }
};

app.use('/api', profileRoutes);

// Ensure PORT is uppercase to match Vercel environment standards
const PORT = process.env.PORT || 5000;

// 1. Move app.listen outside of the DB connection block.
// This ensures Vercel detects your server is "ready" immediately.
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));

// 2. Handle DB connection and seeding in the background
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" MongoDB Connected");
    autoSeed(); // Run seeding check in background without 'await'
  })
  .catch(err => console.error(" DB connection error:", err));
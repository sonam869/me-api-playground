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

// Improved Seeding logic
const autoSeed = async () => {
  try {
    const count = await Profile.countDocuments();
    if (count === 0) {
      console.log("No profile found. Seeding initial data...");
      await Profile.create(myData);
      console.log("Seed data inserted successfully!");
    } else {
      console.log("Profile already exists in database.");
    }
  } catch (error) {
    console.error("Auto-seeding error:", error);
  }
};

app.use('/api', profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Corrected DB connection with awaited seeding
mongoose.connect(process.env.MONGO_URI)
  .then(async () => { // Added async here
    console.log("MongoDB Connected");
    await autoSeed(); // Added await here to ensure data is ready
  })
  .catch(err => {
    console.error("DB connection error. Please check your MONGO_URI in .env");
    console.error(err);
  });
  module.exports = app;
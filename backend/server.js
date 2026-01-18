require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes');
const Profile = require('./models/Profile');
const { myData } = require('./seed'); // Import the data from your seed file

const app = express();
app.use(cors());
app.use(express.json());

// Logic to check if data exists and seed it if missing
const autoSeed = async () => {
  try {
    const count = await Profile.countDocuments();
    if (count === 0) {
      console.log("🌱 No profile found. Seeding initial data...");
      await Profile.create(myData);
      console.log("✅ Seed data inserted successfully!");
    } else {
      console.log("ℹ️ Profile already exists in database.");
    }
  } catch (error) {
    console.error("❌ Auto-seeding error:", error);
  }
};

app.use('/api', profileRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("📡 MongoDB Connected");
    
    // This line ensures the data is there for your front page
    await autoSeed();

    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("❌ DB connection error:", err));
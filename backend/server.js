require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes'); // Import routes

const app = express();
app.use(cors());
app.use(express.json());

// Use Routes
app.use('/api', profileRoutes); // All endpoints will start with /api (e.g., /api/health)

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" MongoDB Connected");
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  })
  .catch(err => console.error(" DB connection error:", err));
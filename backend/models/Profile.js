const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  education: String,
  skills: [String],
  projects: [{
    title: String,
    description: String,
    tech: [String] ,
    links: String
  }],
  // Essential for Track A Requirement 1a
  work: [{ 
    company: String, 
    role: String, 
    duration: String 
  }],
  links: { 
    github: String, 
    linkedin: String, 
    portfolio: String // Required field
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  education: String,
  skills: { type: [String], default: [] },
  projects: {
    type: [{
      title: String,
      description: String,
      tech: [String],
      links: String
    }],
    default: []
  },
  work: [{ 
    company: String, 
    role: String, 
    duration: String, 
    description: String
  }],
  links: { 
    github: String, 
    linkedin: String, 
    portfolio: String 
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);
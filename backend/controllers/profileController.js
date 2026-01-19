const Profile = require('../models/Profile');

// 1.c Liveness Check - Mandatory for Requirement 1.c
exports.healthCheck = (req, res) => {
  res.status(200).json({ status: "ok" });
};

// 1.a GET /profile - Fetch your basic info, projects, and skills
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: "Server error during fetch" });
  }
};

// 1.a POST /profile - Create or Update your profile details
exports.updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (profile) {
      Object.assign(profile, req.body);
      await profile.save();
    } else {
      profile = new Profile(req.body);
      await profile.save();
    }
    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ error: "Update failed", details: err.message });
  }
};

// 1.b GET /projects?skill=... - Filter projects by a specific skill
exports.getProjects = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.json([]);

    let projects = profile.projects;
    const requestedSkill = req.query.skill;

    if (requestedSkill) {
      // Logic: Checks the tech array for the specific skill
      projects = projects.filter(project => 
        project.tech?.some(techName => 
          techName.toLowerCase() === requestedSkill.toLowerCase()
        )
      );
    }
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Could not retrieve projects" });
  }
};

// 1.b GET /search?q=... - Search through project titles and descriptions
exports.searchProjects = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    if (!searchTerm) return res.json([]);

    const profile = await Profile.findOne();
    if (!profile || !profile.projects) return res.json([]);

    const keyword = searchTerm.toLowerCase();
    const matchedProjects = profile.projects.filter(project => {
      // Provide fallback empty strings to ensure .toLowerCase() doesn't crash
      const title = project.title || "";
      const description = project.description || "";
      
      const titleMatches = title.toLowerCase().includes(keyword);
      const descriptionMatches = description.toLowerCase().includes(keyword);
      
      return titleMatches || descriptionMatches;
    });

    res.json(matchedProjects);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
};


// 1.b GET /skills/top - Returns the list of top featured skills
exports.getTopSkills = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile?.skills) return res.json([]);

    // Requirement: return the skills displayed in your "Top Skills" section
    const topFive = profile.skills.slice(0, 5);
    res.json(topFive);
  } catch (err) {
    res.status(500).json({ error: "Failed to load top skills" });
  }
};


// 1.a Update Project (CRUD Requirement)
exports.updateProject = async (req, res) => {
    try {
      const profile = await Profile.findOne();
      if (!profile) return res.status(404).json({ error: "Profile not found" });
  
      const { projectId } = req.params;
      
      // Use the Mongoose .id() helper to find the subdocument directly
      const project = profile.projects.id(projectId);
  
      if (!project) return res.status(404).json({ error: "Project not found" });
  
      // Update the fields of the found project with req.body data
      Object.assign(project, req.body);
      
      await profile.save();
      res.json(profile.projects);
    } catch (err) {
      res.status(400).json({ error: "Update failed", details: err.message });
    }
};

// 1.a POST /projects - Add a new project to your profile
exports.addProject = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    // Pushes the new project object into the projects array
    profile.projects.push(req.body); 
    await profile.save();
    
    // Return the newly added project
    res.status(201).json(profile.projects[profile.projects.length - 1]);
  } catch (err) {
    res.status(400).json({ error: "Failed to add project", details: err.message });
  }
};
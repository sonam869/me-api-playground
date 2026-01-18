import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './components/ProfileCard';
import ProfileForm from './components/ProfileForm';
import ProjectList from './components/ProjectList';
import SearchBar from './components/SearchBar';
import ProjectForm from './components/ProjectForm';
import './styles/App.css';

const API_BASE = "https://me-api-playground-jmou.onrender.com";

function App() {
  // 1. All States
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [topSkills, setTopSkills] = useState([]);
  const [query, setQuery] = useState("");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(true);

  

  // 2. Initial Fetch (Read Requirement)
  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const [resP, resProj, resSkills] = await Promise.all([
        axios.get(`${API_BASE}/profile`),
        axios.get(`${API_BASE}/projects`),
        axios.get(`${API_BASE}/skills/top`)
      ]);
      setProfile(resP.data);
      setProjects(resProj.data);
      setTopSkills(resSkills.data);
    } catch (err) {
      console.log("Database empty or server offline.");
    } finally {
      setLoading(false);
    }
  };

  // 3. Profile Create/Update
  const handleProfileUpdate = async (data) => {
    try {
      const res = await axios.post(`${API_BASE}/profile`, data);
      setProfile(res.data);
      setIsEditingProfile(false);
    } catch (err) {
      alert("Error saving profile.");
    }
  };

  // 4. Project Create
  const handleAddProject = async (data) => {
    try {
      const res = await axios.post(`${API_BASE}/projects`, data);
      setProjects(res.data);
      setIsAddingProject(false);
    } catch (err) {
      alert("Could not create project.");
    }
  };

  // 5. Project Update - Now uses Correct ID URL
  const handleUpdateProject = async (data) => {
    try {
      const res = await axios.put(`${API_BASE}/projects/${editingProject._id}`, data);
      setProjects(res.data);
      setEditingProject(null);
    } catch (err) {
      alert("Could not update project.");
    }
  };

  // 6. Keyword Search
  const handleSearch = async () => {
  if (!query) return;

  try {
    // 1. Requirement 1.b: Check if the search term is a skill
    const isSkill = topSkills.some(s => s.toLowerCase() === query.toLowerCase());

    if (isSkill) {
      // Use the specific skill filter endpoint
      const res = await axios.get(`${API_BASE}/projects?skill=${query}`);
      setProjects(res.data);
    } else {
      // 2. Requirement 1.b: Otherwise, search titles and descriptions
      const res = await axios.get(`${API_BASE}/search?q=${query}`);
      setProjects(res.data);
    }
  } catch (err) {
    console.error("Search execution failed", err);
  }
};
  // 7. Skill Filter - 
  const handleSkillFilter = async (skill) => {
    try {
      const res = await axios.get(`${API_BASE}/projects?skill=${skill}`);
      setProjects(res.data);
    } catch (err) {
      console.error("Filter failed");
    }
  };

  if (loading) return <div className="loader">Connecting to API...</div>;

  return (
    <div className="app-container">
      <header className="hero">
        {!profile && !isEditingProfile ? (
          <div className="glass-form" style={{ textAlign: 'center' }}>
            <h2>Welcome to Me-API!</h2>
            <button onClick={() => setIsEditingProfile(true)} className="save-btn">Create Profile</button>
          </div>
        ) : isEditingProfile ? (
          <ProfileForm profile={profile} onSave={handleProfileUpdate} onCancel={() => setIsEditingProfile(false)} />
        ) : (
          <ProfileCard profile={profile} onEdit={() => setIsEditingProfile(true)} />
        )}
      </header>

      <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />

      {/* Interactive Top Skills */}
      <div className="top-skills-container">
        <h3>Top Skills</h3>
        <div className="skills-grid">
          {topSkills.map((skill, index) => (
            <span 
              key={index} 
              className="tech-badge" 
              onClick={() => handleSkillFilter(skill)}
              style={{ cursor: 'pointer' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <main className="main-content">
        <div className="section-header">
          <h2 onClick={fetchInitialData} style={{ cursor: 'pointer' }}>My Projects</h2>
          <button className="add-btn" onClick={() => setIsAddingProject(true)}>+ Add Project</button>
        </div>

        {isAddingProject && (
          <ProjectForm onSave={handleAddProject} onCancel={() => setIsAddingProject(false)} />
        )}

        {editingProject && (
          <ProjectForm project={editingProject} onSave={handleUpdateProject} onCancel={() => setEditingProject(null)} />
        )}

        <ProjectList 
          projects={projects} 
          onEdit={(proj) => setEditingProject(proj)} 
        />
      </main>
    </div>
  );
}

export default App;
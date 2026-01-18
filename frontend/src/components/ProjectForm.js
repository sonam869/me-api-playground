import React, { useState } from 'react';
import { Save, X } from 'lucide-react';

const ProjectForm = ({ project, onSave, onCancel }) => {
  // Logic: Use existing project data if editing, or empty strings for a new project
  const [formData, setFormData] = useState(project || {
    title: '',
    description: '',
    tech: '',
    links: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert comma-separated string back into an array for the database
    const dataToSave = {
      ...formData,
      tech: typeof formData.tech === 'string' 
        ? formData.tech.split(',').map(s => s.trim()).filter(s => s !== "") 
        : formData.tech
    };
    onSave(dataToSave);
  };

  return (
    <div className="glass-form-container" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', 
      alignItems: 'center', zIndex: 1000 
    }}>
      <form className="glass-form" onSubmit={handleSubmit}>
        <h2>{project ? "Edit Project" : "Add New Project"}</h2>
        
        <input 
          value={formData.title} 
          onChange={(e) => setFormData({...formData, title: e.target.value})} 
          placeholder="Project Title" 
          required 
        />
        
        <textarea 
          value={formData.description} 
          onChange={(e) => setFormData({...formData, description: e.target.value})} 
          placeholder="Project Description"
          rows="4"
        />

        <input 
          value={Array.isArray(formData.tech) ? formData.tech.join(', ') : formData.tech} 
          onChange={(e) => setFormData({...formData, tech: e.target.value})} 
          placeholder="Tech Stack (e.g. React, Node.js, MongoDB)" 
        />

        <input 
          value={formData.links} 
          onChange={(e) => setFormData({...formData, links: e.target.value})} 
          placeholder="Project Link (GitHub/Live URL)" 
        />

        <div className="form-buttons">
          <button type="submit" className="save-btn">
            <Save size={16}/> {project ? "Update Project" : "Create Project"}
          </button>
          <button type="button" onClick={onCancel} className="cancel-btn">
            <X size={16}/> Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
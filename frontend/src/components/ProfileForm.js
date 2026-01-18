import React, { useState } from 'react';
import { Save, X } from 'lucide-react';

const ProfileForm = ({ profile, onSave, onCancel }) => {
  // Logic: Initialize with existing profile or empty strings for 'Create'
  const [formData, setFormData] = useState(profile || {
    name: '', 
    email: '', 
    education: '', 
    skills: '' // We will handle this as a string and convert to array on save
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Requirement 1.a: skills must be an array
    const dataToSave = {
      ...formData,
      skills: typeof formData.skills === 'string' 
        ? formData.skills.split(',').map(s => s.trim()).filter(s => s !== "") 
        : formData.skills
    };
    onSave(dataToSave);
  };

  return (
    <form className="glass-form" onSubmit={handleSubmit}>
      {/* Dynamic header for Create/Update */}
      <h2>{profile ? "Edit Profile" : "Create Profile"}</h2>
      
      <input 
        value={formData.name} 
        onChange={(e) => setFormData({...formData, name: e.target.value})} 
        placeholder="Full Name" 
        required 
      />

      {/* Requirement 1.a: Basic Info (Email) */}
      <input 
        type="email"
        value={formData.email} 
        onChange={(e) => setFormData({...formData, email: e.target.value})} 
        placeholder="Email Address" 
        required 
      />

      <input 
        value={formData.education} 
        onChange={(e) => setFormData({...formData, education: e.target.value})} 
        placeholder="Education (e.g. NIT Delhi)" 
      />

      {/* Requirement 1.a: skills[] */}
      <input 
        value={Array.isArray(formData.skills) ? formData.skills.join(', ') : formData.skills} 
        onChange={(e) => setFormData({...formData, skills: e.target.value})} 
        placeholder="Skills (comma separated: Java, Python, React)" 
      />

      <div className="form-buttons">
        <button type="submit" className="save-btn">
          <Save size={16}/> {profile ? "Save Changes" : "Create Profile"}
        </button>
        <button type="button" onClick={onCancel} className="cancel-btn">
          <X size={16}/> Cancel
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
import React from 'react';
import { Github, Linkedin, ExternalLink, GraduationCap, Edit3, Mail } from 'lucide-react';
import '../styles/Profile.css';

const ProfileCard = ({ profile, onEdit }) => {
  return (
    <div className="profile-card">
      {/* Avatar using the first letter of the name */}
      <div className="avatar">{profile.name ? profile.name.charAt(0) : 'U'}</div>
      
      {/* Name and Edit Icon (Requirement: Update Profile) */}
      <h1>
        {profile.name} 
        <Edit3 className="edit-icon" onClick={onEdit} size={20} style={{ cursor: 'pointer', marginLeft: '10px' }} />
      </h1>
      
      {/* Education (Requirement: Basic Info) */}
      <p className="education"><GraduationCap size={18} /> {profile.education}</p>
      
      {/* Email (Requirement: Basic Info) */}
      {profile.email && (
        <p className="email" style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>
          <Mail size={16} /> {profile.email}
        </p>
      )}

      {/* Skills (Requirement: skills[]) */}
      <div className="profile-skills" style={{ marginTop: '15px' }}>
        {profile.skills?.slice(0, 5).map((skill, index) => (
          <span key={index} className="tech-badge" style={{ fontSize: '0.75rem', margin: '2px' }}>
            {skill}
          </span>
        ))}
      </div>
      
      {/* Social Links (Requirement: links) */}
      <div className="social-links">
        <a href={profile.links?.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
        <a href={profile.links?.linkedin} target="_blank" rel="noreferrer"><Linkedin size={20} color="#0077b5" /></a>
        <a href={profile.links?.portfolio} target="_blank" rel="noreferrer"><ExternalLink size={20} color="#e67e22" /></a>
      </div>
    </div>
  );
};

export default ProfileCard;
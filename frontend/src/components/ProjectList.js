import React from 'react';
import { Edit3, ExternalLink } from 'lucide-react';
import '../styles/Projects.css';

const ProjectList = ({ projects, onEdit }) => {
  return (
    <div className="project-grid">
      {projects.length === 0 ? (
        <p>No projects found. Try a different search or add a new one!</p>
      ) : (
        projects.map((proj) => (
          <div key={proj._id} className="project-card">
            <div className="project-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 className="projTitle">{proj.title}</h3>
              {/* REQUIREMENT 1.a: Edit button to trigger Update Project logic */}
              <button 
                className="edit-project-btn" 
                onClick={() => onEdit(proj)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#667eea' }}
                title="Edit Project"
              >
                <Edit3 size={18} />
              </button>
            </div>

            <p className="projDesc">{proj.description}</p>

            {/* REQUIREMENT 1.a: Displaying tech stack (skills[]) */}
            <div className="tech-stack" style={{ marginTop: '10px' }}>
              {proj.tech?.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>

            {/* REQUIREMENT 1.a: Links (GitHub/Live) */}
            {proj.links && (
              <div className="project-links" style={{ marginTop: '15px' }}>
                <a href={proj.links} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', color: '#764ba2', textDecoration: 'none' }}>
                  <ExternalLink size={14} /> View Project
                </a>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectList;
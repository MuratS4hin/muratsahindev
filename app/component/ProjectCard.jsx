import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css'; // import the stylesheet

const ProjectCard = ({ title, description, imageUrl, detailsLink }) => {
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        data-alt={title}
      />
      <div className="project-content">
        <p className="project-title">{title}</p>
        <p className="project-description">{description}</p>
        <Link to={detailsLink} className="project-link">
          Detayları Gör
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

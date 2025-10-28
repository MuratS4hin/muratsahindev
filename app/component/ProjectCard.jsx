import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imageUrl, detailsLink }) => (
  <div className="project-card">
    <div
      className="project-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label={title}
    />
    <div className="content">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={detailsLink}>See Details</Link>
    </div>
  </div>
);

export default ProjectCard;

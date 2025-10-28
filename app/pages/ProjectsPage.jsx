import React from 'react';
import Header from '../component/Header.jsx'; 
import Footer from '../component/Footer.jsx'; 
import ProjectCard from '../component/ProjectCard.jsx';
import projects from '../constants/projects.jsx';
import './ProjectsPage.css';

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <Header />

            <main className="projects-main">
                <div className="projects-header">
                    <h1>Projelerim</h1>
                    <p>Tasarım ve geliştirme becerilerimi sergileyen çalışmalarımın bir koleksiyonu.</p>
                </div>

                <div className="projects-filters">
                    <button className="filter-btn active">Tümü</button>
                    <button className="filter-btn">Web Uygulamaları</button>
                    <button className="filter-btn">Mobil Uygulamalar</button>
                    <button className="filter-btn">Tasarım Projeleri</button>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            detailsLink={project.detailsLink}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsPage;

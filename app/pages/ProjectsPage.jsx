import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header.jsx'; 
import Footer from '../component/Footer.jsx'; 
import ProjectCard from '../component/ProjectCard.jsx';
import projects from '../constants/projects.jsx';

const ProjectsPage = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
                        
                        <Header /> 
                        
                        <main className="flex-grow p-4 md:p-6 lg:p-8">
                            <div className="flex flex-wrap justify-between gap-4 mb-8">
                                <div className="flex min-w-72 flex-col gap-2">
                                    <p className="text-primary dark:text-secondary text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">Projelerim</p>
                                    <p className="text-text-light dark:text-gray-400 text-base lg:text-lg font-normal leading-normal">Tasarım ve geliştirme becerilerimi sergileyen çalışmalarımın bir koleksiyonu.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 p-3 flex-wrap mb-8">
                                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/10 dark:bg-card-dark px-4 text-primary dark:text-secondary text-sm font-medium leading-normal ring-2 ring-primary dark:ring-secondary">Tümü</button>
                                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark px-4 text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:bg-primary/10 dark:hover:bg-primary/30">Web Uygulamaları</button>
                                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark px-4 text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:bg-primary/10 dark:hover:bg-primary/30">Mobil Uygulamalar</button>
                                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark px-4 text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:bg-primary/10 dark:hover:bg-primary/30">Tasarım Projeleri</button>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
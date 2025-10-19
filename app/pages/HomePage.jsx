import React from 'react';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">

                        <Header />

                        <main className="flex-grow">
                            <div className="flex min-h-[calc(100vh-200px)] flex-col gap-6 items-center justify-center text-center p-4">
                                <div className="flex flex-col gap-4">
                                    <h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                                        Murat Şahin | Full-Stack Developer
                                    </h1>
                                    <h2 className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl font-normal leading-normal max-w-2xl mx-auto">
                                        I develop modern and interactive web applications with a focus on user experience. Check out the solutions I've created.
                                    </h2>
                                </div>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6">
                                    <Link
                                        to="/projects"
                                        className="flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                                    >
                                        <span className="truncate">My Projects</span>
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border border-primary text-primary bg-transparent hover:bg-primary/10 dark:text-primary dark:border-primary dark:hover:bg-primary/20 transition-colors text-base font-bold leading-normal tracking-[0.015em]"
                                    >
                                        <span className="truncate">More About Me</span>
                                    </Link>
                                </div>
                            </div>
                        </main>

                        <Footer />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
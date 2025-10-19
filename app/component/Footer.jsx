import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="flex flex-col gap-6 px-5 py-10 text-center border-t border-solid border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-center gap-6">
                {/* These should be React Router <Link> components in a real application */}
                <a className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal" href="/">Homepage</a>
                <a className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal" href="/projects">Portfolio</a>
                <a className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal" href="/about">About Me</a>
            </div>
            {/* <div className="flex flex-wrap justify-center gap-6">
                <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-2xl">alternate_email</span>
                </a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-2xl">code</span>
                </a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-2xl">palette</span>
                </a>
            </div> */}
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">© 2025 Murat Şahin. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
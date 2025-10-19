import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-10 py-3">
            <div className="flex items-center gap-4 text-gray-800 dark:text-white">
                <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                </div>
                <Link to="/" className="text-lg font-bold leading-tight tracking-[-0.015em] hover:text-primary transition-colors cursor-pointer">
                    Murat Şahin
                </Link>
            </div>
            <div className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                    <a className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal" href="/projects">Portfolio</a>
                    <a className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal" href="/about">About Me</a>
                    <a className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal" href="/contact">Contact</a>
                </div>
            </div>
            <div className="md:hidden">
                <button className="text-gray-800 dark:text-white">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
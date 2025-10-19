import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, imageUrl, detailsLink }) => {
    return (
    <div className="project-card flex flex-col gap-4 bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-md transition-transform duration-300">
        <div 
            className="w-full bg-center bg-no-repeat aspect-video bg-cover" 
            data-alt={title} 
            style={{ backgroundImage: `url("${imageUrl}")` }}
        />
        <div className="p-5 flex flex-col flex-grow">
            <p className="text-text-light dark:text-text-dark text-xl font-bold leading-normal">{title}</p>
            <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal mt-2 mb-4 flex-grow">{description}</p>
            <Link 
                to={detailsLink} 
                className="details-link mt-auto self-start text-primary dark:text-secondary text-sm font-semibold leading-normal py-2 px-4 rounded-lg border border-primary dark:border-secondary hover:text-white dark:hover:text-white transition-colors duration-300"
            >
                Detayları Gör
            </Link>
        </div>
    </div>
    );
};

export default ProjectCard;
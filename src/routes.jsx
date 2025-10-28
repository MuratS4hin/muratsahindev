import HomePage from '../app/pages/HomePage.jsx';
import AboutMePage from '../app/pages/AboutMePage.jsx';
import ProjectsPage from '../app/pages/ProjectsPage.jsx';
import ContactPage from '../app/pages/ContactPage.jsx';

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutMePage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/contact", element: <ContactPage /> },
];

export default routes;

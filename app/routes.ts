import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    index("pages/HomePage.jsx"),
    { 
        path: "about", 
        file: "pages/AboutMePage.jsx" 
    },
    { 
        path: "projects", 
        file: "pages/ProjectsPage.jsx" 
    },
    {
        path: "contact",
        file: "pages/ContactPage.jsx"
    }
    
] satisfies RouteConfig;
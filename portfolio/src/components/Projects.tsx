// First, define a TypeScript interface for a Project
// This helps us know exactly what properties each project should have
interface Project {
  name: string;           // Project title
  description: string;    // Short description of the project
  technologies: string[]; // List of technologies used
}

// Create an array of your projects
// You can add as many projects as you like here
const projects: Project[] = [
  {
    name: "Digs Space Rating System | 2023",
    description:
      "As a group of 5, we developed a user-friendly platform enabling students to submit and view ratings of off-campus accommodation. Implemented structured data handling to improve accessibility and clarity of housing information..",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    name: "Residence Maintenance System | 2024",
    description:
      "Designed and led the development of a web-based maintenance management system for university residences. Implemented database-driven fault tracking and role-based dashboards to improve issue resolution efficiency.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
   {
    name: "Residence Maintenance System | 2026",
    description:
      "Coming soon",
    technologies: ["Typescript", "React", "JavaScript", "PHP", "MySQL"],
  },
];

const Projects = () => {
  return (
    // Section for the Projects component
    <section id="projects">
      <h1>Projects</h1>

      {/* Map through the projects array and display each project */}
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            {/* Project title */}
            <h3>{project.name}</h3>

            {/* Project description */}
            <p>{project.description}</p>

            {/* Technologies used */}
            <p>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export so App.tsx can use it
export default Projects;

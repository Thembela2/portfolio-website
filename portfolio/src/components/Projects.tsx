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
    name: "School Website",
    description:
      "A responsive website for Lungisa High School showcasing staff, departments, and news.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    name: "African Nations League Simulator",
    description:
      "A tournament simulator web app for African football federations, with match simulation and email notifications.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Firebase"],
  },
];

const Projects = () => {
  return (
    // Section for the Projects component
    <section id="projects">
      <h2>Projects</h2>

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

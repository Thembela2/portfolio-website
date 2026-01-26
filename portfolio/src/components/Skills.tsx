// Skills component: displays a list of your technical skills
const Skills = () => {
  // Define your skills as a TypeScript array of strings
  const skills: string[] = [
    "HTML",          // Markup language
    "CSS",           // Styling
    "JavaScript",    // Frontend scripting
    "TypeScript",    // Typed superset of JavaScript
    "React",         // Frontend library
    "PHP",           // Backend language
    "MySQL",         // Database
    "Firebase",      // Backend as a service
    "Git & GitHub"   // Version control
  ];

  // JSX: how this component will render in the browser
  return (
    <section id="skills">
      {/* Section heading */}
      <h2>Skills</h2>

      {/* List of skills */}
      <ul>
        {skills.map((skill) => (
          // Each skill gets a <li> element
          // key={skill} helps React track elements efficiently
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

// Export the component so we can import it in App.tsx
export default Skills;

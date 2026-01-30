// Skills component: displays your skills grouped by category
const Skills = () => {
  // Define skills by category using a TypeScript object
  const skills = {
    "Frontend Development": [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Responsive Web Design",
      "Bootstrap",
      "UI Design",
      "Interactive Web Pages"
    ],
    "Backend Development": [
      "Node.js",
      "PHP",
      "RESTful APIs",
      "API Development",
      "Express.js"
    ],
    "Databases & Data": [
      "MySQL",
      "MongoDB",
      "Firebase",
      "Relational Databases",
      "NoSQL Databases",
      "Database Schemas"
    ],
    "Web Application Development": [
      "Web Application Development",
      "Application Deployment",
      "Web Hosting"
    ],
    "Testing & Quality Assurance": [
      "Debugging",
      "Software Testing",
      "Web Application Testing",
      "Performance Testing"
    ],
    "Version Control & Collaboration": [
      "Git",
      "GitHub",
      "Version Control"
    ],
    "Professional Skills": [
      "Problem Solving",
      "Analytical Thinking",
      "Critical Thinking",
      "Requirement Analysis",
      "Attention to Detail",
      "Research",
      "Written Communication"
    ]
  };

  return (
    <section id="skills">
      {/* Section heading */}
      <h1>Skills</h1>

      {/* Loop through each skill category */}
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="skill-category">
          {/* Category title */}
          <h3>{category}</h3>

          {/* Skills under this category */}
          <ul>
            {skillList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;

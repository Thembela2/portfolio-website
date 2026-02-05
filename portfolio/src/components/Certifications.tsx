// Define a TypeScript interface for a Certification
interface Certification {
  title: string;       // Name of the certification
  issuer: string;      // Organization that issued it
  year: string;        // Year obtained
  link?: string;       // Optional link to the certificate
}

// Array of your certifications
const certifications: Certification[] = [
  {
    title: "Front-End Web Development",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "https://www.udemy.com/certificate/EXAMPLE1"
  },
  {
    title: "Back-End Development",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "https://www.udemy.com/certificate/EXAMPLE1"
  },
  {
    title: "Responsive Web Page Development",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "https://www.udemy.com/certificate/EXAMPLE1"
  },
  {
    title: "Interactive Front-End Development",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "https://www.udemy.com/certificate/EXAMPLE1"
  },
  {
    title: "Integration of Databases",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "https://www.udemy.com/certificate/EXAMPLE1"
  }, 
  {
    title: "Web Application Testing and Deployment",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "https://www.pluralsight.com/certificate/EXAMPLE2"
  }
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h1>Certifications</h1>

      <div className="cert-list">
        {certifications.map((cert) => (
          <div key={cert.title} className="cert-card">
            <h3>{cert.title}</h3>
            <p>
              {cert.issuer} • {cert.year}
            </p>
            {/* Only show link if it exists */}
           {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

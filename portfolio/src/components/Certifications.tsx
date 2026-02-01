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
    title: "React - The Complete Guide",
    issuer: "Udemy",
    year: "2025",
    link: "https://www.udemy.com/certificate/EXAMPLE1"
  },
  {
    title: "SQL for Beginners",
    issuer: "Coursera",
    year: "2024",
  },
  {
    title: "SQL for Beginners",
    issuer: "Coursera",
    year: "2024",
  },
  {
    title: "SQL for Beginners",
    issuer: "Coursera",
    year: "2024",
  },
  {
    title: "SQL for Beginners",
    issuer: "Coursera",
    year: "2024",
  }, 
  {
    title: "TypeScript Fundamentals",
    issuer: "Pluralsight",
    year: "2025",
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
              <p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

import { useEffect, useState } from "react";

const sections = ["header", "about", "skills", "projects", "certifications", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("header");

  useEffect(() => {
    const handleScroll = () => {
      let current = "header";
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= window.innerHeight / 2) {
            current = id;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <h1>Thembela</h1>
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <a href={`#${section}`} className={active === section ? "active" : ""}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact"; // import Contact

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact /> {/* Add Contact section */}
    </>
  );
}

export default App;

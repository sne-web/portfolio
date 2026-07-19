import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
    </>
  );
}

export default App;
import Navbar from "./components/navbar";
import About from "./components/about";
import Internship from "./components/internship";
import Project from "./components/project";
import Skill from "./components/skills";
import Certification from "./components/certifications";
import Achievements from "./components/achievements";
import Footer from "./components/footer";
import Coursework from "./components/coursework";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Internship />
      <Project />
      <Coursework />
      <Skill />
      <Certification />
      <Achievements />
      <Footer />
    </>
  );
}

export default App;

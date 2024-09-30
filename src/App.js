import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import About from './components/About/about'; 
import Projects from './components/Projects/projects'; 
import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import Skills from "./components/Skills/skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

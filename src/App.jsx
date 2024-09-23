import Navbar from "./components/navbar";
import Bio from "./components/bio";
import About from "./components/about";
import "./index.css";
import Technologies from "./components/technologies";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiase selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-14">
        <Navbar />
        <Bio />
        <About />
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact />
      </div>
    </div>
  );
}

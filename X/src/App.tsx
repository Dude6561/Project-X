import React, { useEffect } from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Project from "./project";
import Skills from "./skills";

const App = () => {
  useEffect(() => {});
  return (
    <div className="h-auto bg-black text-white">
      <Navbar />
      <div id="Home" className="flex h-screen bg-black">
        <Home />
      </div>
      <div id="About" className="flex h-screen bg-black">
        <About />
        <h1 className="relative left-20 text-5xl font-bold">Coding Tools</h1>
        <br />
        <div className="relative right-[230px] top-[100px]">
          <Skills />
        </div>
      </div>
      <div id="Contact" className="flex items-center justify-center bg-black">
        <Contact />
      </div>
      <div id="Project" className="flex items-center justify-center bg-black">
        <Project />
      </div>
    </div>
  );
};

export default App;

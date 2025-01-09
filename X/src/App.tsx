import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Project from "./project";
import Image from "./Image";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <div id="Home" className="flex h-screen bg-black">
        <Home />
      </div>
      <div
        id="About"
        className="flex h-screen items-center justify-center bg-black"
      >
        <About />
      </div>
      <div
        id="Contact"
        className="flex h-screen items-center justify-center bg-black"
      >
        <Contact />
      </div>
      <div
        id="Project"
        className="flex h-screen items-center justify-center bg-black"
      >
        <Project />
      </div>
    </div>
  );
};

export default App;

import { useEffect } from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";

import Skills from "./skills";

const App = () => {
  useEffect(() => {});
  return (
    <div className="h-auto bg-black text-white">
      <div className="">
        <Navbar />
      </div>
      <div id="Home" className="flex h-screen bg-black">
        <Home />
      </div>
      <div id="About" className="flex h-screen bg-black">
        <About />
        <h1 className="relative left-20 text-5xl font-bold">Coding Tools</h1>

        <br />

        <div className="relative right-[230px] top-[100px] h-1">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default App;

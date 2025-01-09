import Image from "./Image";
import Imgnav from "./imagenav";

export default function Home() {
  return (
    <div>
      <Image />
      <Imgnav />

      <div>
        <div>
          <h1 className="animate-typing absolute left-[1000px] top-80 max-w-max overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-mono text-7xl font-bold text-white">
            I'm Nischal Sharma
          </h1>
          <br />
          <h2 className="absolute left-[1010px] top-[400px] font-mono text-3xl font-bold text-white">
            a Front-end Developer Based in NP
          </h2>
          <h3 className="absolute left-[1000px] top-[480px] text-xl font-thin text-white">
            Skilled in JavaScript, React, TypeScript, Tailwind CSS, Git, and
            GitHub. I build responsive, <br />
            userfriendly web applications with a focus on clean code and
            seamless user experiences. <br /> Dedicated to staying updated with
            the latest front-end technologies and best practices.
          </h3>
          <button className="absolute left-[1000px] top-[600px] rounded border-none bg-orange-600 p-3 font-semibold text-white hover:bg-orange-500 focus:outline-none">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

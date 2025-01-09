import React from "react";
export default function Skills() {
  interface Imageprops {
    name: string;
    src: string;
    alt: string;
  }

  const skills: Imageprops[] = [
    { name: "JavaScript", src: "/Javascript.png", alt: "Js" },
    { name: "React", src: "/React.png", alt: "react" },
    { name: "Tailwind-Css", src: "/Tailwind.png", alt: "ts" },
    { name: "TypeScript", src: "/ts.png", alt: "ts" },
    { name: "GitHub", src: "/Github.png", alt: "github" },
    { name: "GitHub", src: "/Github.png", alt: "github" },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {skills.map((skill, index) => (
        <div key={index} className="">
          <img
            src={skill.src}
            alt={skill.alt}
            className="mb-4 h-24 w-24 rounded-full object-cover"
          />
          <h3 className="text-xl font-bold text-white">{skill.name}</h3>
        </div>
      ))}
    </div>
  );
}

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
        <div className="h-36 w-36 rounded-md bg-gradient-to-r from-[#586F7C] via-[#B8DBD9] to-[#F4F4F9] p-1">
          <div key={index} className="h-full w-full border-none bg-black">
            <img
              src={skill.src}
              alt={skill.alt}
              className="relative left-4 top-2 mb-4 h-24 w-24 rounded-full object-cover"
            />
            <h3 className="relative bottom-3 left-4 text-xl font-bold text-white">
              {skill.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

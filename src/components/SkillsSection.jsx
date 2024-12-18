import React from "react";

const data = [
  "HTML",
  "CSS ",
  "Tailwind CSS",
  "Javascript",
  "Typescript",
  "React",
  "Redux",
  "Next",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySql",
];

const SkillsSection = () => {
  return (
    <div className="mt-16">
      <div className="md:hidden text-lg text-slate-200  backdrop-blur font-bold px-8 py-4 w-screen -mx-8 sticky top-0">
        Skills
      </div>
      <h2 className="hidden md:block text-2xl font-bold">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {data.map((item, index) => (
          <span
            key={index}
            className="bg-cyan-950 text-cyan-300 text-sm px-4 p-1 rounded-full font-semibold"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

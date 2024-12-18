import React from "react";

const data = [
  {
    from: "2023",
    to: "2024",
    title: "React Developer",
    company: "Alemeno",
    description:
      "Developed and optimized healthcare platform UIs, improving usability and and integrated payment gateways to streamline transactions. Developed a health survey portal with API integration. Collaborated with teams to ensure efficient development and on-time project delivery.",
    tech: [
      "Javascript",
      "React",
      "Redux",
      "Next",
      "Tailwind",
      "Firebase",
      "Razorpay",
    ],
  },
  {
    from: "2022",
    to: "2023",
    title: "Front End Developer",
    company: "Taqanal Energy",
    description:
      "Developed and maintained scalable admin portal UIs using Angular, enhancing user engagement and functionality. Worked closely with cross-functional teams, including designers and stakeholders, to incorporate feedback and improve user satisfaction.",
    tech: [
      "Javascript",
      "Typescript",
      "Angular",
      "Material UI",
      "Loopback",
      "Node.js",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <div className="mt-16">
      <div className="md:hidden text-lg text-slate-200  backdrop-blur font-bold px-8 py-4 w-screen -mx-8 sticky top-0">
        Experience
      </div>
      <h2 className="hidden md:block text-2xl font-bold">Experiece</h2>
      {data.map((element, index) => (
        <div key={index} className="md:px-4 py-6 md:flex w-100 rounded-lg ">
          <div className="md:w-1/4">
            <p className="text-gray-400">
              {element.from} - {element.to}
            </p>
          </div>
          <div className="md:w-3/4">
            <p className=" font-semibold text-lg">
              {element.title}, {element.company}
            </p>
            <p className="mt-2 text-gray-400">{element.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {element.tech.map((item, index) => (
                <span
                  key={index}
                  className="bg-cyan-950 text-cyan-300 text-sm px-4 p-1 rounded-full font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;

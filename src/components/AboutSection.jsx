import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="md:hidden text-lg text-slate-200  backdrop-blur font-bold px-8 py-4 w-screen -mx-8 sticky top-0">
        About
      </div>
      <h2 className="hidden md:block text-2xl font-bold">About Me</h2>
      <p className="mt-4 text-gray-400">
        I’m a web developer passionate about building dynamic, user-friendly
        applications that combine thoughtful design with robust functionality.
        My work focuses on creating seamless user experiences, blending modern
        technologies with performance optimization to deliver high-quality
        solutions.
      </p>
      <p className="mt-4 text-gray-400">
        Currently, I specialize in front-end development with React.js, crafting
        responsive and interactive interfaces. I also have experience in backend
        development using Node.js and database management with tools like
        MongoDB and MySQL, ensuring a complete and scalable application stack.
      </p>
      <p className="mt-4 text-gray-400">
        In the past, I’ve worked on a variety of impactful projects, from
        developing healthcare platforms and food delivery apps to creating
        eCommerce admin dashboards. These experiences have honed my ability to
        translate ideas into functional applications, collaborate with teams,
        and optimize application performance for usability and scalability.
      </p>
    </div>
  );
};

export default AboutSection;

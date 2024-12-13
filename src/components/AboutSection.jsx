import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="md:hidden text-lg text-slate-200  backdrop-blur font-bold px-8 py-4 w-screen -mx-8 sticky top-0">
        About
      </div>
      <h2 className="hidden md:block text-2xl font-bold">About Me</h2>
      <p className="mt-4 text-gray-400">
        I’m a passionate web developer specializing in React.js and Node.js. I
        have extensive experience building projects such as eCommerce platforms
        and news article websites, always striving for dynamic, user-friendly
        solutions. In addition, I’ve worked on healthcare platforms and advanced
        UIs like an e-pharmacy and TB detection survey portals.
      </p>
      <p className="mt-4 text-gray-400">
        My goal is to continuously learn and stay updated with web development
        trends while crafting innovative and efficient applications.
      </p>
    </div>
  );
};

export default AboutSection;

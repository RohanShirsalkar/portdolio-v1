import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen ">
      <div className="w-full md:w-2/5 h-auto md:h-full py-16 px-8 flex-col justify-between border-b md:border-b-0 md:border-r border-gray-700 md:flex">
        <div>
          <h1 className="text-4xl font-bold">Rohan Shirsalkar</h1>
          <p className="mt-2 text-lg">Full Stack Developer</p>
          <p className="mt-4 text-gray-400">
            I specialize in creating dynamic and user-friendly web applications.
          </p>
        </div>
        <div className="space-y-4 hidden md:block">
          <button className="flex items-center text-gray-400 hover:text-white">
            <span className="mr-2">&#8212;</span> About
          </button>
          <button className="flex items-center text-gray-400 hover:text-white">
            <span className="mr-2">&#8212;</span> Experience
          </button>
          <button className="flex items-center text-gray-400 hover:text-white">
            <span className="mr-2">&#8212;</span> Projects
          </button>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 mb-8 md:mb-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            {/* GitHub */}
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            {/* LinkedIn */}
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            {/* Instagram */}
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      {/* Part B: Scrollable Right Section */}
      <div className="w-full md:w-3/5 h-full md:overflow-y-scroll scrollbar-hide py-16 px-8">
        <AboutSection />
        <ExperienceSection />
        <FeaturedProjectsSection />
      </div>
    </div>
  );
};

export default Home;

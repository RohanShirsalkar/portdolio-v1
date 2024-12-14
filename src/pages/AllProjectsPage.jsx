import React from "react";
import { FaLink, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Foodie - Online Food Delivery App",
    links: [
      {
        label: "Github(Frontend)",
        url: "https://github.com/RohanShirsalkar/Foodie-Food-Delivery-App-Forntend",
      },
      {
        label: "Github(Backend)",
        url: "https://github.com/RohanShirsalkar/food-delivery-app-backend",
      },
    ],
    tech: ["Javascript", "React", "Tailwind CSS", "Node", "Express", "MySql"],
    year: "Nov - 2024",
  },
  {
    title: "Admin Dashboard for Ecommerce Store",
    links: [
      {
        label: "Github(Frontend)",
        url: "https://github.com/RohanShirsalkar/Admin-Dashboard-for-Ecommerce-frontend",
      },
      {
        label: "Github(Backend)",
        url: "https://github.com/RohanShirsalkar/Admin-Dashboard-for-Ecommerce",
      },
    ],
    tech: ["Javascript", "React", "ShadCN UI", "Node", "Express", "MySql"],
    year: "Oct - 2024",
  },
  {
    title: "X-Box Website Clone",
    links: [
      {
        label: "Github",
        url: "https://github.com/RohanShirsalkar/Xbox-Website-Clone",
      },
    ],
    tech: [
      "Javascript",
      "React",
      "SCSS",
      "Node",
      "Express",
      "MongoDB",
      "Razorpay",
      "JWT",
    ],
    year: "Nov - 2024",
  },
];

const AllProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="md:p-0 p-6">
      <div className="mt-12 md:mt-24">
        <a
          className="text-cyan-400 text-lg flex items-center hover:text-cyan-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft size={14} className="me-2 " />
          Go Back
        </a>
        <h1 className="font-bold text-5xl mt-2">All Projects</h1>
      </div>
      <table class="table-auto w-full mt-8">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="text-start text py-4 w-2/6 md:w-1/12">Year</th>
            <th className="text-start text py-4 w-4/6 md:w-4/12">Project</th>
            <th className="text-start text py-4 w-4/12 hidden md:block">
              Tools Used
            </th>
            <th className="text-start text py-4 w-4/12 hidden md:block">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index} className="border-b border-gray-600">
              <td className="py-4 text-gray-400">{element.year}</td>
              <td className="py-4">
                <a className="hover:text-cyan-400 font-semibold" href="#">
                  {element.title}
                </a>
              </td>
              <td className="py-4 hidden md:block">
                <div className="flex flex-wrap gap-2">
                  {element.tech.map((item, index) => (
                    <span
                      key={index}
                      className="bg-cyan-950 text-cyan-300 text-sm px-4 p-1 rounded-full font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-4 flex-wrap hidden md:flex">
                {element.links.map((link, index) => (
                  <a
                    className="flex items-center me-2 text-gray-400 hover:text-cyan-400"
                    target="_blank"
                    href={link.url}
                    key={index}
                  >
                    <FaLink size={12} className="me-1" />
                    {link.label}
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProjectsPage;

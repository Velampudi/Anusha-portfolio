import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      title: "DIGITAL HRMS",
      description: "Digital HRMS is a smart Human Resource Management System designed to simplify HR operations and boost team efficiency.",
      tags: ["HTML5", "Tailwind CSS", "JavaScript(ES6+)", "React js"],
      image: "https://www.digitalhrms.com/images/logo.svg",
      Livelink: "#",
    },
    {
      title: "INSURANCE MANAGEMENT SYSTEM",
      description: "The Insurance management system is a powerful Salesforce application developed to efficiently manage detailed information about companies offering various insurance policies and their associated agents.",
      tags: ["Salesforce", "Trailhead"],
      image: "https://img.freepik.com/free-vector/insurance-simple-element_24908-54319.jpg",
      liveLink: "https://adityaengineeringcollege-b1-dev-ed.my.salesforce.com/01Z5i000000lIRj",
      
    },
    {
      title: "PORTFOLIO WEBSITE",
      description: "This portfolio showcases a selection of my projects that reflect my expertise in React.js, Next.js, and Tailwind CSS .",
      tags: ["HTML5", "Tailwind CSS", "JavaScript(ES6+)", "React js"],
      image: "https://t4.ftcdn.net/jpg/04/82/93/99/360_F_482939981_vUyvJOWksYXhTEcCGpEeGPZfOqjZS4sE.jpg",
      liveLink: "http://localhost:5173/",
      
    }

  ];

  return (
    <div className="text-white bg-gray-950 min-h-screen">
      <h1 className='text-4xl font-bold text-center '>Human Resource Management System</h1>
      <div className="flex flex-wrap gap-8 justify-center p-6 bg-gray-950 ">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>

  );
};

export default Projects;

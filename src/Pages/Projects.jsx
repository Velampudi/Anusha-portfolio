import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      title: "STORY HEAVEN",
      description: "A responsive online bookstore built with React.js and Tailwind CSS. Includes pages like Home, Shop, Cart, and Login with a clean layout and modular components. Deployed on Netlify.",
      tags: ["HTML5,", "Tailwind CSS,", "JavaScript (ES6+),"," React.js,","Netlify"],
      image: "https://bookshome.in/wp-content/uploads/2023/04/Paging-Readers-Books.png",
      liveLink: "https://delightful-kitsune-9307f3.netlify.app/",
    },
    {
      title: "GRAMEENA BANK WEB APP",
      description: "A simple online banking application that allows users to securely log in, view account balance and details, and perform basic banking operations such as deposit, withdrawal, and fund transfer. The app provides a clean and responsive dashboard UI, making it user-friendly for everyday transactions.",
      tags: ["Java", "Spring Boot", "HTML"," CSS","MySQL"],
      image: "https://saharaigroup.com/images/bank.jpeg",
      liveLink: "https://github.com/Velampudi/Bank-app",
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
      <h1 className='text-4xl font-bold text-center '>Projects</h1>
      <div className="flex flex-wrap gap-8 justify-center p-6 bg-gray-950 ">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>

  );
};

export default Projects;

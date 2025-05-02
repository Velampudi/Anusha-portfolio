import { Link } from "react-router-dom";
import { FaEye, FaCode } from "react-icons/fa";

const ProjectCard = ({ title, description, tags, image, liveLink, sourceLink }) => {
  return (
    <div className="bg-gray-950 text-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm transition transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-black-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#1e293b] text-sm px-3 py-1 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-violet-700 transition"
          >
            <FaEye />
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

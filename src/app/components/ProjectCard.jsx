import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div
        className="h-52 md:h-64 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="bg-gray-700 hover:bg-gray-600 text-white font-medium p-3 rounded-full mr-2 group/link"
          > GITHUB
          </Link>
          <Link
            href={previewUrl}
            className="bg-gray-700 hover:bg-gray-600 text-white font-medium p-3 rounded-full group/link"
          > PREVIEW
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h5 className="text-xl font-semibold text-white mb-2">{title}</h5>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

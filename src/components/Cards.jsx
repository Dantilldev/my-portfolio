import React from "react";
import {RiLiveFill} from "react-icons/ri";
import {FaGithubSquare} from "react-icons/fa";

export default function Cards({
  imageSrc,
  title,
  text,
  techStack,
  liveLink,
  githubLink,
}) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg  border transform transition-all duration-300 hover:scale-105 ">
      {/* Image */}
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      {/* Content */}
      <div className="p-5">
        <h2 className="text-2xl font-semibold  dark:text-white">{title}</h2>
        <p className=" dark:text-gray-300 mt-2">{text}</p>
      </div>
      {/* Tech Stack */}
      <div className="p-5 pt-0">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => {
            return (
              <div
                key={index}
                className="px-3 py-1 text-sm  rounded-full border "
              >
                {tech}
              </div>
            );
          })}
        </div>
        <div className=" flex flex-row justify-end gap-2 text-2xl ">
          <a
            href="
          "
          >
            <RiLiveFill />
          </a>
          <a href="">
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import {RiLiveFill} from "react-icons/ri";
import {FaGithubSquare} from "react-icons/fa";

export default function Cards({imageSrc, title, text, techStack}) {
  return (
    <div className="max-w-xs rounded-3xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 h-[521px] flex flex-col card-bg">
      {/* Image */}
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      {/* Content */}
      <div className="p-5 w-full h-48">
        <h2 className="text-2xl font-semibold  dark:text-white">{title}</h2>
        <p className=" dark:text-gray-300 mt-2">{text}</p>
      </div>

      {/* Tech Stack */}
      <div className="">
        <div className="flex flex-row flex-wrap gap-2 p-5  ">
          {techStack.map((tech, index) => {
            return (
              <div
                key={index}
                className="px-3 py-1 text-sm  rounded-full border"
              >
                {tech}
              </div>
            );
          })}
        </div>

        {/* Links */}
        <div className="flex flex-row justify-end gap-2 mr-2 mb-2 text-2xl">
          <a href="" target="_blank">
            <RiLiveFill />
          </a>
          <a href="" target="_blank">
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

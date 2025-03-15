import React from "react";
import {IoLocationOutline, IoCallOutline} from "react-icons/io5";
import {MdOutlineEmail} from "react-icons/md";
import {LuSun, LuMoon} from "react-icons/lu";
import {CiLinkedin} from "react-icons/ci";

import {VscGithubAlt} from "react-icons/vsc";

export default function HeaderLeft({darkMode, toggleDarkMode}) {
  return (
    <div className="flex-1 min-h-screen w-full relative p-10 transition-all duration-600 dark:bg-black dark:text-white border-gray-700 sm:border-r">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src="/me.jpeg"
            alt="I'ts me Daniel"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
          />

          <div className="text-center space-y-1">
            <h1 className="text-4xl font-extralight ">
              Daniel <span className="font-semibold">Tilleria</span>
            </h1>
            <h3 className="text-lg">Web Developer</h3>
          </div>
          <button className="absolute top-10 right-10" onClick={toggleDarkMode}>
            {darkMode ? (
              <LuSun className="text-2xl " />
            ) : (
              <LuMoon className="text-2xl " />
            )}
          </button>
        </div>
        {/* Contact */}
        <div className=" flex flex-col items-start justify-start border-b border-gray-700 p-5">
          <ul className=" space-y-3">
            <li className="flex items-center gap-2">
              <IoLocationOutline className="text-2xl" />
              <span className="text-lg">Stockholm</span>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineEmail className="text-2xl" />

              <span className="text-lg">daniel.tilleria@hotmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <IoCallOutline className="text-2xl" />
              <span className="text-lg">07-232-323-32</span>
            </li>
          </ul>
        </div>
        {/* Social */}
        <div className="flex flex-col items-start justify-start border-b border-gray-700 p-5 gap-5">
          <h1 className="font-semibold text-2xl ">SOCIAL</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <VscGithubAlt className="text-2xl" />
              <span className="text-lg">GitHub</span>
            </li>
            <li className="flex items-center gap-2">
              <CiLinkedin className="text-2xl" />
              <span className="text-lg">Linkedin</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 border-gray-700">
          <h1 className=" font-semibold text-2xl">EDUCATION</h1>
          <ul className="flex flex-col gap-5">
            <li className=" relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:transform before:bg-black before:dark:bg-white dark:bg-white">
              <span className="font-semibold md:text-lg">
                Frontend Developer
              </span>
              <span className=" font-light">Chas Academy</span>
              <span className="text-sm">2024- </span>
            </li>
            <li className=" relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:transform before:bg-black ">
              <span className="font-semibold md:text-lg">Webb Utveckling</span>
              <span className=" font-light">Åsö Gymnasium</span>
              <span className="text-sm">2023</span>
            </li>
            <li className=" relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:transform before:bg-black ">
              <span className="font-semibold md:text-lg">
                Programering 1 (Javascript)
              </span>
              <span className=" font-light">Åsö Gymnasium</span>
              <span className="text-sm">2023</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start border-b border-gray-700 p-5 gap-5">
          <h1 className="font-semibold text-2xl ">HOBBIES</h1>
          <ul className="flex flex-wrap gap-2">
            <li className="flex items-center bg-gray-200 px-2 rounded-sm">
              Brazilian Jiujitsu
            </li>
            <li className="flex items-center bg-gray-200  px-2 rounded-sm">
              Climbing
            </li>
            <li className="flex items-center bg-gray-200  px-2 rounded-sm">
              Cooking
            </li>
            <li className="flex items-center bg-gray-200  px-2 rounded-sm">
              Gaming
            </li>
            <li className="flex items-center bg-gray-200  px-2 rounded-sm">
              Music
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start border-b border-gray-700 p-5 gap-5">
          <h1 className="font-semibold text-2xl">LANGUAGES</h1>
          <ul className=" flex flex-col list-disc list-inside gap-2">
            <li>Swedish - Fluent</li>
            <li>English - Fluent</li>
            <li>Spanish - Fluent</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

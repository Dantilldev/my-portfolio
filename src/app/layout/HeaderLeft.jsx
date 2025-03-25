import React from "react";
import {IoLocationOutline, IoCallOutline} from "react-icons/io5";
import {MdOutlineEmail} from "react-icons/md";
import {LuSun, LuMoon} from "react-icons/lu";
import {CiLinkedin} from "react-icons/ci";
import {VscGithubAlt} from "react-icons/vsc";
import {useState} from "react";
import {motion} from "framer-motion";

const hobbies = [
  "Brazilian Jiu-Jitsu",
  "Climbing",
  "Gaming",
  "Music",
  "Programming",
];

const education = [
  {
    title: "Frontend Developer",
    school: "Chas Academy",
    year: "2024-",
  },
  {
    title: "Webb Utveckling",
    school: "Åsö Gymnasium",
    year: "2023",
  },
  {
    title: "Programering 1 (Javascript)",
    school: "Åsö Gymnasium",
    year: "2023",
  },
];

export default function HeaderLeft({darkMode, toggleDarkMode}) {
  const [showTooltip, setShowTooltip] = useState(false);

  function handleCopyEmail() {
    const email = "daniel.tilleria@hotmail.com"; //
    navigator.clipboard.writeText(email);
  }

  return (
    <div className="flex-1 min-h-screen w-full relative p-10  sm:border-r">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src="/me.jpeg"
            alt="I'ts me Daniel"
            className="w-auto h-48 rounded-full object-cover border-4"
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
        <div className=" flex flex-col items-start justify-start border-b p-5">
          <ul className=" space-y-3">
            <li className="flex items-center gap-2">
              <IoLocationOutline className="text-2xl" />
              <span className="text-lg">Stockholm</span>
            </li>
            {showTooltip && (
              <div
                className="bg-[var(--hover-color) absolute top-93 left-70 px-2 bg-black text-white rounded-sm after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2
                after:border-x-6 after:border-t-6 after:border-transparent after:border-t-black "
              >
                Copy
              </div>
            )}
            <li className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="text-lg flex items-center gap-2"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                {" "}
                <MdOutlineEmail className="text-2xl " />
                daniel.tilleria@hotmail.com
              </button>
            </li>
            <li className="flex items-center gap-2">
              <IoCallOutline className="text-2xl" />
              <span className="text-lg">07-232-323-32</span>
            </li>
          </ul>
        </div>
        {/* Social */}

        <div className="flex flex-col items-start justify-start border-b p-5 gap-5">
          <h1 className="font-semibold text-2xl ">SOCIAL</h1>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <VscGithubAlt className="text-2xl" />
              <a
                href="https://github.com/Dantilldev"
                target="_blank"
                title="GitHub"
                className="text-lg"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <CiLinkedin className="text-2xl" />
              <a
                href="https://www.linkedin.com/in/daniel-tilleria-17a0b9259/"
                target="_blank"
                title="Linkedin"
                className="text-lg"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        {/* Education */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 ">
          <h1 className="font-semibold text-2xl">EDUCATION</h1>
          <motion.ul
            className="flex flex-col gap-5"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
          >
            {education.map((item, index) => (
              <motion.li
                key={index}
                className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:transform before:bg-[var(--text-color)]"
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: index * 0.2, duration: 0.8}}
              >
                <span className="font-semibold md:text-lg">{item.title}</span>
                <span className="font-light">{item.school}</span>
                <span className="text-sm">{item.year}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Hobbies */}
        <div className="flex flex-col items-start justify-start p-5 gap-5 border-b">
          <h1 className="font-semibold text-2xl">HOBBIES</h1>
          <ul className="flex flex-wrap gap-2">
            {hobbies.map((hobby, index) => (
              <li key={index} className="flex items-center px-2 rounded-sm ">
                {hobby}
              </li>
            ))}
          </ul>
        </div>
        {/* Languages */}
        <div className="flex flex-col items-start justify-start border-b p-5 gap-5">
          <h1 className="font-semibold text-2xl">LANGUAGES</h1>
          <ul className=" flex flex-col list-disc list-inside gap-2">
            <li>Swedish</li>
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

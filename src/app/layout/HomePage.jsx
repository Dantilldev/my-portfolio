"use client";
import React from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import {motion} from "framer-motion";
import Footer from "@/components/Footer";
import FlipCard from "@/components/FlipCard";

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML5", "TailwindCSS", "JavaScript", "React", "Next.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MySQL"],
  },
];

const projects = [
  {
    imageSrc: "/earth.jpg",
    title: "Project 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, ",
    gitHubLink: "https://github.com/Dantilldev/chase-the-rabbit",
    techStack: ["HTML5", "TailwindCSS", "JavaScript"],
  },
  {
    imageSrc: "/moon.jpg",
    title: "Project 2",
    text: "um et dui rhoncus, eget laoreet mi tincidunt.",
    techStack: ["HTML5", "TailwindCSS", "JavaScript"],
  },
  {
    imageSrc: "/planet1.jpg",
    title: "Project 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, eget laoreet mi tincidunt.",
    techStack: ["HTML5", "TailwindCSS", "JavaScript"],
  },
  {
    imageSrc: "/planet2.jpg",
    title: "Project 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, eget laoreet mi tincidunt.",
    techStack: ["HTML5", "TailwindCSS", "JavaScript"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex-3">
      <main className=" flex flex-col p-10">
        {/* About Me */}
        <section className="flex flex-col gap-5 mb-20">
          <h1 className="text-4xl font-semibold">About Me</h1>
          <p className="text-lg font-mono">
            A frontend developer who creates web and mobile apps with some
            backend capability. Currently studying at Chas Academy in Stockholm
            to improve my skills. I am a motivated and curious problem-solver
            who enjoys working in teams to tackle challenges and create
            meaningful solutions. When I am not coding, I practice Brazilian
            Jiu-Jitsu which helps me stay focused and motivated as I grow as a
            developer.
          </p>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-5 mb-20 ">
          <h1 className="text-4xl font-semibold">My Tech Toolbox</h1>
          <div className="flex flex-col gap-5">
            {skillsData.map((section, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">{section.category}</h2>

                <ul className="flex flex-wrap gap-5">
                  {section.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className=" py-1 px-4 rounded-4xl text-lg skills-bg "
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col justify-center items-center gap-5 mb-20">
          <h1 className="text-4xl font-semibold text-center">Projects</h1>
          <div className="grid md:grid-cols-2 2xl:grid-cols-4 justify-center items-center gap-10">
            {projects.map((project, index) => (
              <FlipCard
                key={index}
                imageSrc={project.imageSrc}
                title={project.title}
                text={project.text}
                techStack={project.techStack}
                gitHubLink={project.gitHubLink}
              />
            ))}
          </div>
        </section>
        {/* <section className="flex flex-col justify-center items-center gap-5 mb-20 ">
          <h1 className="text-4xl font-semibold text-center">Projects</h1>
          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
          >
            <div className="grid md:grid-cols-2 2xl:grid-cols-4 justify-center items-center gap-10 ">
              {projects.map((project, index) => (
                <Cards
                  key={index}
                  imageSrc={project.imageSrc}
                  title={project.title}
                  text={project.text}
                  techStack={project.techStack}
                  gitHubLink={project.gitHubLink}
                />
              ))}
            </div>
          </motion.div>
        </section> */}

        {/* CTA-Btn */}
        <div className="flex justify-center p-10">
          <section className="flex flex-col items-center gap-5 mb-10 w-[600px] p-4 ">
            <h1 className="text-4xl font-semibold">Want to collabrate?</h1>

            <a href="mailto:daniel.tilleria@hotmail.com">
              <button className="bg-[#A6A28B] border py-3 px-5 w-56 rounded-sm transform transition-all hover:scale-105">
                Open mail
              </button>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

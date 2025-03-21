"use client";
import React from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Cards from "@/components/Cards";
import {motion} from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML5", "TailwindCSS", "JavaScript", "React", "Next.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express"],
  },
];

const projects = [
  {
    imageSrc: "/earth.jpg",
    title: "Project 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, ",
    techStack: ["HTML5", "TailwindCSS", "JavaScript"],
  },
  {
    imageSrc: "/earth.jpg",
    title: "Project 2",
    text: "um et dui rhoncus, eget laoreet mi tincidunt.",
    techStack: ["HTML5", "TailwindCSS", "JavaScript"],
  },
  {
    imageSrc: "/earth.jpg",
    title: "Project 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, eget laoreet mi tincidunt.",
    techStack: ["HTML5", "TailwindCSS", "JavaScript"],
  },
  {
    imageSrc: "/earth.jpg",
    title: "Project 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, eget laoreet mi tincidunt.",
    techStack: ["HTML5", "TailwindCSS", "JavaScript"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex-3 ">
      <main className="flex flex-col p-5 ">
        {/* About Me */}
        <section className="flex flex-col gap-5 mb-20">
          <h1 className="text-4xl font-semibold">About Me</h1>
          <p className="text-lg">
            I am a web developer based in Stockholm, passionate about bringing
            ideas to life, with an eye for detailss I am a web developer based
            in Stockholm, passionate about bringing ideas to life, with an eye
            for detailss I am a web developer based in Stockholm, passionate
            about bringing ideas to life, with an eye for detailss for detailss
            I am a web developer based in Stockholm, passionate about bringing
            ideas to life, with an eye for detailss
          </p>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-5 mb-20 ">
          <h1 className="text-4xl font-semibold">Skills</h1>
          <div className="flex flex-col gap-5">
            {skillsData.map((section, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">{section.category}</h2>
                <ul className="flex flex-wrap gap-5 ">
                  {section.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="border py-1 px-4 rounded-4xl text-lg skills-bg "
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
        <section className="flex flex-col justify-center items-center gap-5 mb-20 ">
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
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA-Btn */}
        <div className="flex justify-center">
          <section className="flex flex-col items-center gap-5 mb-10 w-[600px] p-4 ">
            <h1 className="text-4xl font-semibold">Lorem, ipsum. blabla ? </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              fugiat illum culpa mollitia hic. Molestias consequatur repudiandae
              eius accusantium soluta.
            </p>
            <button className="bg-[#A6A28B] border py-3 px-5 w-56 rounded-sm transform transition-all hover:scale-105">
              Get in touch
            </button>
          </section>
        </div>
      </main>
      <ScrollToTopButton />
    </div>
  );
}

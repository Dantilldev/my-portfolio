"use client";
import {useState, useEffect} from "react";
import React from "react";
// import {motion} from "framer-motion";
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
    imageSrc: "/rabbit_chase.png",
    title: " Chase the Rabbit🐉",
    text: "Chase the Rabbit, a snake inspired desktop game made by me and a classmate. Collect points, unlock characters, and set new records.",
    gitHubLink: "https://github.com/Dantilldev/chase-the-rabbit",
    liveLink: "https://chase-the-rabbit-yvfw.vercel.app/",
    techStack: ["HTML5", "TailwindCSS", "JavaScript", "React", "Next.js"],
  },
  {
    imageSrc: "/ai.png",
    title: "Ai Translate & chatbot 🤖",
    text: "Chase the Rabbit, a snake inspired desktop game made by me and a classmate. Collect points, unlock characters, and set new records.",
    gitHubLink: "https://github.com/Dantilldev/ai-translate",
    liveLink: "https://ai-translate-e3md.vercel.app/",
    techStack: ["HTML5", "TailwindCSS", "JavaScript", "React", "Next.js"],
  },

  {
    imageSrc: "/todo.png",
    title: "Todo App 📋",
    text: "A simple todo app built with Vite, React, and TailwindCSS, focusing on implementing CRUD operations (Create, Read, Update, Delete).",
    gitHubLink: "https://github.com/Dantilldev/workshop-todoApp",
    liveLink: "https://workshop-todo-app.vercel.app/",
    techStack: ["Vite", "TailwindCSS", "CRUD"],
  },
  {
    imageSrc: "/pokedex.png",
    title: "Pokémon 👾",
    text: "Built with Next.js in a team project, this Pokédex lets users explore Pokémons, search by name or ID(max1000), and bookmark favorites. I worked on the Pokémon details, front page, and contributed to the Context API for data management.",
    gitHubLink: "https://github.com/Dantilldev/chas_pokemon-main",
    liveLink: "https://chas-pokemon-main.vercel.app/",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "PokemonAPI",
      "Context API",
      "Routing",
    ],
  },
];

export default function HomePage() {
  const text =
    "A  frontend developer who creates web and mobile apps with some backend capability. Currently studying at Chas Academy in Stockholm to improve my skills. I am a motivated and curious problem-solver who enjoys working in teams to tackle challenges and create meaningful solutions. When I am not coding, I practice Brazilian Jiu-Jitsu which helps me stay focused and motivated as I grow as a developer.";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex-3">
      <main className=" flex flex-col p-10">
        {/* About Me */}
        <section className="flex flex-col gap-5 mb-20">
          <h1 className="text-4xl font-semibold">About Me</h1>
          <p className="text-lg font-mono">{displayText}</p>
        </section>
        {/* <section className="flex flex-col gap-5 mb-20">
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
        </section> */}

        {/* Skills */}
        <section className="flex flex-col gap-5 mb-20 ">
          <h1 className="text-4xl font-semibold py-2">My Tech Toolbox</h1>
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
        <section className="flex flex-col justify-center items-center gap-5 mt-15 ">
          <h1 className="text-4xl font-semibold text-center py-2">Projects</h1>
          <div className="grid md:grid-cols-2 2xl:grid-cols-4 justify-center items-center gap-10">
            {projects.map((project, index) => (
              <FlipCard
                key={index}
                imageSrc={project.imageSrc}
                title={project.title}
                text={project.text}
                techStack={project.techStack}
                gitHubLink={project.gitHubLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </section>

        {/* CTA-Btn */}
        <div className="flex justify-center items-center mt-40 p-5">
          <section className="flex flex-col items-center gap-5 mb-10 w-[600px] p-4 ">
            <h1 className="text-4xl font-semibold py-2">Let's Connect</h1>

            <a href="mailto:daniel.tilleria@hotmail.com">
              <button className="relative border-2 py-3 px-5 h-52 w-52 rounded-full group transition-all duration-600 transform hover:scale-75">
                <span className="relative z-10">Write a message</span>
              </button>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

// bg-[#A6A28B]

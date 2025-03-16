import React from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Cards from "@/components/Cards";

export default function HomePage() {
  return (
    <div className="min-h-screen flex-3 transition-all duration-600 dark:bg-black dark:text-white ">
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
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">Frontend</h2>
              <ul className="flex flex-wrap gap-5">
                <li className="border py-1 px-4 rounded-sm text-lg ">HTML5</li>
                <li className="border py-1 px-4 rounded-sm text-lg">
                  TailwindCSS
                </li>
                <li className="border py-1 px-4 rounded-sm text-lg">
                  JavaScript
                </li>
                <li className="border py-1 px-4 rounded-sm text-lg">React</li>
                <li className="border py-1 px-4 rounded-sm text-lg">Next.js</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">Backend</h2>
              <ul className="flex flex-wrap gap-5">
                <li className="border py-1 px-4 rounded-sm text-lg">Node.js</li>
                <li className="border py-1 px-4 rounded-sm text-lg">Express</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-5 mb-20">
          <h1 className="text-4xl font-semibold text-center">Projects</h1>
          <div className="flex flex-col gap-5">
            <div className=" flex flex-wrap md:grid-cols-2 justify-center items-center gap-10">
              <Cards
                imageSrc="/earth.jpg"
                title="Project 1"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus, eget laoreet mi tincidunt."
                techStack={["HTML5", "TailwindCSS", "JavaScript"]}
              />
              <Cards
                imageSrc="/earth.jpg"
                title="Project 2"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus, eget laoreet mi tincidunt."
                techStack={["HTML5", "TailwindCSS", "JavaScript"]}
              />
              <Cards
                imageSrc="/earth.jpg"
                title="Project 3"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus, eget laoreet mi tincidunt."
                techStack={["HTML5", "TailwindCSS", "JavaScript"]}
              />
              <Cards
                imageSrc="/earth.jpg"
                title="Project 4"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus, eget laoreet mi tincidunt."
                techStack={["HTML5", "TailwindCSS", "JavaScript"]}
              />
            </div>
          </div>
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
            <button className="bg-[#A6A28B] border py-3 px-5 w-56 rounded-sm transform transition-all duration-300 hover:scale-105">
              Get in touch
            </button>
          </section>
        </div>
      </main>
      <ScrollToTopButton />
    </div>
  );
}

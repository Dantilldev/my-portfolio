import React from "react";

export default function SkillsSection() {
  const skillsData1 = [
    "HTML5",
    "TailwindCSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "WCAG",
    "MySQL",
    "Web APIs",
    "WAI-ARIA",
  ];

  const skillsData2 = [
    "AWS",
    "Docker",
    "GitHub",
    "Figma",
    "Agile/Scrum",
    "VS Code",
    "Git",
    "GitHub Actions",
    "CI/CD",
    "Responsive Design",
    "Office 365",
  ];

  const scrollData1 = [
    ...skillsData1,
    ...skillsData1,
    ...skillsData1,
    ...skillsData1,
  ];

  const scrollData2 = [
    ...skillsData2,
    ...skillsData2,
    ...skillsData2,
    ...skillsData2,
  ];

  return (
    <>
      <h1 className="text-4xl font-bold py-3 text-center mb-5">
        The technologies I have been working with recently
      </h1>
      <section className="flex flex-col mb-15 w-[420px] sm:w-[600px] md:w-[700px] lg:w-[700px] xl:w-[800px] mx-auto overflow-hidden">
        {/* First container with fade effect on both ends */}
        <div className="relative w-full overflow-hidden hover-pause mb-4">
          {/* Fade on left side */}
          <div className="absolute top-0 left-0 h-full w-10 bg-gradient-right z-10" />
          <div className="scroll-container1 flex flex-row py-4">
            {scrollData1.map((skill, index) => (
              <div
                key={index}
                className="py-2 px-4 mx-2 rounded-full text-gray-20 border skills-border shadow-sm flex items-center flex-shrink-0"
              >
                {skill}
              </div>
            ))}
          </div>
          {/* Fade on right side */}
          <div className="absolute top-0 right-0 h-full w-10 bg-gradient-left z-10" />
        </div>

        {/* Second container with fade effect on both ends */}
        <div className="relative w-full overflow-hidden hover-pause">
          {/* Fade on left side */}
          <div className="absolute top-0 left-0 h-full w-10 bg-gradient-right z-10" />
          <div className="scroll-container2 flex flex-row py-4">
            {scrollData2.map((skill, index) => (
              <div
                key={index}
                className="py-2 px-4 mx-2 rounded-full text-gray-20 border skills-border shadow-sm flex items-center flex-shrink-0"
              >
                {skill}
              </div>
            ))}
          </div>
          {/* Fade on right side */}
          <div className="absolute top-0 right-0 h-full w-10  bg-gradient-left z-10" />
        </div>
      </section>
    </>
  );
}

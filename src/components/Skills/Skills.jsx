import React, { useState } from "react";

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const skillCategories = [
    {
      title: "Frontend Development",
      subtitle:
        "Building responsive, high-performance and user-centric interfaces.",
      skills: [
        { name: "HTML / CSS", level: "90%" },
        { name: "JavaScript", level: "80%" },
        { name: "React / Redux", level: "85%" },
        { name: "TypeScript", level: "75%" },
      ],
    },
    {
      title: "Backend & Database",
      subtitle:
        "Developing scalable server-side architectures and secure REST APIs.",
      skills: [
        { name: "Node.js / Express.js", level: "60%" },
        { name: "MongoDB / Mongoose", level: "60%" },
        { name: "REST API / Swagger", level: "60%" },
        { name: "Authentication (JWT/Auth)", level: "60%" },
      ],
    },
    {
      title: "Tools & DevOps",
      subtitle:
        "Managing version control, workflow management and modern toolings.",
      skills: [
        { name: "Git / GitHub", level: "95%" },
        { name: "Vite / Webpack", level: "85%" },
        { name: "Vercel", level: "95%" },
        { name: "Scrum / Agile / Team Lead", level: "75%" },
      ],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-8 md:px-16 py-20 relative z-10">
      <div className="mb-16" data-aos="fade-up">
        <span className="text-xs font-medium tracking-widest text-neutral-500 uppercase block mb-2">
          My Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-light text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
          Skills &{" "}
          <span className="font-medium text-neutral-950 dark:text-white transition-colors duration-300">
            Technologies
          </span>
        </h2>
      </div>
      <div className="space-y-4" data-aos="fade-up">
        {skillCategories.map((cat, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`border-b border-neutral-300 dark:border-neutral-800/60 transition-all duration-500 overflow-hidden
                ${
                  isOpen
                    ? "bg-white/60 dark:bg-neutral-900/20 backdrop-blur-md rounded-xl p-6 border-neutral-300 dark:border-neutral-700/40 shadow-sm dark:shadow-none"
                    : "py-6 px-2"
                }`}
            >
              <button
                className="w-full flex flex-col md:flex-row md:items-center justify-between text-left group"
                onClick={() => setActiveIndex(isOpen ? null : index)}
              >
                <div>
                  <h3 className="text-xl font-light text-neutral-800 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-light transition-colors duration-300">
                    {cat.subtitle}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-4">
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-500 transition-colors duration-300">
                    [ 0{index + 1} ]
                  </span>
                  <svg
                    className={`w-4 h-4 text-neutral-400 dark:text-neutral-500 transition-transform duration-300
                        ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500
                    ease-in-out ${
                      isOpen
                        ? "max-h-125 opacity-100 mt-8"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
              >
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-700 dark:text-neutral-300 font-light transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-mono text-xs transition-colors duration-300">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-0.5 w-full bg-neutral-200 dark:bg-neutral-950 rounded-full overflow-hidden transition-colors duration-300">
                      <div
                        className="h-full bg-neutral-800 dark:bg-neutral-200 transition-all duration-1000 ease-out"
                        style={{ width: isOpen ? skill.level : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

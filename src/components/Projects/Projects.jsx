import { useEffect } from "react";
import focusFrameImage from "../../assets/images/focus-frame.webp";
import cinemaniaImage from "../../assets/images/cinemania.webp";
import moneyGuardImage from "../../assets/images/money-guard.webp";
import slimMomsImage from "../../assets/images/slim-moms.webp";
import travelTrucksImage from "../../assets/images/travel-trucks.webp";
import psychologistsServicesImage from "../../assets/images/psychologists-services.webp";
import petloveImage from "../../assets/images/petlove.webp";

const projectsData = [
  {
    id: 1,
    title: "Focus Frame",
    description:
      "A modern photography portfolio designed to showcase visual work, featuring a minimalist aesthetic and a responsive layout, built entirely with HTML and CSS.",
    techStack: ["HTML", "CSS"],
    role: "Frontend Developer",
    githubLink: "https://github.com/Focus-Frame-2-0/goit-focusframe-2",
    liveLink: "https://focus-frame-2-0.github.io/goit-focusframe-2/",
    image: focusFrameImage,
  },
  {
    id: 2,
    title: "Cinemania",
    description:
      "A dynamic platform powered by TMDB API integration, enabling users to discover the latest movies. It features advanced search, year-based filtering, and personalized library management capabilities.",
    techStack: ["HTML", "CSS", "JavaScript", "TMDB API"],
    role: "Frontend Developer",
    githubLink: "https://github.com/january-javaScript-project/cinemania",
    liveLink: "https://january-javascript-project.github.io/cinemania/",
    image: cinemaniaImage,
  },
  {
    id: 3,
    title: "Money Guard",
    description:
      "A financial management application that enables users to analyze their expenses through visual charts and category-based data. It features secure token-based session management and robust form validation.",
    techStack: ["React", "Redux Toolkit", "Formik", "REST API"],
    role: "Scrum Master & Developer",
    githubLink: "https://github.com/goit-react-project/money-guard",
    liveLink: "https://goit-react-money-guard.vercel.app/",
    image: moneyGuardImage,
  },
  {
    id: 4,
    title: "Slim Moms",
    description:
      "A full-stack application that calculates daily calorie requirements based on individual goals and supports diet tracking. As the team lead, I managed the project infrastructure, task allocation, and frontend-backend integration.",
    techStack: ["React", "Node.js", "MongoDB", "Swagger"],
    role: "Team Lead & Full-Stack Developer",
    githubLink: "https://github.com/slim-moms-project/slim-moms",
    liveLink: "https://slim-moms-nine.vercel.app/",
    image: slimMomsImage,
  },
  {
    id: 5,
    title: "Travel Trucks",
    description:
      "A campervan rental platform featuring comprehensive filtering, favorites management, and seamless booking workflows. REST API integration was implemented using Axios and MockAPI, with the global state optimized for improved performance and maintainability.",
    techStack: ["React", "Vite", "Redux", "Axios"],
    role: "Frontend Developer",
    githubLink: "https://github.com/keremyldrm61/travel-trucks",
    liveLink: "https://travel-trucks-steel-ten.vercel.app/",
    image: travelTrucksImage,
  },
  {
    id: 6,
    title: "Psychologists Services",
    description:
      "A Firebase-powered appointment booking system that allows users to filter experienced psychologists based on their areas of expertise and consultation fees. The application features dynamic theme options and is built with TypeScript to ensure type safety.",
    techStack: ["React", "TypeScript", "Firebase", "Custom Hooks"],
    role: "Full-Stack Developer",
    githubLink: "https://github.com/keremyldrm61/psychologists-services",
    liveLink: "https://psychologists-services-dusky.vercel.app/",
    image: psychologistsServicesImage,
  },
  {
    id: 7,
    title: "Petlove",
    description:
      "A pet adoption platform that enables users to securely create and manage listings through JWT-based authentication and Cloudinary REST API integration. Asynchronous data flow is efficiently managed using Redux Toolkit.",
    techStack: ["React", "TypeScript", "Redux Toolkit", "Cloudinary API"],
    role: "Full-Stack Developer",
    githubLink: "https://github.com/keremyldrm61/petlove",
    liveLink: "https://petlove-drab.vercel.app/",
    image: petloveImage,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-8 md:px-16 py-24 relative z-10"
    >
      {/* Başlık Alanı */}
      <div className="mb-16 md:mb-24" data-aos="fade-up">
        <span className="text-xs font-medium tracking-widest text-neutral-500 uppercase block mb-2">
          My Projects
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-100 leading-tight transition-colors duration-300">
          Featured <br />
          <span className="font-medium text-neutral-950 dark:text-white transition-colors duration-300">
            Projects
          </span>
        </h2>
      </div>

      {/* Projeler Grid Alanı */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative bg-white/50 dark:bg-neutral-900/30 backdrop-blur-md border border-neutral-200 dark:border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 flex flex-col"
          >
            {/* Görsel Alanı */}
            <div className="h-56 md:h-72 w-full bg-neutral-100 dark:bg-neutral-800/50 relative overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} Project Mockup`}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* İçerik Alanı */}
            <div className="p-6 md:p-8 flex flex-col grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2 block">
                    {project.role}
                  </span>
                  <h3 className="text-2xl font-medium text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Linkler (GitHub & Canlı Demo) */}
                <div className="flex items-center space-x-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        />
                      </svg>
                    </a>
                  )}
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6 grow">
                {project.description}
              </p>

              {/* Teknolojiler (Tech Stack Chips) */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800/50">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[11px] font-mono tracking-wider text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/50 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

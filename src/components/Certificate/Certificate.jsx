import React from "react";

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      title: "FULLSTACK DEVELOPER",
      issuer: "GoIT",
      date: 2026,
      desc: "Successfully completed an intensive Full-Stack Developer program at GoIT, encompassing over 675 hours of theoretical lectures, hands-on applications, and 4 comprehensive team projects. The curriculum covers end-to-end modern software development workflows, including responsive interface development aligned with modern web standards, asynchronous JavaScript architectures, React & Redux state management, Express and MongoDB-based REST API design, Swagger documentation, and TypeScript integration.",
      skills: [
        "HTML / CSS",
        "JavaScript",
        "React",
        "Redux / Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API / Swagger",
        "TypeScript",
        "Vite",
        "Git / GitHub",
      ],
    },
    {
      id: 2,
      title: "LEGACY RESPONSIVE WEB DESIGN V8",
      issuer: "freeCodeCamp",
      date: 2026,
      desc: "Successfully completed the web design certification provided by freeCodeCamp, representing approximately 300 hours of hands-on practice. The program provided deep expertise in semantic HTML5 architecture, advanced CSS3 layout modules (Flexbox and CSS Grid), responsive design principles, media queries, and web accessibility standards, culminating in the successful completion and submission of all required core projects.",
      skills: [
        "HTML5",
        "CSS3",
        "Flexbox",
        "CSS Grid",
        "Responsive Design",
        "Media Queries",
        "Web Accessibility",
      ],
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-20 relative block mb-2">
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="text-xs font-medium tracking-widest text-neutral-500 uppercase block mb-2">
          Achieved Milestones
        </span>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
          My{" "}
          <span className="font-medium text-neutral-950 dark:text-white">
            Certificates
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="group relative backdrop-blur-md bg-white/60 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-medium text-neutral-500 tracking-wider">
                  {cert.date}
                </span>
                <span className="px-2.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-[10px] uppercase font-semibold rounded-full border border-neutral-200 dark:border-neutral-700/50 transition-colors duration-300">
                  Verified
                </span>
              </div>
              <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                {cert.title}
              </h3>
              <p className="text-xl font-medium text-neutral-700 dark:text-neutral-400 mb-4 transition-colors duration-300">
                {cert.issuer}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6 transition-colors duration-300">
                {cert.desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800/50 transition-colors duration-300">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium px-2 py-1 bg-neutral-100 dark:bg-neutral-950/60 text-neutral-600 dark:text-neutral-400 rounded-md border border-neutral-200 dark:border-neutral-800 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

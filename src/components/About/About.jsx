const About = () => {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "7+", label: "Projects Completed" },
    { number: "2+", label: "Certificates Earned" },
    { number: "500+", label: "GitHub Commits" },
  ];

  return (
    <div
      id="about"
      className="w-full max-w-7xl mx-auto px-8 md:px-16 py-24 relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4 sticky top-24" data-aos="fade-right">
          <span className="text-xs font-medium tracking-widest text-neutral-500 uppercase block mb-2">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight transition-colors duration-300">
            About <br />
            <span className="font-medium text-neutral-950 dark:text-white transition-colors duration-300">
              My Journey
            </span>
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-12">
          <div
            className="space-y-6 text-neutral-600 dark:text-neutral-400 font-light text-base md:text-lg leading-relaxed transition-colors duration-300"
            data-aos="fade-up"
          >
            <p>
              I am a passionate Full-Stack Web Developer dedicated to building
              modern, high-performance web applications. My journey in software
              development is driven by a constant desire to turn complex
              problems into intuitive, user-centric digital experiences.
              <span className="text-neutral-900 dark:text-neutral-200 font-medium transition-colors duration-300">
                {" "}
                From scalable backend architectures
              </span>{" "}
              to pixel-perfect frontends, I thrive on crafting complete,
              end-to-end solutions.
            </p>
            <p>
              Having successfully completed an intensive Full-Stack Developer
              program at GoIT, I have cultivated strong expertise in
              technologies like React, JavaScript and TypeScript. Whether acting
              as a Scrum Master in collaborative agile environments or
              independently deploying robust applications, my core focus remains
              on writing clean, maintainable code and delivering impactful
              results.
            </p>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-300 dark:border-neutral-800 transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-4 rounded-xl hover:bg-neutral-200/50 dark:hover:bg-neutral-900/30 border border-transparent hover:border-neutral-300 dark:hover:border-neutral-800/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-light text-neutral-900 dark:text-white mb-1 tracking-tight group-hover:text-black dark:group-hover:text-neutral-200 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xs text-neutral-500 tracking-wide font-medium uppercase transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

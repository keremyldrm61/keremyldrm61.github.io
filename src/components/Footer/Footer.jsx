const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800/60 bg-transparent relative z-10 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* İsim ve Profesyonel Bio Alanı */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="text-lg font-medium tracking-wider text-neutral-900 dark:text-white transition-colors duration-300">
              KEREM{" "}
              <span className="font-light text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                YILDIRIM
              </span>
            </span>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light text-center md:text-left max-w-sm transition-colors duration-300">
              Full-Stack Developer dedicated to building scalable, modern, and
              user-centric web applications.
            </p>
          </div>

          {/* Sosyal Medya & İletişim Linkleri */}
          <div className="flex items-center space-x-6 text-sm font-light text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
            <a
              href="https://github.com/keremyldrm61"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kerem-yildirim-ky/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Alt Bilgi (Copyright & Slogan) */}
        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800/50 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300">
          <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-500">
            &copy; {currentYear} All rights reserved.
          </p>
          <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-500 tracking-widest">
            DESIGNED & CODED WITH PASSION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

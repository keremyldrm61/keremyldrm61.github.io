import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 'idle' | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState("idle");

  // Status değiştiğinde 3 saniye sonra 'idle' durumuna çekmek ve memory leak'i önlemek için useEffect kullanımı
  useEffect(() => {
    let timeoutId;
    if (status === "success" || status === "error") {
      timeoutId = setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
    // Component unmount olursa veya status tekrar değişirse sayacı temizle
    return () => clearTimeout(timeoutId);
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Sol Taraf - Bilgiler */}
        <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
          <div>
            <span className="text-xs font-medium tracking-widest text-neutral-500 uppercase block mb-2">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-100 leading-tight transition-colors duration-300">
              Let's Create <br />
              <span className="font-medium text-neutral-950 dark:text-white transition-colors duration-300">
                Something New
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-sm transition-colors duration-300">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a specific
            project in mind or just want to say hello, feel free to drop a
            message!
          </p>
          <div className="pt-6 space-y-4 text-sm font-light text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
            <div className="flex items-center space-x-3">
              <span className="text-neutral-500 dark:text-neutral-600 font-mono transition-colors duration-300">
                [ email ]
              </span>
              <a
                href="mailto:keremyldrm1670@gmail.com"
                className="hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                keremyldrm1670@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-neutral-500 dark:text-neutral-600 font-mono transition-colors duration-300">
                [ location ]
              </span>
              <span className="text-neutral-800 dark:text-neutral-300 transition-colors duration-300">
                Istanbul / Turkiye
              </span>
            </div>
          </div>
        </div>

        {/* Sağ Taraf - Form */}
        <div className="lg:col-span-7" data-aos-delay="200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot - Spam Koruması (Botlar doldurur, UI'da gizlidir) */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-500 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  disabled={status === "loading"}
                  className="w-full bg-white/50 dark:bg-neutral-900/30 backdrop-blur-md border border-neutral-300 dark:border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-600 disabled:opacity-50 transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-500 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  disabled={status === "loading"}
                  className="w-full bg-white/50 dark:bg-neutral-900/30 backdrop-blur-md border border-neutral-300 dark:border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-600 disabled:opacity-50 transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-neutral-500 uppercase">
                Your Message
              </label>
              <textarea
                required
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                disabled={status === "loading"}
                className="w-full bg-white/50 dark:bg-neutral-900/30 backdrop-blur-md border border-neutral-300 dark:border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-600 disabled:opacity-50 transition-colors duration-300"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="flex flex-col space-y-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-neutral-900 dark:bg-neutral-100 hover:bg-black dark:hover:bg-white text-white dark:text-neutral-950 text-sm font-medium rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center space-x-2 group disabled:opacity-70 disabled:cursor-not-allowed max-w-50"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </>
                )}
              </button>

              {/* Geri Bildirim Mesajları */}
              {status === "success" && (
                <span className="text-sm text-green-600 dark:text-green-400 font-medium animate-pulse">
                  Message sent successfully! I'll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                  Something went wrong. Please try again later.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

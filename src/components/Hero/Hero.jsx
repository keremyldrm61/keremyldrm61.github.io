import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import Spotlight from "./Spotlight/Spotlight";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      className="relative w-full min-h-screen text-neutral-900 dark:text-neutral-200 overflow-hidden flex items-center p-8 md:p-16 bg-transparent"
    >
      <Spotlight size={350} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-7xl mx-auto items-center mt-18 md:mt-0 lg:mt-0">
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-medium tracking-widest text-neutral-500 dark:text-neutral-500 uppercase">
              {t("hero.role")}
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-800 dark:text-neutral-100 leading-tight transition-colors duration-300">
              {t("hero.greeting")}{" "}
              <span className="font-medium text-neutral-950 dark:text-white">
                Kerem Yıldırım
              </span>
            </h1>
          </div>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md font-light transition-colors duration-300">
            {t("hero.description")}
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white dark:text-neutral-200 text-sm font-medium rounded-full border border-neutral-900 dark:border-neutral-800 transition-all duration-200 shadow-sm relative z-20 cursor-pointer"
            >
              {t("hero.contactBtn")}
            </button>
          </div>
        </div>
        <div className="lg:col-span-7 w-full h-75 md:h-100 lg:h-130 z-10 overflow-hidden relative">
          <Suspense
            fallback={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-neutral-300 border-t-neutral-800 dark:border-neutral-800 dark:border-t-neutral-400 animate-spin"></div>
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full object-cover"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Hero;

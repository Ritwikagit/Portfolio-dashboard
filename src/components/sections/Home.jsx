
import { RevealOnScroll } from "../RevealOnScroll";

/**
 * Home section dynamically styled based on theme.
 * @param {{ isDark: boolean }} props
 */
export const Home = ({ isDark }) => {
  return (
    <section
      id="home"
      className={`relative min-h-screen bg-[url('/images/laptop.jpg')] bg-cover bg-center flex items-center justify-center`}
    >
      {/* Overlay for better contrast */}
      <div
        className={`absolute inset-0 z-0 ${
          isDark ? "bg-black/70" : "bg-white/70"
        }`}
      />

      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-cyan-400 bg-clip-text text-transparent">
            Hello, I'm Ritwika
          </h1>

          <p
            className={`text-lg mb-8 max-w-lg mx-auto transition-colors duration-300 ${
              isDark ? "text-white font-bold" : " font-bold text-black-2000"
            }`}
          >
            Full-stack developer focused on crafting robust server-side logic
            and clean, engaging user interfaces to deliver seamless, scalable
            software solutions.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium hover:-translate-y-0.5 transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className={`py-3 px-6 rounded font-medium border ${
                isDark
                  ? "border-blue-400 text-blue-400 hover:bg-blue-400/10"
                  : "border-blue-500/50 text-blue-500 hover:bg-blue-500/10"
              } hover:-translate-y-0.5 transition hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]`}
            >
              Reach Out
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};


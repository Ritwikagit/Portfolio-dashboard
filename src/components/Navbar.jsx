
import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, isDark, toggleTheme }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className={`font-mono text-xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Ritwika<span className="text-blue-500"> Maity</span>
          </a>

          <div className="flex items-center space-x-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className={`transition-colors ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-800 hover:text-black"
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`transition-colors ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-800 hover:text-black"
                }`}
              >
                About
              </a>
              <a
                href="#projects"
                className={`transition-colors ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-800 hover:text-black"
                }`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`transition-colors ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-800 hover:text-black"
                }`}
              >
                Contact
              </a>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Mobile Menu Icon */}
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

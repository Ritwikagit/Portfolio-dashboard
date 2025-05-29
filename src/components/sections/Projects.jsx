
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = ({ isDark }) => {
  const projects = [
    {
      name: "Would You Rather",
      description: "Developed an interactive React voting application with Redux and Redux-Thunk for state management, React Router DOM for navigation, responsive Bulma CSS styling, loading indicators, and end-to-end testing using Cypress to ensure performance and reliability.",
      technologies: ["React", "Bulma", "Redux"],
      github: "https://github.com/Ritwikagit/would-you-rather.git",
    },
    {
      name: "Stock Market Analysis",
      description: "Developed a dynamic stock market analysis platform with multi-page navigation, real-time API data integration for accurate market insights, and interactive JavaScript charts ensuring a responsive experience across desktop and mobile devices.",
      technologies: ["HTML", "CSS", "TailwindCSS"],
      github: "https://github.com/Ritwikagit/Stock-Market-Analysis.git",
    },
    {
      name: "Phishing Website Detection",
      description: "Developed a phishing website detection model using URL-based feature extraction and ML algorithms like Random Forest and SVM, improving accuracy through data preprocessing and model optimization.",
      technologies: ["Machine Learning", "Web Security"],
      github: "https://github.com/Ritwikagit/Phishing-Website.git",
    },
     {
      name: "Bank Security Application",
      description: "Developed a Spring Boot banking security system featuring JWT authentication, Spring Security with role-based access control, modular RESTful APIs using Spring Data JPA, Hibernate, DTOs for efficient CRUD operations, and Maven for dependency management.",

      technologies: ["SpringBoot", "RestfulAPIs", "Spring Security"],
      github: "https://github.com/Ritwikagit/Bank-Security-Application.git",
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 border rounded-xl transition-all hover:-translate-y-1 ${isDark ? "border-white/10 text-gray-300" : "border-gray-200 text-gray-800"}`}
              >
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-700"}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium hover:underline"
                >
                  View Code →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};


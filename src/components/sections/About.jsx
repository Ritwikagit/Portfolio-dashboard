import { RevealOnScroll } from "../RevealOnScroll";

export const About = ({ isDark }) => {
  const frontendStack = ["React", "Redux", "JQuery", "TailwindCSS", "BulmaCSS"];
  const backendStack = ["SpringBoot", "Python", "Java", "SQL"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className={`p-8 border rounded-xl transition-all hover:-translate-y-1 ${isDark ? "border-white/10 text-gray-300" : "border-gray-200 text-gray-800"}`}>
            <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Dedicated full stack engineer focused on building user-friendly digital solutions with strong backend foundations and polished frontends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[["Frontend Skills", frontendStack], ["Backend Skills", backendStack]].map(([title, stack], idx) => (
                <div key={idx} className="p-6 rounded-xl hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">{title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              {
                title: "🏫 Education",
                content: (
                  <ul className={`list-disc list-inside space-y-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    <li><strong>B.Tech in Computer Science</strong> – Haldia Institute of Technology (2022–2026)</li>
                    <li>Key Courses: DSA, OOP, Machine Learning, OS, Java, C, Python</li>
                  </ul>
                )
              },
              {
                title: "💼 Experience",
                content: (
                  <div className={`${isDark ? "text-gray-300" : "text-gray-700"} space-y-4`}>
                    <div>
                      <h4 className="font-semibold">JPMorgan Chase Virtual Experience (Jan 2025)</h4>
                      <p>Built a backend using Kafka for asynchronous messaging, H2 for data storage, and REST APIs for secure balance queries.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">PwC Launchpad Program 3.0 (Feb–July 2025)</h4>
                      <p>Participated in hands-on training across full-stack development, DevOps, cloud, and consulting, guided by industry experts.</p>
                    </div>
                  </div>
                )
              }
            ].map(({ title, content }, idx) => (
              <div key={idx} className={`p-6 border rounded-xl transition hover:-translate-y-1 ${isDark ? "border-white/10" : "border-gray-200"}`}>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                {content}
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};


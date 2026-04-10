import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Projects = () => {
  const projects = [
    {
      title: "Smart Tracker",
      description:
        "A full-stack task management app that helps users organize tasks, track productivity, and manage daily workflow with a clean and responsive UI.",
      tech: ["React", "Node.js", "Render", "Express"],
      github: "https://github.com/Vishalsinghkhati/smart-tracker.git",
      live: "smart-tracker-eta.vercel.app",
      featured: true,
    },
    {
      title: "Finance Dashboard",
      description:
        "Interactive finance dashboard for tracking expenses, income analytics, and visual insights using charts and real-time data visualization.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      github: "https://github.com/Vishalsinghkhati/Finance_dashborad.git",
      live: "finance-vishaldashborad-one.vercel.app",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal developer portfolio showcasing projects, skills, and experience with modern UI, animations, and responsive design.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/Vishalsinghkhati/portfolio.git",
      live: "https://portfolio-vishalsinghkhatis-projects.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            Projects
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <Reveal key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="
                  glass
                  p-6
                  rounded-xl
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                  transition duration-300
                "
              >

                {/* Featured Badge */}
                {project.featured && (
                  <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full mb-3 inline-block">
                    Featured Project
                  </span>
                )}

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        text-xs 
                        bg-gray-800 
                        px-3 
                        py-1 
                        rounded-full
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-2">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      border border-gray-600
                      px-4 py-2
                      rounded-lg
                      text-sm
                      hover:bg-white hover:text-black
                      transition
                    "
                  >
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      bg-gradient-to-r from-blue-500 to-purple-500
                      px-4 py-2
                      rounded-lg
                      text-sm
                      hover:opacity-90
                      transition
                    "
                  >
                    Live
                  </a>

                </div>

              </motion.div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects

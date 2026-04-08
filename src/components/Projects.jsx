import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Projects = () => {
  const projects = [
    {
      title: "CampusNav AI",
      description:
        "Smart campus navigation system using graph based pathfinding and AI chatbot.",
      tech: ["React", "Node", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "PushUpPal",
      description:
        "AI based fitness trainer using pose detection and gamified workouts.",
      tech: ["React", "TensorFlow", "Node"],
      github: "#",
      live: "#",
    },
    {
      title: "Finance Dashboard",
      description:
        "Full stack finance dashboard for tracking expenses and analytics.",
      tech: ["React", "Node", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "AI Notes Generator",
      description:
        "Generate notes automatically from YouTube videos using AI.",
      tech: ["React", "Node", "AI"],
      github: "#",
      live: "#",
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

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

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
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    className="
                    border 
                    border-gray-600 
                    px-4 
                    py-2 
                    rounded-lg
                    hover:bg-white 
                    hover:text-black 
                    transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="
                    bg-blue-500 
                    px-4 
                    py-2 
                    rounded-lg
                    hover:bg-blue-600
                    transition
                    "
                  >
                    Live Demo
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
import { motion } from "framer-motion"
import Reveal from "./Reveal"

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa"

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiTensorflow
} from "react-icons/si"

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, level: 85 },
    { name: "JavaScript", icon: <SiJavascript />, level: 80 },
    { name: "Tailwind", icon: <SiTailwindcss />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs />, level: 75 },
    { name: "MongoDB", icon: <SiMongodb />, level: 70 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 65 },
    { name: "Git", icon: <FaGitAlt />, level: 80 },
    { name: "HTML", icon: <FaHtml5 />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt />, level: 85 },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            Skills
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <Reveal key={index}>
              <motion.div
                whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                glass
                p-6
                rounded-xl
                hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                transition duration-300
                "
              >
                <div className="flex items-center gap-4 mb-4">

                  <div className="text-2xl text-blue-400">
                    {skill.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="bg-blue-500 h-2 rounded-full"
                      />
                    </div>

                  </div>

                </div>
              </motion.div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills
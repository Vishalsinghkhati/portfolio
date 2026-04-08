import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import profile from "../assets/profile.JPG"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Vishal Khati
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "AI Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl text-gray-400"
          />

          <p className="mt-6 text-gray-400 max-w-lg">
            Passionate Full Stack Developer building modern applications
            using React, Node.js and AI technologies.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <a
              href="/resume.pdf"
              download
              className="
              bg-blue-500 
              px-6 
              py-3 
              rounded-xl
              hover:bg-blue-600
              transition
              "
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="
              border 
              border-gray-600 
              px-6 
              py-3 
              rounded-xl
              hover:bg-white 
              hover:text-black
              transition
              "
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* Right Side Profile Image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <div
            className="
            glass
            p-2
            rounded-full
            hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]
            transition duration-300
            "
          >
            <img
              src={profile}
              alt="Profile"
              className="
              w-64 
              h-64 
              object-cover 
              rounded-full
              "
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero

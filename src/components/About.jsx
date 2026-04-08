import Reveal from "./Reveal"

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-10">
            About Me
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto">
            I'm a Full Stack Developer passionate about building modern web
            applications using React, Node.js and AI technologies.
          </p>
        </Reveal>

      </div>
    </section>
  )
}

export default About
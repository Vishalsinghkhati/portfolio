import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center glass rounded-xl px-6 py-3">

        <h1 className="font-bold text-lg">
          Vishal
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="glass mt-2 rounded-xl p-4 md:hidden">
          <ul className="space-y-2">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar
import { useEffect, useState } from "react"

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="fixed w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0"
      style={{
        left: position.x - 200,
        top: position.y - 200,
      }}
    />
  )
}

export default MouseGlow
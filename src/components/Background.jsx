import { motion } from "framer-motion"

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-20 left-20"
      />

      <motion.div
        animate={{
          x: [0, -60, 60, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-20"
      />

    </div>
  )
}

export default Background
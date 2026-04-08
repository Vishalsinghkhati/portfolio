import { useState } from "react"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        alert("Message Sent Successfully 🚀")

        setForm({
          name: "",
          email: "",
          message: "",
        })

      } else {
        alert("Something went wrong")
      }

    } catch (error) {
      alert("Error sending message")
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-24">

      <div className="max-w-4xl mx-auto px-6">

        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-12">
            Contact Me
          </h2>
        </Reveal>

        <Reveal>
          <motion.form
            onSubmit={handleSubmit}
            className="
            glass
            p-8
            rounded-2xl
            space-y-6
            hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
            transition
            "
          >

            {/* Name */}
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="
              w-full
              p-4
              rounded-lg
              bg-gray-800
              border border-gray-700
              focus:outline-none
              focus:border-blue-500
              "
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Your Email"
              onChange={handleChange}
              required
              className="
              w-full
              p-4
              rounded-lg
              bg-gray-800
              border border-gray-700
              focus:outline-none
              focus:border-blue-500
              "
            />

            {/* Message */}
            <textarea
              name="message"
              rows="5"
              value={form.message}
              placeholder="Your Message"
              onChange={handleChange}
              required
              className="
              w-full
              p-4
              rounded-lg
              bg-gray-800
              border border-gray-700
              focus:outline-none
              focus:border-blue-500
              "
            />

            {/* Button */}
            <button
              disabled={loading}
              className="
              w-full
              bg-blue-500
              py-4
              rounded-lg
              font-semibold
              hover:bg-blue-600
              transition
              disabled:opacity-50
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>
        </Reveal>

      </div>

    </section>
  )
}

export default Contact
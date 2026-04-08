import nodemailer from "nodemailer"

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { name, email, message } = req.body

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: `Portfolio Message from ${name}`,
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `,
    })

    return res.status(200).json({
      success: true
    })

  } catch (error) {
    return res.status(500).json({
      success: false
    })
  }
}
# Vishal Khati's Portfolio

This is the personal portfolio of Vishal Khati, a fresher Full Stack Developer, showcasing projects, skills, and a contact form.

## 🔗 Live Demo

[Portfolio Live Link](https://portfolio-1wvb9vaeh-vishalsinghkhatis-projects.vercel.app)

## 🛠 Technologies Used

- **Frontend:** React, Vite, Tailwind CSS v4  
- **Backend (Serverless):** Vercel API functions with Node.js & Nodemailer  
- **Version Control:** Git, GitHub  
- **Deployment:** Vercel  

## 🖥 Features

- Modern, responsive, and animated UI using Tailwind CSS and Framer Motion  
- Hero section with profile picture  
- About section, Skills, Projects showcase  
- Contact form that sends emails using NodeMailer  
- Resume download button  
- Fully deployed and live on Vercel  

## 📁 Project Structure

```
portfolio_frontend/
├── public/
├── src/
│   ├── components/        # React components (Hero, About, Projects, Contact)
│   ├── assets/            # Images, profile picture
│   └── api/contact.js     # Serverless function for email
├── index.css              # Tailwind import
├── main.jsx
├── package.json
└── README.md
```

## 🚀 Installation & Setup Locally

1. Clone the repo:

```bash
git clone https://github.com/Vishalsinghkhati/portfolio.git
cd portfolio_frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run locally:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Deploy on Vercel:

```bash
vercel
```

## 📝 Environment Variables (For Contact Form)

Create a `.env` file or use Vercel Environment Variables:

```env
EMAIL=yourgmail@gmail.com
PASSWORD=your-gmail-app-password
```

> ⚠️ Use Gmail App Password, not your main Gmail password.

## ⚡ Problems Faced & Resolutions

1. **Tailwind v4 Configuration Issue**
   - Problem: Initial setup failed due to Tailwind v3 config style.
   - Resolution: Removed `tailwind.config.js` and directly imported Tailwind in `index.css` as per v4 docs.

2. **Case-sensitive File Paths on Deployment**
   - Problem: Deployment failed due to `profile.jpg` vs `profile.JPG` on Vercel .
   - Resolution: Renamed files to lowercase and updated imports.

3. **Email Sending Fails in Deployment**
   - Problem: Contact form works locally but fails on Vercel with 500 error.
   - Resolution: Added Gmail App Password as environment variable in Vercel, and ensured API path is correct.

4. **Vercel Linking Wrong Project**
   - Problem: Portfolio tried deploying as `finance-dashboard`.
   - Resolution: Deleted `.vercel` folder and deployed as a new project.

5. **Nodemailer Authentication Issues**
   - Problem: Gmail password rejected.
   - Resolution: Used Gmail App Password and added environment variables correctly.

author ***vishal singh khati**

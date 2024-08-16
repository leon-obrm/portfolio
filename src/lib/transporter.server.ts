import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from "$env/static/private"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: GOOGLE_EMAIL,
        pass: GOOGLE_EMAIL_PASSWORD,
    },
})

transporter.verify((error) => {
    if (error) console.log(error)
    else console.log("Email server is ready for messages")
})

export default transporter

import { GOOGLE_EMAIL } from "$env/static/private"
import transporter from "$lib/transporter.server"

// Sends email with data from contact form
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()

        const name = formData.get("name")
        const email = formData.get("email")
        const message = formData.get("message")

        // Check if all required fields are present
        if (!name || !email || !message) {
            console.error("Missing form data:", { name, email, message })
            return {
                status: 400,
                body: { error: "Missing form data" },
            }
        }

        // Add email header
        let html = `<h4>Email from ${name} (${email})</h4>`

        // Add email body
        String(message)
            .split("\n")
            .forEach((paragraph: string) => {
                html += `<p>${paragraph}</p>`
            })

        // Build email object
        const newEmail = {
            from: GOOGLE_EMAIL,
            to: "leon.oberm@gmail.com",
            subject: "Portfolio Contact Form",
            html: html,
        }

        // Send email
        await new Promise((resolve, reject) => {
            transporter.sendMail(newEmail, (err, info) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else resolve(info)
            })
        })

        console.log(`Email sent from ${name} (${email})`)
    },
}

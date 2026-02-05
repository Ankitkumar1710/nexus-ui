// 
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // detect form type
    const isPartner = body.businessType !== undefined

    // ===============================
    // PARTNER FORM MAIL
    // ===============================
    if (isPartner) {

      const { name, phone, email, businessType, description } = body

      await resend.emails.send({
        from: "Website Lead <onboarding@resend.dev>",
        to: ["caffeine.indiaa@gmail.com"], // <-- apna mail
        subject: "🤝 New Partner Request",
        html: `
        <h2>New Partner Request</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email || "Not provided"}</p>
        <p><b>Business Type:</b> ${businessType}</p>
        <p><b>Description:</b> ${description}</p>
        `,
      })

    } else {

      // ===============================
      // JOB FORM MAIL
      // ===============================
      const { name, phone, email, location, jobType, experience } = body

      await resend.emails.send({
        from: "Website Job <onboarding@resend.dev>",
        to: ["caffeine.indiaa@gmail.com"],
        subject: "🧑 New Job Application",
        html: `
        <h2>New Job Application</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email || "Not provided"}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Job Type:</b> ${jobType}</p>
        <p><b>Experience:</b> ${experience}</p>
        `,
      })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("MAIL ERROR:", error)
    return NextResponse.json({ success: false })
  }
}

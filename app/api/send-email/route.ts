import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, phone, email, location, jobType, experience } = body

    const data = await resend.emails.send({
      from: 'Job Application <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL!],
      subject: 'New Job Application Received',
      html: `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Job Type:</b> ${jobType}</p>
        <p><b>Experience:</b> ${experience}</p>
      `
    })

    return NextResponse.json({ success: true, data })

  } catch (error) {
    console.error('EMAIL ERROR:', error)

    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}

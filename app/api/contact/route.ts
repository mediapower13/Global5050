import { type NextRequest, NextResponse } from "next/server"
import { saveContactSubmission } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid email format" }, { status: 400 })
    }

    // Get client info
    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const userAgent = request.headers.get("user-agent") || "unknown"

    // Save to database
    const dbResult = await saveContactSubmission({
      name,
      email,
      phone,
      service,
      message,
      ipAddress,
      userAgent,
    })

    // Send email via Formspree
    const formspreeResponse = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        service,
        message,
        _replyto: email,
        _subject: `New inquiry from ${name} - Global 50:50 Concepts`,
        _cc: process.env.COMPANY_EMAIL,
      }),
    })

    let emailSent = false
    if (formspreeResponse.ok) {
      emailSent = true
      console.log("Email sent successfully via Formspree")
    } else {
      console.error("Formspree error:", await formspreeResponse.text())
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We will get back to you within 24 hours.",
      submissionId: dbResult.id,
      emailSent,
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again or call us directly at 0906 736 1349.",
      },
      { status: 500 },
    )
  }
}

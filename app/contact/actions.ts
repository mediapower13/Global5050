"use server"

import { saveContactSubmission } from "@/lib/database"
import { headers } from "next/headers"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email format" }
  }

  try {
    // Get client info
    const headersList = headers()
    const ipAddress = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown"
    const userAgent = headersList.get("user-agent") || "unknown"

    // Save to database first
    const dbResult = await saveContactSubmission({
      name,
      email,
      phone,
      service,
      message,
      ipAddress,
      userAgent,
    })

    console.log("Contact submission saved to database:", dbResult)

    // Send email via Formspree
    const formspreeResponse = await fetch(
      process.env.FORMSPREE_ENDPOINT || `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`,
      {
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
          _template: "table",
        }),
      },
    )

    if (!formspreeResponse.ok) {
      console.error("Formspree error:", await formspreeResponse.text())
      // Don't fail the entire request if email fails, since we saved to DB
      console.log("Email failed but contact saved to database")
    } else {
      console.log("Email sent successfully via Formspree")
    }

    return {
      success: true,
      message: "Thank you for your message! We will get back to you within 24 hours.",
      submissionId: dbResult.id,
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error: "Failed to send message. Please try again or call us directly at 0906 736 1349." }
  }
}

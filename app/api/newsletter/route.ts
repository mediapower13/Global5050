import { type NextRequest, NextResponse } from "next/server"
import { saveNewsletterSubscription } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid email address" }, { status: 400 })
    }

    // Get client info
    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const userAgent = request.headers.get("user-agent") || "unknown"

    // Save to database
    const dbResult = await saveNewsletterSubscription({
      email,
      ipAddress,
      userAgent,
    })

    console.log("Newsletter subscription saved:", dbResult)

    // Optional: Send welcome email via Formspree
    try {
      if (process.env.FORMSPREE_NEWSLETTER_ID) {
        await fetch(`https://formspree.io/f/${process.env.FORMSPREE_NEWSLETTER_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            _subject: `Newsletter Subscription - Global 50:50 Concepts`,
            message: `New newsletter subscription from: ${email}`,
            _template: "table",
          }),
        })
      }
    } catch (emailError) {
      console.error("Newsletter email notification failed:", emailError)
      // Don't fail the subscription if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter!",
      subscriptionId: dbResult.id,
    })
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to subscribe. Please try again.",
      },
      { status: 500 },
    )
  }
}

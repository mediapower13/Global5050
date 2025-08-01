// Simple database simulation for contact and newsletter submissions
// In production, replace with actual database implementation

// Database types
interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string
  service?: string
  message: string
  ipAddress: string
  userAgent: string
  createdAt: Date
}

interface NewsletterSubscription {
  id: string
  email: string
  ipAddress: string
  userAgent: string
  createdAt: Date
}

// In-memory storage (replace with actual database in production)
const contactSubmissions: ContactSubmission[] = []
const newsletterSubscriptions: NewsletterSubscription[] = []

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Database helper functions using in-memory storage for development
export async function saveContactSubmission(data: {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
  ipAddress?: string
  userAgent?: string
}) {
  const submission: ContactSubmission = {
    id: generateId(),
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,
    message: data.message,
    ipAddress: data.ipAddress || "unknown",
    userAgent: data.userAgent || "unknown",
    createdAt: new Date(),
  }
  
  contactSubmissions.push(submission)
  
  // Log to console for debugging
  console.log("Contact submission saved:", submission)
  
  return { success: true, id: submission.id }
}

export async function saveNewsletterSubscription(data: {
  email: string
  ipAddress?: string
  userAgent?: string
}) {
  // Check if email already exists
  const existingSubscription = newsletterSubscriptions.find(sub => sub.email === data.email)
  if (existingSubscription) {
    return { success: true, id: existingSubscription.id, message: "Already subscribed" }
  }
  
  const subscription: NewsletterSubscription = {
    id: generateId(),
    email: data.email,
    ipAddress: data.ipAddress || "unknown",
    userAgent: data.userAgent || "unknown", 
    createdAt: new Date(),
  }
  
  newsletterSubscriptions.push(subscription)
  
  // Log to console for debugging
  console.log("Newsletter subscription saved:", subscription)
  
  return { success: true, id: subscription.id }
}

export async function getContactSubmissions(limit = 50, offset = 0) {
  const submissions = contactSubmissions
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(offset, offset + limit)
  
  return submissions
}

export async function getNewsletterSubscriptions(limit = 50, offset = 0) {
  const subscriptions = newsletterSubscriptions
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(offset, offset + limit)
  
  return subscriptions
}

// Export types for use in other files
export type { ContactSubmission, NewsletterSubscription }

import { Pool } from "pg"

// Create a connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Test the connection
pool.on("connect", () => {
  console.log("Connected to PostgreSQL database")
})

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err)
  process.exit(-1)
})

export { pool }

// Database helper functions
export async function saveContactSubmission(data: {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
  ipAddress?: string
  userAgent?: string
}) {
  const client = await pool.connect()
  try {
    const query = `
      INSERT INTO contact_submissions (name, email, phone, service, message, ip_address, user_agent)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, submitted_at
    `
    const values = [
      data.name,
      data.email,
      data.phone || null,
      data.service || null,
      data.message,
      data.ipAddress || null,
      data.userAgent || null,
    ]

    const result = await client.query(query, values)
    return result.rows[0]
  } finally {
    client.release()
  }
}

export async function saveNewsletterSubscription(data: {
  email: string
  ipAddress?: string
  userAgent?: string
}) {
  const client = await pool.connect()
  try {
    const query = `
      INSERT INTO newsletter_subscriptions (email, ip_address, user_agent)
      VALUES ($1, $2, $3)
      ON CONFLICT (email) 
      DO UPDATE SET 
        status = 'active',
        subscribed_at = CURRENT_TIMESTAMP,
        unsubscribed_at = NULL,
        updated_at = CURRENT_TIMESTAMP
      RETURNING id, subscribed_at
    `
    const values = [data.email, data.ipAddress || null, data.userAgent || null]

    const result = await client.query(query, values)
    return result.rows[0]
  } finally {
    client.release()
  }
}

export async function getContactSubmissions(limit = 50, offset = 0) {
  const client = await pool.connect()
  try {
    const query = `
      SELECT id, name, email, phone, service, message, status, submitted_at
      FROM contact_submissions
      ORDER BY submitted_at DESC
      LIMIT $1 OFFSET $2
    `
    const result = await client.query(query, [limit, offset])
    return result.rows
  } finally {
    client.release()
  }
}

export async function getNewsletterSubscriptions(limit = 50, offset = 0) {
  const client = await pool.connect()
  try {
    const query = `
      SELECT id, email, status, subscribed_at
      FROM newsletter_subscriptions
      WHERE status = 'active'
      ORDER BY subscribed_at DESC
      LIMIT $1 OFFSET $2
    `
    const result = await client.query(query, [limit, offset])
    return result.rows
  } finally {
    client.release()
  }
}

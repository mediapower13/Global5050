const { Pool } = require("pg")
const fs = require("fs")
const path = require("path")

async function setupDatabase() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  })

  try {
    console.log("🔄 Setting up database...")

    // Read and execute the SQL file
    const sqlFile = path.join(__dirname, "create-database-tables.sql")
    const sql = fs.readFileSync(sqlFile, "utf8")

    await pool.query(sql)

    console.log("✅ Database setup completed successfully!")
    console.log("📊 Tables created:")
    console.log("   - contact_submissions")
    console.log("   - newsletter_subscriptions")
    console.log("   - quote_requests")
    console.log("🔍 Indexes and triggers created")
  } catch (error) {
    console.error("❌ Database setup failed:", error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

setupDatabase()

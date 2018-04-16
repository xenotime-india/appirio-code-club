// Load .env configuration file
require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8080,
  DATABASE_URL: process.env.DATABASE_URL,
  WEBHOOK_SECRET: process.env.WEBHOOK_SECRET || "development",
  APP_ID: process.env.APP_ID,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
  MONGO_URI: process.env.MONGODB_URI,
}
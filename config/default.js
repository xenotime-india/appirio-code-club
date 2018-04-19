// Load .env configuration file
require('dotenv').config();
const fs = require('fs');
const path = require('path');


module.exports = {
  PORT: process.env.PORT || 8080,
  DATABASE_URL: process.env.DATABASE_URL,
  WEBHOOK_SECRET: process.env.WEBHOOK_SECRET || "development",
  APP_ID: process.env.APP_ID,
  PRIVATE_KEY: process.env.PRIVATE_KEY || fs.readFileSync(path.join(__dirname,'../','private-key.pem')),
  MONGO_URI: process.env.MONGODB_URI,
}
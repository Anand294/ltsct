const fs = require('fs'); // File system module to read the certificate file
const { Pool } = require('pg'); // Destructure to get Pool from 'pg'

const pool = new Pool({
  user: "avnadmin",
  host: "pg-20f2c223-weeklyreport.c.aivencloud.com",
  database: "defaultdb",
  password: "AVNS_QskApNat72X31efqtpI",
  port: 24531,
  ssl: {
    rejectUnauthorized: true, // Enable verification of server certificate
    ca: fs.readFileSync('C:/Users/anand.kumar1/Downloads/ca.pem').toString(), // Path to the CA certificate file
  },
});
module.exports=pool;
var mysql = require('mysql');

const db = mysql.createConnection({
  host: 'database-test-public.cxue6sqakt87.us-east-2.rds.amazonaws.com',
  user: 'admin',
  // password: process.env.DB_KEY,
  password: 'admin123456',
  database: 'blog',
});

module.exports = { db};
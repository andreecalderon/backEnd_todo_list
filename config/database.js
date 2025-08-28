const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'bcipz0ziwdwj4rwhokl8-mysql.services.clever-cloud.com',
  user: 'uvocmtqg4jdidxcm',
  password: 'H7pMHw8GB5wOBfeau2Bc',
  database: 'bcipz0ziwdwj4rwhokl8',
});

module.exports = pool.promise();
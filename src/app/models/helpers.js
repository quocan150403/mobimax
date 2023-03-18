const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');

// const db = mysql.createConnection({
//   host: process.env.DB_HOST || 'localhost',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASSWORD || '',
//   database: process.env.DB_NAME || 'mobimax',
// });

// db.connect((error) => {
//   if (error) throw error;
//   console.log('Successfully connected to the database.');
// });

async function connection() {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(dbConfig);
    connection.connect((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(connection);
    });
  });
}

async function query(conn, q, params) {
  return new Promise((resolve, reject) => {
    const handler = (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    };
    conn.query(q, params, handler);
  });
}
module.exports = { connection, query };

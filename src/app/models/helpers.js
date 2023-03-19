const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');

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

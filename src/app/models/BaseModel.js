const { connection, query } = require('./helpers');

class BaseModel {
  constructor(tableName) {
    this.table = tableName;
  }

  async find() {
    const sql = `SELECT * FROM ${this.table}`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const row = await query(conn, sql).catch((err) => {
      throw err;
    });
    return row;
  }

  async findById(id) {
    let sql = `SELECT * FROM ${this.table} WHERE id = ${id}`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const row = await query(conn, sql).catch((err) => {
      throw err;
    });
    return row[0];
  }

  async findBySlug(slug, all = false) {
    let sql = `SELECT * FROM ${this.table} WHERE slug = '${slug}'`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const row = await query(conn, sql).catch((err) => {
      throw err;
    });
    return row[0];
  }

  async create(newData) {
    const sql = `INSERT INTO ${this.table} SET ?`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const row = await query(conn, sql, newData).catch((err) => {
      throw err;
    });
    return { id: row.insertId, ...newData };
  }

  async update(id, newData) {
    const sql = `UPDATE ${this.table} SET ? WHERE id = ?`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    await query(conn, sql, [newData, id]).catch((err) => {
      throw err;
    });
    return { id, ...newData };
  }

  async delete(id) {
    const sql = `DELETE FROM ${this.table} WHERE id = ?`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const result = await query(conn, sql, [id]).catch((err) => {
      throw err;
    });
    return !!result.affectedRows;
  }
}
module.exports = BaseModel;

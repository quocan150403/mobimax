const { connection, query } = require('./helpers');

class ProductModel {
  constructor() {
    this.table = 'products';
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
    const sql = `SELECT * FROM ${this.table} WHERE id = ${id}`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const row = await query(conn, sql).catch((err) => {
      throw err;
    });
    return row[0];
  }

  async findBySlug(slug) {
    const sql = `SELECT * FROM ${this.table} WHERE slug = '${slug}'`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const row = await query(conn, sql).catch((err) => {
      throw err;
    });
    return row[0];
  }

  async findByType(type) {
    const sql = `SELECT * FROM ${this.table} ORDER BY ${type} DESC LIMIT 6`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const row = await query(conn, sql).catch((err) => {
      throw err;
    });
    return row;
  }

  async findByIdCategory(idCategory) {
    const sql = `SELECT * FROM ${this.table} WHERE id_category = ${idCategory}`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const row = await query(conn, sql).catch((err) => {
      throw err;
    });
    return row;
  }

  async findByIdBrand(idBrand) {
    const sql = `SELECT * FROM ${this.table} WHERE id_brand = ${idBrand}`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const row = await query(conn, sql).catch((err) => {
      throw err;
    });
    return row;
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
    // const sql = 'UPDATE products SET ? WHERE id = ?';
    // db.query(sql, [newData, id], (err, res) => {
    //   if (err) throw err;
    //   callback(null, { id, ...newData });
    // });
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
    // const sql = 'DELETE FROM products WHERE id = ?';
    // db.query(sql, [id], (err, res) => {
    //   if (err) throw err;
    //   callback(null, res);
    // });
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

module.exports = new ProductModel();

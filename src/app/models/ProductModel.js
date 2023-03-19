const BaseModel = require('./BaseModel');
const { connection, query } = require('./helpers');

class ProductModel extends BaseModel {
  constructor() {
    super('products');
  }

  async findBySlug(slug, all = false) {
    let sql = `SELECT * FROM ${this.table} WHERE slug = '${slug}'`;
    if (all) {
      sql = `SELECT products.*, 
            categories.name as name_category, 
            brands.name as name_brand,
            COUNT(comments.id) as count_comment,
            AVG(comments.rating) as avg_rating
              FROM ${this.table} products
              JOIN categories ON products.id_category = categories.id
              JOIN brands ON products.id_brand = brands.id
              LEFT JOIN comments ON products.id = comments.id_product
              GROUP BY products.slug HAVING products.slug = '${slug}' `;
    }
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

  async updateViewAndRating(id, rating) {
    const sql = `UPDATE ${this.table} SET view = view + 1, rating = ${rating} WHERE id = ${id}`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const result = query(conn, sql).catch((err) => {
      throw err;
    });
  }
}
module.exports = new ProductModel();

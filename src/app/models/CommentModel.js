const BaseModel = require('./BaseModel');
const { connection, query } = require('./helpers');

class CommentModel extends BaseModel {
  constructor() {
    super('comments');
    this.tableName = 'comments';
  }

  async findByProductId(id) {
    const sql = `SELECT comments.*, 
                  users.username as name_user, 
                  users.avatar as avatar_user
                    FROM ${this.tableName} 
                    JOIN users ON comments.id_user = users.id
                    WHERE comments.id_product = ?`;
    const conn = await connection().catch((err) => {
      throw err;
    });
    const result = await query(conn, sql, [id]).catch((err) => {
      throw err;
    });
    conn.end();
    return result;
  }
}
module.exports = new CommentModel();

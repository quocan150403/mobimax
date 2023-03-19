const BaseModel = require('./BaseModel');
const { connection, query } = require('./helpers');

class CategoryModel extends BaseModel {
  constructor() {
    super('categories');
  }
}

module.exports = new CategoryModel();

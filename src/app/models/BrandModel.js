const BaseModel = require('./BaseModel');
const { connection, query } = require('./helpers');

class BrandModel extends BaseModel {
  constructor() {
    super('brands');
  }
}

module.exports = new BrandModel();

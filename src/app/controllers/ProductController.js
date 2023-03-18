const Product = require('../models/ProductModel');
class ProductController {
  // [GET] product/:slug
  async index(req, res, next) {
    const slug = req.params.slug;
    const product = await Product.findBySlug(slug);
    const { id_category, id } = product;
    const products = await Product.findByIdCategory(id_category, id);
    const relatedProducts = products.filter((item) => item.id_product !== id);
    res.render('client/product', { product, relatedProducts });
  }
}
module.exports = new ProductController();

const Product = require('../models/ProductModel');
const Comment = require('../models/CommentModel');
class ProductController {
  // [GET] product/:slug
  async index(req, res, next) {
    const slug = req.params.slug;
    const product = await Product.findBySlug(slug, true);
    const { id, id_category, avg_rating } = product;
    await Product.updateViewAndRating(id, avg_rating || 0);
    const comments = await Comment.findByProductId(id);
    const productsFromIdCategory = await Product.findByIdCategory(id_category);
    const relatedProducts = productsFromIdCategory.filter((item) => item.id !== id);
    res.render('client/product', { product, relatedProducts, comments });
  }

  // [POST] product/post-comment/:id
  async postComment(req, res, next) {
    const id_product = req.params.id;
    const data = req.body;
    const id_user = 1;
    const newComment = {
      ...data,
      id_user,
      id_product,
    };
    await Comment.create(newComment);
    res.redirect('back');
  }
}
module.exports = new ProductController();

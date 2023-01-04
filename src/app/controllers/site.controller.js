class siteController {
  // [GET] /
  index(req, res, next) {
    res.render("client/home");
  }

  // [GET] /shop
  shop(req, res, next) {
    res.render("client/shop");
  }

  // [GET] /about
  about(req, res, next) {
    res.render("client/about");
  }

  // [GET] /cart
  cart(req, res, next) {
    res.render("client/cart");
  }

  // [GET] /checkout
  checkout(req, res, next) {
    res.render("client/checkout");
  }

  // [GET] /contact
  contact(req, res, next) {
    res.render("client/contact");
  }

  // [GET] /faq
  faq(req, res, next) {
    res.render("client/faq");
  }

  // [GET] /product
  product(req, res, next) {
    res.render("client/product");
  }

  // [GET] /register
  register(req, res, next) {
    res.render("client/register");
  }

  // [GET] /login
  login(req, res, next) {
    res.render("client/login");
  }

  // [GET] /resister
  resister(req, res, next) {
    res.render("client/resister");
  }

  // [GET] /orders
  orders(req, res, next) {
    res.render("client/order/list");
  }

  // [GET] /order
  order(req, res, next) {
    res.render("client/order/detail");
  }

  // [GET] /wishlist
  wishlist(req, res, next) {
    res.render("client/wishlist");
  }
}
module.exports = new siteController();

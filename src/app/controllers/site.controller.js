class siteController {
  // [GET] /
  index(req, res, next) {
    res.render("home");
  }

  // [GET] /about
  about(req, res, next) {
    res.render("page/about");
  }

  // [GET] /cart
  cart(req, res, next) {
    res.render("page/cart");
  }

  // [GET] /checkout
  checkout(req, res, next) {
    res.render("page/checkout");
  }

  // [GET] /contact
  contact(req, res, next) {
    res.render("page/contact");
  }

  // [GET] /faq
  faq(req, res, next) {
    res.render("page/faq");
  }

  // [GET] /product
  product(req, res, next) {
    res.render("page/product");
  }

  // [GET] /resister
  resister(req, res, next) {
    res.render("page/resister");
  }

  // [GET] /shop
  shop(req, res, next) {
    res.render("page/shop");
  }
}
module.exports = new siteController();

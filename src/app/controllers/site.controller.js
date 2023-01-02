class siteController {
  // [GET] /
  index(req, res, next) {
    res.render("home");
  }

  // [GET] /shop
  shop(req, res, next) {
    res.render("pages/shop");
  }

  // [GET] /about
  about(req, res, next) {
    res.render("pages/about");
  }

  // [GET] /cart
  cart(req, res, next) {
    res.render("pages/cart");
  }

  // [GET] /checkout
  checkout(req, res, next) {
    res.render("pages/checkout");
  }

  // [GET] /contact
  contact(req, res, next) {
    res.render("pages/contact");
  }

  // [GET] /faq
  faq(req, res, next) {
    res.render("pages/faq");
  }

  // [GET] /product
  product(req, res, next) {
    res.render("pages/product");
  }

  // [GET] /register
  register(req, res, next) {
    res.render("pages/register");
  }

  // [GET] /login
  login(req, res, next) {
    res.render("pages/login");
  }

  // [GET] /resister
  resister(req, res, next) {
    res.render("pages/resister");
  }
}
module.exports = new siteController();

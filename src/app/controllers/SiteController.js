const ProductModel = require('../models/productModel');
const CategoryModel = require('../models/categoryModel');
const BrandModel = require('../models/BrandModel');

class SiteController {
  // [GET] /
  async index(req, res, next) {
    const sold = await ProductModel.findByType('sold');
    const view = await ProductModel.findByType('view');
    const newProduct = await ProductModel.findByType('created_at');
    const categories = await CategoryModel.find();
    const brands = await BrandModel.find();
    res.render('client/home', {
      sold,
      view,
      newProduct,
      categories,
      brands,
    });
    res.render('client/home', {
      sold,
      view,
      newProduct,
      categories,
      brands,
    });
    // ProductModel.findByType('sold', (err, sold) => {
    //   ProductModel.findByType('view', (err, view) => {
    //     ProductModel.findByType('created_at', (err, newProduct) => {
    //       CategoryModel.find((err, categories) => {
    //         BrandModel.find((err, brands) => {
    //           res.render('client/home', {
    //             sold,
    //             view,
    //             newProduct,
    //             categories,
    //             brands,
    //           });
    //         });
    //       });
    //     });
    //   });
    // });
  }

  // [GET] /about
  about(req, res, next) {
    res.render('client/about');
  }

  // [GET] /cart
  cart(req, res, next) {
    res.render('client/cart');
  }

  // [GET] /checkout
  checkout(req, res, next) {
    res.render('client/checkout');
  }

  // [GET] /contact
  contact(req, res, next) {
    res.render('client/contact');
  }

  // [GET] /faq
  faq(req, res, next) {
    res.render('client/faq');
  }

  // [GET] /register
  register(req, res, next) {
    res.render('client/register');
  }

  // [GET] /login
  login(req, res, next) {
    res.render('client/login');
  }

  // [GET] /resister
  resister(req, res, next) {
    res.render('client/resister');
  }

  // [GET] /orders
  orders(req, res, next) {
    res.render('client/order/list');
  }

  // [GET] /order
  order(req, res, next) {
    res.render('client/order/detail');
  }

  // [GET] /wishlist
  wishlist(req, res, next) {
    res.render('client/wishlist');
  }

  // [GET] /notpage
  notpage(req, res, next) {
    res.render('client/notpage');
  }
}
module.exports = new SiteController();

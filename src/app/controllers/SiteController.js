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
  async about(req, res, next) {
    const categories = await CategoryModel.find();
    res.render('client/about', { categories });
  }

  // [GET] /cart
  async cart(req, res, next) {
    const categories = await CategoryModel.find();
    res.render('client/cart', { categories });
  }

  // [GET] /checkout
  async checkout(req, res, next) {
    const categories = await CategoryModel.find();

    res.render('client/checkout', { categories });
  }

  // [GET] /contact
  async contact(req, res, next) {
    const categories = await CategoryModel.find();

    res.render('client/contact', { categories });
  }

  // [GET] /faq
  async faq(req, res, next) {
    const categories = await CategoryModel.find();

    res.render('client/faq', { categories });
  }

  // [GET] /register
  async register(req, res, next) {
    const categories = await CategoryModel.find();

    res.render('client/register', { categories });
  }

  // [GET] /login
  async login(req, res, next) {
    const categories = await CategoryModel.find();

    res.render('client/login', { categories });
  }

  // [GET] /resister
  async resister(req, res, next) {
    const categories = await CategoryModel.find();

    res.render('client/resister', { categories });
  }

  // [GET] /orders
  async orders(req, res, next) {
    const categories = await CategoryModel.find();

    res.render('client/order/list', { categories });
  }

  // [GET] /order
  async order(req, res, next) {
    const categories = await CategoryModel.find();
    res.render('client/order/detail', { categories });
  }

  // [GET] /wishlist
  async wishlist(req, res, next) {
    const categories = await CategoryModel.find();
    res.render('client/wishlist', { categories });
  }

  // [GET] /notpage
  notpage(req, res, next) {
    res.render('client/notpage');
  }
}
module.exports = new SiteController();

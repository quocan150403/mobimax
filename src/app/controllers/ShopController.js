const Product = require('../models/ProductModel');
const CategoryModel = require('../models/categoryModel');
const BrandModel = require('../models/brandModel');

class ShopController {
  // [GET] shop/
  index(req, res, next) {
    Promise.all([Product.find(), CategoryModel.find(), BrandModel.find()])
      .then(([products, categories, brands]) => {
        res.render('client/shop', {
          products,
          categories,
          brands,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  // [GET] shop/category/:slug
  category(req, res, next) {
    const slug = req.params.slug;
    Promise.all([CategoryModel.find(), BrandModel.find()]).then(([categories, brands]) => {
      const idCategory = categories.find((category) => category.slug === slug).id;
      Product.findByIdCategory(idCategory)
        .then((products) => {
          res.render('client/shop', {
            products,
            categories,
            brands,
          });
        })
        .catch((err) => {
          throw err;
        });
    });
  }

  // [GET] shop/brand/:slug
  brand(req, res, next) {
    const slug = req.params.slug;
    Promise.all([CategoryModel.find(), BrandModel.find()]).then(([categories, brands]) => {
      const idBrand = brands.find((brand) => brand.slug === slug).id;
      Product.findByIdBrand(idBrand)
        .then((products) => {
          res.render('client/shop', {
            products,
            categories,
            brands,
          });
        })
        .catch((err) => {
          throw err;
        });
    });
  }
}
module.exports = new ShopController();

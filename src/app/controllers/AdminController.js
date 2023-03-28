class AdminController {
  // [GET] admin/
  index(req, res, next) {
    res.render('admin/home', {
      layout: 'admin',
    });
  }

  productList(req, res, next) {
    res.render('admin/product/list', {
      layout: 'admin',
    });
  }

  productAdd(req, res, next) {
    res.render('admin/product/add', {
      layout: 'admin',
    });
  }

  // [GET] admin/login
}
module.exports = new AdminController();

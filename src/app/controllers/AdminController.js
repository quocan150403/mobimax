class AdminController {
  // [GET] admin/
  index(req, res, next) {
    res.render('admin/home', {
      layout: 'admin',
    });
  }

  // [GET] admin/login
}
module.exports = new AdminController();

class adminController {
  // [GET] /
  index(req, res, next) {
    res.render("admin/home", {
      layout: "admin",
    });
  }
}
module.exports = new adminController();

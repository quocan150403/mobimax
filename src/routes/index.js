const siteRoute = require("./site.route");
const adminRoute = require("./admin.route");

function route(app) {
  app.use("/admin", adminRoute);
  app.use("/", siteRoute);
}

module.exports = route;

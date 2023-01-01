const siteRoute = require("./site.route");

function route(app) {
  app.use("/", siteRoute);
}

module.exports = route;

const siteRoute = require('./siteRoute');
const adminRoute = require('./adminRoute');
const productRoute = require('./productRoute');
const shopRoute = require('./shopRoute');

function route(app) {
  app.use('/admin', adminRoute);
  app.use('/product', productRoute);
  app.use('/shop', shopRoute);
  app.use('/', siteRoute);
}

module.exports = route;

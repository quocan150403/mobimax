const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const route = require('./routes');

const app = express();

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      // Format price to VND currency
      formatVND: (price) => {
        if (typeof price !== 'number') return '';
        return new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(price);
      },
      // Format date
      formatDate: (date) => {
        return new Intl.DateTimeFormat('vi-VN').format(date);
      },
      // Calculate discount price
      discountPrice: (price, priceOld) => {
        const result = Math.floor(((priceOld - price) / priceOld) * 100);
        return result > 0 ? result + '%' : '';
      },
      // Render rating
      renderRating: (number) => {
        let result = '';
        for (let index = 0; index < 5; index++) {
          if (index < number) {
            result += `<i class="fa-solid fa-star-sharp active"></i>`;
          } else {
            result += `<i class="fa-solid fa-star-sharp"></i>`;
          }
        }
        return result;
      },
      // Active shop
      activeShop: (a, b) => {
        if (a === b) {
          return 'active';
        } else {
          return '';
        }
      },
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app/views'));

// Routes init
route(app);

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});

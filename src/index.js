const express = require('express');
const { engine } = require('express-handlebars');
const route = require('./routes');
const path = require('path');
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
        const now = new Date();
        const diff = now.getTime() - new Date(date).getTime();
        const diffSeconds = Math.floor(diff / 1000);
        const diffMinutes = Math.floor(diff / (1000 * 60));
        const diffHours = Math.floor(diff / (1000 * 3600));
        const diffDays = Math.floor(diff / (1000 * 3600 * 24));
        const diffWeeks = Math.floor(diff / (1000 * 3600 * 24 * 7));
        const diffMonths = Math.floor(diff / (1000 * 3600 * 24 * 30));
        const diffYears = Math.floor(diff / (1000 * 3600 * 24 * 365));
        if (diffYears > 0) return `${diffYears} năm trước`;
        if (diffMonths > 0) return `${diffMonths} tháng trước`;
        if (diffWeeks > 0) return `${diffWeeks} tuần trước`;
        if (diffDays > 0) return `${diffDays} ngày trước`;
        if (diffHours > 0) return `${diffHours} giờ trước`;
        if (diffMinutes > 0) return `${diffMinutes} phút trước`;
        if (diffSeconds > 0) return `${diffSeconds} giây trước`;
        else return 'Vừa xong';
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
      // Active menu
      active: (a, b) => (a === b ? 'active' : ''),
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

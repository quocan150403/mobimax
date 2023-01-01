$(document).ready(() => {
  // Handle Sidebar shop
  const sidebar = $('.shop-sidebar');
  $('.sidebar-toggle').click(() => sidebar.toggleClass('sidebar-tablet-mobile'));
  $('.shop-sidebar__close').click(() => sidebar.toggleClass('sidebar-tablet-mobile'));
  $('.sidebar-shop-overlay').click(() => sidebar.toggleClass('sidebar-tablet-mobile'));

  // Handle Price range slicer
  const rangeInput = $('.range-input input');
  const priceInput = $('.price-input input');
  let priceGap = 50;

  priceInput.on('input', function (e) {
    let minPrice = parseInt(priceInput[0].value);
    let maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === 'input-min') {
        rangeInput[0].value = minPrice;
        $('.slicer .progress').css('left', (minPrice / rangeInput[0].max) * 100 + '%');
      } else {
        rangeInput[1].value = maxPrice;
        $('.slicer .progress').css('right', 100 - (maxPrice / rangeInput[1].max) * 100 + '%');
      }
    }
  });

  rangeInput.on('input', function (e) {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === 'range-min') {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      $('.slicer .progress')
        .css('left', (minVal / rangeInput[0].max) * 100 + '%')
        .css('right', 100 - (maxVal / rangeInput[1].max) * 100 + '%');
    }
  });
});

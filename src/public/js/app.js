$(document).ready(() => {
  // Handle menu fix and back to top
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 250) {
      $('.header-nav').addClass('menu-fixed');
      $('.header-tablet-mobile').addClass('menu-fixed');
      $('.back-to-top').css('display', 'flex');
    } else {
      $('.header-nav').removeClass('menu-fixed');
      $('.back-to-top').css('display', 'none');
      $('.header-tablet-mobile').removeClass('menu-fixed');
    }
  };

  // Handle toggle user box
  $('.header-top__user-toggle').click(() => {
    $('.header-top__user').toggle();
  });
  $('.header-top__user').click((e) => {
    e.stopPropagation();
  });

  // Handle Sidebar
  const sidebar = $('.sidebar');
  $('.header-menu').click(() => sidebar.toggleClass('open-sidebar'));
  $('.sidebar-close').click(() => sidebar.toggleClass('open-sidebar'));
  $('.sidebar-overlay').click(() => sidebar.toggleClass('open-sidebar'));

  // Auto add class product mobile( <740px )
  window.onresize = () => {
    if (window.innerWidth <= 740) {
      $('.product').addClass('product-full');
    } else {
      $('.product').removeClass('product-full');
    }
  };

  // Handle view product
  if ($('.product')) {
    $('.product').click(function (e) {
      if (e.target.closest('.product-wrap-view')) {
        e.stopPropagation();
        e.preventDefault();
        const img = $(this).find('.product-img').attr('src');
        const name = $(this).find('.product-info__name').text();
        let priceOld = $(this).find('.product-info__priceold').text();
        priceOld = +priceOld.replace('$', '');
        let price = $(this).find('.product-info__price').text();
        price = +price.replace('$', '');
        const sale = $(this).find('.product-wrap-sale').text();

        $('.modal').find('.modal-container__wrap-img img').attr('src', img);
        $('.modal').find('.product-content__name').text(name);
        if (priceOld) {
          const priceNew = Math.round(((priceOld - price) / priceOld) * 100);
          $('.modal').find('.modal-container__sale').show();
          $('.modal').find('.product-content__price-old').show();
          $('.modal').find('.product-content__price-old').text(priceOld);
          $('.modal').find('.modal-container__sale').text(`-${priceNew}%`);
        } else {
          $('.modal').find('.modal-container__sale').hide();
          $('.modal').find('.product-content__price-old').hide();
        }
        $('.modal').find('.product-content__price').text(price);
        $('.modal').fadeToggle(300);
      }
    });

    $('.product-content__close').click(() => {
      $('.modal').fadeToggle(300);
    });

    $('.modal').click(function () {
      $(this).fadeToggle(300);
    });

    $('.modal-container').click((e) => {
      e.stopPropagation();
    });
  }
});

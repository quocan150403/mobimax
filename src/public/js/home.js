$(document).ready(() => {
  // active panes products
  const panes = $('.products-pane');
  $('.products-tab').click(function (e) {
    // remove
    $('.products-tab.active').removeClass('active');
    $('.products-pane.active').removeClass('active');

    $(this).addClass('active');
    panes[$(this).index()].classList.add('active');
  });

  // Handle show cart box home
  if ($('.header-cart__toggle')) {
    $('.header-cart__toggle').click(() => {
      $('.header-cart__box').fadeToggle();
      $('.header-cart__close').toggle();
      $('.header-cart__shopping').toggle();
    });
  }
});

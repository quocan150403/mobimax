$(document).ready(() => {
  // ========= Home ========
  // Slider
  $(".slider-slick").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // Products
  $(".product-slick").slick({
    infinite: false,
    rows: 2,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".products-arrow-slick-prev"),
    nextArrow: $(".products-arrow-slick-next"),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Author
  $(".author-slick").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".author-arrow-slick-prev"),
    nextArrow: $(".author-arrow-slick-next"),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 739,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // News
  // $(".news-slick").slick({
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   prevArrow: $(".news-arrow-slick-prev"),
  //   nextArrow: $(".news-arrow-slick-next"),
  //   responsive: [
  //     {
  //       breakpoint: 1023,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 739,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });

  // ========= Product detail ========
  // $(".slider-for").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: ".slider-nav",
  // });

  // $(".slider-nav").slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: ".slider-for",
  //   dots: false,
  //   centerMode: true,
  //   focusOnSelect: true,
  //   prevArrow: $(".product-detail-arrow-slick-prev"),
  //   nextArrow: $(".product-detail-arrow-slick-next"),
  // });

  // Product Related
  $(".product-related-slick").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".product-related-arrow-slick-prev"),
    nextArrow: $(".product-related-arrow-slick-next"),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  // ========= About ========
  $(".about-team-slick").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".about-arrow-slick-prev"),
    nextArrow: $(".about-arrow-slick-next"),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});

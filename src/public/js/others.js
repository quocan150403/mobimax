$(document).ready(() => {
  // Handle toggle checkout code (Checkout)
  $(".checkout-code-toggle").click(() => {
    $(".checkout-code__inner").slideToggle(300);
  });

  // handle toggle FAQ
  $(".active.FAQ-right-toggle").find(".FAQ-right__content").slideToggle();
  $(".FAQ-right-toggle").click(function (e) {
    if (e.target.closest(".FAQ-right__wrap-title")) {
      $(this).toggleClass("active");
      $(this).find(".FAQ-right__content").slideToggle();
    }
  });
});

function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
  const startTime = performance.now();

  function updateNumber(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime > duration) {
      callback(finalNumber);
    } else {
      const rate = elapsedTime / duration;
      const currentNumber = Math.round(rate * finalNumber);
      callback(currentNumber);
      requestAnimationFrame(updateNumber);
    }
  }

  requestAnimationFrame(updateNumber);
}

if (document.getElementById("about-items-1")) {
  document.addEventListener("DOMContentLoaded", function () {
    animateNumber(875, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString();
      document.getElementById("about-items-1").innerText = formattedNumber;
    });

    animateNumber(18, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString();
      document.getElementById("about-items-2").innerText = formattedNumber;
    });

    animateNumber(200, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString();
      document.getElementById("about-items-3").innerText = formattedNumber;
    });

    animateNumber(512, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString();
      document.getElementById("about-items-4").innerText = formattedNumber;
    });
  });
}

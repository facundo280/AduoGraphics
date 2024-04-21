let carousels = document.querySelectorAll(".slider");

carousels.forEach(function(carousel) {
  let sliderInner = carousel.querySelector(".slider--inner");
  let images = sliderInner.querySelectorAll(".img-slider");
  let index = 1;

  setInterval(function() {
    let percentage = index * -100;
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    index++;
    if (index > images.length - 1) {
      index = 0;
    }
  }, 2000);
});

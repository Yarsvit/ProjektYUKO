$(document).ready(function() {
   var currentSlide;
var slidesCount;
var sliderCounter = document.createElement("div");
sliderCounter.classList.add("slider__counter");

var updateSliderCounter = function (slick, currentIndex) {
  currentSlide = slick.slickCurrentSlide() + 1;
  slidesCount = slick.slideCount;
  $(sliderCounter).text(currentSlide + "/" + slidesCount);
};

$(".slider").on("init", function (event, slick) {
  $(".slider").append(sliderCounter);
  updateSliderCounter(slick);
});

$(".slider").on("afterChange", function (event, slick, currentSlide) {
  updateSliderCounter(slick, currentSlide);
});
 $(".slider").slick({
    slidesToShoW: 2,
    slidesToScroll: 2,
    Infinity: true,
    centerMode: true,
    centerPadding: "250px",
 });
 $(".slick-prev").text("");
        $(".slick-next").text("");
});


const sass = require('sass');
const fs = require('fs');

const scss = fs.readFileSync('style.scss', 'utf8');
const result = sass.compile(scss);

fs.writeFileSync('style.css', result.css);



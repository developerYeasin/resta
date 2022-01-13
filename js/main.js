// preloader

var preloader = document.querySelector(".preloader");
// var bodyload = document.querySelector("body");
// bodyload.addEventListener("load", function(){
//   console.log("ami");
//   preloader.style.display = "none";
// });

function myFunction() {
  preloader.style.display = "none";
}

new WOW().init();
// sticky header

window.addEventListener("scroll", function () {
  var header = document.querySelector("#header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// scroll top

var scrollTop = document.querySelector(".scrollTop");
window.addEventListener("scroll", function () {
  scrollTop.classList.toggle("active", window.scrollY > 800);
});
scrollTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Navo slider

$(window).load(function () {
  $("#slider").nivoSlider({
    manualAdvance: false,
    pauseTime: 5000,
    prevText: "",
    nextText: "",
    controlNav: true,
  });

  var mixer = mixitup(".gallery-all-item");
  $(".gallery-all-item").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".video-popup-open").magnificPopup({
    type: "inline",
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
});
//slick slider

$(".dishes-slider").slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});

//client testimonial slick slider

$(".client-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: ".client-slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});
$(".client-slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".client-slider",
  dots: true,
});

// team slider slick
$(".team-slider").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// tab slider
const tabs = document.querySelectorAll("[data-tab-target]");
const contents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
}); 

// responsive mobile menu

var mobile_menu_icon = document.querySelector(".for-responsive-icon");
var responsive_menu = document.querySelector(".responsive-menu");
mobile_menu_icon.addEventListener("click", function () {
  mobile_menu_icon.classList.toggle("active");
  responsive_menu.classList.toggle("active");
});

var spans = document.querySelectorAll(".responsive-menu li span");

spans.forEach(function (span) {
  span.addEventListener("click", function () {
    span.parentElement.classList.toggle("active");
  });
});

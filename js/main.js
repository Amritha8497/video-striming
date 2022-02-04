//header change on scroll
  window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


//navbar
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
}

// slder
$(document).ready(function() {
  $("#news-slider").owlCarousel({
      autoplay: true,
      rewind: true, /* use rewind if you don't want loop */
      margin: 20,
       /*
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      */
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,

      responsive: {
    0: {
      items: 1
      // nav: true
    },
    480: {
      items: 2,
      nav: false
    },
    768: {
      items: 3,
      // nav: true,
      loop: false
    },
    992: {
      items: 3,
      // nav: true,
      loop: false
    },
    1050:{
      items: 4,
      loop:false
    }
  },
  });

});


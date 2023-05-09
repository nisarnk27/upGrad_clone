$(document).ready(function () {
    $('#owl-one .owl-carousel').owlCarousel({
      loop: true,
      margin: 60,
      autoplay: true,
      autoplayTimeout: 1800,
      //  autoplayHoverPause:true,
      animateIn: true,
      mouseDrag: true,
      dots: false,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 7
        }
      }
    });
  })

  $(document).ready(function () {
    $('#owl-two .owl-carousel').owlCarousel({
      centre: true,
      loop: true,
      nav: true,
      margin: 15,
      autoplay: true,
      autoplayTimeout: 6000,
      //  autoplayHoverPause:true,
      animateIn: true,
      mouseDrag: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  })


  $(document).ready(function () {
    $('#owl-three .owl-carousel').owlCarousel({
      centre: true,
      loop: true,
      nav: true,
      margin: 15,
      autoplay: true,
      autoplayTimeout: 6000,
      //  autoplayHoverPause:true,
      animateIn: true,
      mouseDrag: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
    });
  })
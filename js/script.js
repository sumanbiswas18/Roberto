$(".owl-one").owlCarousel({
  items: 1,
  slideSpeed: 2000,
  nav: true,
  autoplay: true,
  dots: false,
  loop: true,
  responsiveRefreshRate: 200,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$(".owl-two").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  nav: true,
  dots: false,
  responsiveRefreshRate: 200,
  navText: ["Prev", "Next"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$(".owl-three").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  nav: false,
  dots: false,
  responsiveRefreshRate: 200,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
$(".owl-four").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  dots: true,
  responsiveRefreshRate: 200,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
$(".owl-five").owlCarousel({
  items: 3,
  loop: true,
  autoplay: true,
  dots: false,
  responsiveRefreshRate: 200,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});
$(".next").click(function() {
  owl.trigger("owl.next");
});
$(".prev").click(function() {
  owl.trigger("owl.prev");
});
new WOW().init();
$(".search-btn").click(function() {
  $(".search-form").toggleClass("search-form-active");
});

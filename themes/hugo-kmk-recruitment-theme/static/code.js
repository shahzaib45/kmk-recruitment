    $(document).ready(function(){
      
      $('.testimonials-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        speed:500,
          autoplay: false,
          arrows: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
            },
        ]
      });
    });
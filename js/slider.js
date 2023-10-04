const slider = function(){
    console.log("Dom ingeladen")
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      variableWidth: true,
      centerMode:true,
      centerPadding: '40px',
      arrows: false,
      speed: 250,
      infinite: true,
      autoplaySpeed: 4000,
      autoplay: true,
      responsive: [
    // {
    //   breakpoint: 992,
    //   settings: {
    //     slidesToShow: 3,
    //   }
    // },
    // {
    //   breakpoint: 767,
    //   settings: {
    //     slidesToShow: 2,
    //     centerMode:true,
    //     centerPadding: '0',
    //   }
    // },
    // {
    //   breakpoint: 576,
    //   settings: {
    //     slidesToShow: 1,
    //     centerMode:true,
    //     centerPadding: '0',
    //   }
    // }
  ]
    });
  }

  const init = function(){
        slider();
  }

  

document.addEventListener('DOMContentLoaded', init);

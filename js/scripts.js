$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      navText: [ '', ' ' ],

      responsive:{
          0:{
              items:1
          },

          300:{
              items:1
          }
      }
  });
});

  var swiper = new Swiper(".myComment", {
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints:{
      1024:{
        slidesPerView:3,
        spaceBetween:30,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
   
  });
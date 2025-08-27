$(document).ready(function () {
  
  //topButton
  $(window).scroll(function () { 
    if($(this).scrollTop() > 50) {
      $("#topButton").fadeIn();
    } else {
      $("#topButton").fadeOut();
    }
  });  
  $("#topButton").click(function () { 
    $("html,body").animate({scrollTop:0},300);
    return false;
  });
  
  // mainBanner fadeInOut
  $(".mainBanner-slide img:gt(0)").hide();
  setInterval(function () {
    $(".mainBanner-slide img:first").fadeOut(1000).next().fadeIn(1000).end();
    $(".mainBanner-slide img:first").appendTo(".mainBanner-slide");
  }, 3000); 

  //AOS Effect
  AOS.init({
    easing: "ease-out",
    duration: 1000
  });

  //look Toggle
  $(".lookThumb").click(function () { 
    // alert('!');
    $(this).children("img").css({"opacity":"0"},200);    
    $(this).siblings('.lookThumb-on').fadeIn(200);    
  });
  $(".lookThumb-on").click(function () { 
    $(this).siblings().children("img").css({"opacity":"1"},200);    
    $(this).fadeOut(200);    
  });

  // swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
  
  
});
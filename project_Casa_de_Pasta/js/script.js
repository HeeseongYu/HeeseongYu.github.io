$(document).ready(function () {
  //  gnb
  $(".main-list",this).hover(function () {
    $(".sub-menu",this).stop().slideDown('fast'); 
  },
  function(){
    $(".sub-menu",this).stop().slideUp('fast');
  });

  //hamburgerMenu
  $("#hamburger").click(function() {
    $("#hamburger span").toggleClass("active");
    $("#hamburgerBg").fadeToggle(300);
    $(this).siblings().toggleClass("show");
    $("body").toggleClass("noScroll");
  });
  
  $("#hamburgerBg").click(function(){      
    $("#hamburger span").toggleClass("active");
    $(this).fadeToggle(300);
    $(this).siblings().toggleClass("show");
    $("body").toggleClass("noScroll");
  });

  //hamburgerMenu-subList
  $(".ham-menu>li").click(function () {
    $(this).children(".ham-sub").stop().slideToggle(300);
    $(this).siblings("li").children(".ham-sub").stop().slideUp();
  });

  // menuSlide
  var swiper = new Swiper(".swiper1", {
    slidesPerView: 4,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      601: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      901: {
        slidesPerView: 4,
        spaceBetween: 0,
      }
    }
  });

  // eventBanner
  var swiper = new Swiper(".swiper2", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // }
  });
  
  //  datepicker
  $("#datepicker").datepicker({
    dateFormat: 'yy-mm-dd',
    showMonthAfterYear:true,
    yearSuffix: "년",
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    minDate: "-0D", 
    maxDate: "+10D", 
    // showOn: "button"
  });
  $("#datepicker").datepicker('setDate', 'today');
  
  // timepicker
  $(".timepicker").timepicker({
    timeFormat: 'HH:mm',
    interval: 60,
    startTime: '12:00',
    maxTime: '20:00',
    minTime: '12:00',
    dynamic: false,
    dropdown: true,
    scrollbar: false
  });
  // document.onclick('input',this).value='';
  
  // people 
  $("#people_box >button").on('click',function(){
    $("#people").stop().show();
  });    
  $("#people li").on('click',function(){
    var option = $(this).text();
    $('#people_box >button').html(option);
    $(this).parent().hide();
  });


});

// 롤링배너
window.onload = function(){
  let roller = document.querySelector('.rolling-list');
  roller.id = 'roller1'; // 아이디 부여

  let clone = roller.cloneNode(true)
  // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
  clone.id = 'roller2';
  document.querySelector('.rollingBanner').appendChild(clone); // wrap 하위 자식으로 부착

  document.querySelector('#roller1').style.left = '1920px';
  document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';
  // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

  roller.classList.add('original');
  clone.classList.add('clone');
} 



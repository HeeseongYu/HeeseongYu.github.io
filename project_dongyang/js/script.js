$(document).ready(function () {
    // top button
    $("topBtn").click(function () {
       $("html,body").animate({ scrollTop: 0 },300);
        return false;        
    });

    // 메인 팝업창이 뜨면 body에 overflow:hidden을 걸어 스크롤 방지
    if ($('.mainPopup_wrap').is(':visible')) {
        $('body').addClass('modal_on');
    };
    // 메인 팝업창 닫기
    $(".modal,.mainPopup_con .modal_close,.mainPopup_close button").click(function (e) { 
        $(".modal, .mainPopup_wrap").fadeOut(300); 
        $("body").removeClass("modal_on"); 
    });    
    
    // 모달 드롭다운
    $(".search").click(function (e) { 
        $(".modal_wrap").css("top","0");
        $(".modal").fadeIn(300);  
        $("body").addClass("modal_on");
    });    
    $(".modal,.modal_close").click(function (e) { 
        $(".modal_wrap").css("top","-280px");
        $(".modal").fadeOut(300);  
        $("body").removeClass("modal_on");
    });    
    
    // 인덱스 꼬임 방지
    $(".gnb_menu").each(function (i) { 
         $(this).attr("data-idx",i);
    });
    $(".dropMenu_con").each(function (i) { 
         $(this).attr("data-idx",i);
    });
    // GNB 드롭다운/헤더 하단에 보더 호버
    $(".gnb_menu,.dropMenu_con").hover(function () {
        const liNum = $(this).data("idx");
        
        $(".dropMenu").css("border-top", "1px solid #007ef4");
        $(".dropMenu_con").css("box-shadow", "0 7px 8px 0 rgba(0, 0, 0, 0.05)");
        $(".dropMenu .dropMenu_con").eq(liNum).stop(true).animate({
            maxHeight: "500px",
            top: "0",
        }, 300);
        
    }, function () {
        $(".dropMenu").css("border-top", "1px solid transparent");
        $(".dropMenu_con").css("box-shadow", "none");
        $(".dropMenu .dropMenu_con").stop(true).animate({
            maxHeight: "0px",
            top: "-100%"
        }, 300);
        // 열린 토글메뉴 초기화
        $(".sub_subLi>div").hide();
    });

    // GNB 서브메뉴 토글
    $(".sub_subLi > a").click(function (e) { 
        $(this).next(".subLi_con").stop().slideToggle("fast");
    });

    // 전체메뉴 팝업창
    

    // 탭메뉴
    $(".tab_menu button").click(function (e) { 
        const idx = $(this).index();
        // 탭버튼 선택 변경
        $(".tab_menu button").removeClass("active");
        $(this).addClass("active");
        
        // 탭 메뉴 변경
        $(".tabSwiper").removeClass("tab_on");
        $(".tabSwiper").eq(idx).addClass('tab_on');
    });

    // faq 설명창
    $(".faqList li button").click(function (e) { 
        const faqIdx = $(this).parent().index();

        $(".faqCon .faqTxt").hide();
        $(".faqCon .faqTxt").eq(faqIdx).fadeIn("fast");
        $('.faqCon').fadeIn();
    });
    // 페이드인 된 설명창에 번호 붙이기
    $(".faqTitle span").each(function (i) {
        $(this).prepend(`<span class="faqNum">${i + 1}</span>`);
    });
    // faq 설명창 닫기
    $(".faq_close").click(function (e) { 
        $('.faqCon').fadeOut("fast");            
    });





});

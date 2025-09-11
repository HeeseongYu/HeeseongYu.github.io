$(document).ready(function () {
    // 스크롤 기능
    $(window).on("scroll", function () {
        const scrollTop = $(window).scrollTop();
        const winHeight = $(window).height();
        const docHeight = $(document).height();
        const scrollBottom = docHeight - (scrollTop + winHeight);
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100

        //헤더 색변경
        if (scrollTop > 0) {
            $(".header_template").addClass("headerScroll hoverTxt");
        } else {
            $(".header_template").removeClass("headerScroll hoverTxt");
        }

        // 프로그레스바
        $(".progressBar").css("width", scrollPercent + "%");

        // Top Button
        // 페이드인아웃
        if (scrollTop > 80) {
            $(".topBtn").fadeIn();
        } else {
            $(".topBtn").fadeOut();
        }
        // 하단위치고정
        if (scrollBottom < 300) {
            $(".topBtn").addClass("fixed");
        } else {
            $(".topBtn").removeClass("fixed");
        }
    });

    $(".topBtn").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500);
        return false;
    });

    // gnb 드롭다운
    $(".gnb .sub").hover(function () {
        const idx = $(this).index()
        $(".header_template").addClass("headerScroll hoverTxt");
        $(".dropDown_con").eq(idx).stop().slideDown("fast");
        $(".dimmer").stop().fadeIn("fast");
    }, function () {
        if ($(window).scrollTop() === 0) {
            $(".header_template").removeClass("headerScroll hoverTxt");
        }
        $(".dropDown_con").stop().slideUp("fast");
        $(".dimmer").stop().fadeOut("fast");
    });

    //언어 토글 버튼 바인딩
    function bindLanguage(languageBtn) {
        const $language = $(languageBtn);
        $language.find(".language_btn > button").off("click"); // 중복 방지
        $language.find(".language_btn > button").on("click", function () {
            // 해당 뷰포트 내의 리스트만 토글
            $language.find(".language_list ul").stop().slideToggle("fast");
        });
    }

    // 오른쪽 gnb의 드롭다운 요소들에 할당된 호버와 클릭 함수를 묶어 반응형 적용 시 제어  
    function Responsive() {
        // 반응형 뷰포트
        const isMobile = () => $(window).width() <= 1024;

        // 기존 이벤트 초기화
        $(".hana_network_btn, .language_btn, .menuAll_btn, .menuAll_close").off();
        $(".key_info_btn > button, .key_info_close, .key_info_con").off();
        $(".key_info_btn").off("mouseenter mouseleave");
        $(".menuAll_btn, .menuAll_close, .menuAll_tab ul li, .tab_down").off("click"); //모바일 전체메뉴 토글,탭 중복바인딩 방지
        $(".key_info_con").removeAttr("style").hide();  // display none 처리
        $(".footer_customerInfo").removeAttr("style");  // display none 제거
        $("body").removeClass("scroll_lock");
        $(".language_list ul").slideUp(); //열린 언어 토글 초기화
        
        // 모바일
        if (isMobile()) {
            // 푸터 리스트 토글 초기화
            $(".footer_customerInfo").hide();
            $(".footer_li button").removeClass("customerInfo_toggle");

            // 하나키인포 클릭
            $(".key_info_btn>button").click(function () {
                $(".key_info_con").stop().css("display", "block");
                // transition 적용 시간 부여
                setTimeout(() => {
                    $(".key_info_con").css("left", "0");
                }, 10);
                $("body").addClass("scroll_lock");
            });
            $(".key_info_close").click(function () {
                $(".key_info_con").stop().css("left", "100%");
                // left 이동 후 display 제거
                setTimeout(() => {
                    $(".key_info_con").css("display", "none");
                }, 300);
                $("body").removeClass("scroll_lock");
            });

            // 모바일 전체메뉴 슬라이드
            $(".menuAll_btn").on('click', function () {
                $(".m_menuAll").addClass('m_menuAll_slide');
                $("body").addClass("scroll_lock");
            });
            $(".menuAll_close").on('click', function () {
                $(".m_menuAll").removeClass('m_menuAll_slide');
                $("body").removeClass("scroll_lock");
            });

            // 모바일 전체메뉴 내 언어 드롭다운 토글
            bindLanguage(".m_menuAll_upper_right");

            // 모바일 전체메뉴 내 탭 활성화
            $(".menuAll_tab ul li").click(function () {
                const tabNum = $(this).index();

                $(".menuAll_tab > ul > li").removeClass("active");
                $(this).addClass("active")

                $(".menuAll_tab_list").hide();
                $(".menuAll_tab_list").eq(tabNum).show();
            });

            // 모바일 전체메뉴 내 리스트 토글
            $(".menuAll_tab_list>ul>li>ul").hide();
            $(".tab_down").on('click', function () {
                const siblings = $(this).parents().siblings();
                $(this).parents().toggleClass("tabDown");
                $(this).next().stop().slideToggle();
                siblings.removeClass("tabDown").children(".tab_down_ul").slideUp();
            });
       
        // PC
        } else {

            // 하나키인포 호버
            $(".key_info_btn").on("mouseenter", function () {
                $(".gnb_right_drop").stop().slideUp();
                $(".key_info_con").stop().slideDown("fast");
                $(".header_template").addClass("keyInfoHover");
                $(".dimmer").stop().fadeIn("fast");
                if ($(window).scrollTop() > 0) {
                    $(".header_template").removeClass("headerScroll hoverTxt");
                }
            }).on("mouseleave", function () {
                $(".key_info_con").stop().slideUp("fast");
                $(".header_template").removeClass("keyInfoHover");
                $(".dimmer").stop().fadeOut("fast");
                if ($(window).scrollTop() > 0) {
                    $(".header_template").addClass("headerScroll hoverTxt");
                }
            });

            // 하나 네트워크 호버
            $(".hana_network_btn").on("mouseenter", function () {
                $(".gnb_right_drop").stop().slideUp();
                $(".hana_network_con").stop().slideDown("fast");
                $(".header_template").addClass("headerScroll hoverTxt");
                $(".dimmer").stop().fadeIn("fast");
            }).on("mouseleave", function () {
                $(".hana_network_con").stop().slideUp("fast");
                $(".dimmer").stop().fadeOut(300);
                if ($(window).scrollTop() === 0) {
                    $(".header_template").removeClass("headerScroll hoverTxt");
                }
            });
            
            // 언어 드롭다운 토글
            bindLanguage(".header_template");

            // 전체메뉴 드롭다운
            $(".menuAll_btn").on('click', function () {
                $(".menuAll_con").addClass('menuAll_down');
                $("body").addClass("scroll_lock");
            });
            $(".menuAll_close").on('click', function () {
                $(".menuAll_con").removeClass('menuAll_down');
                $("body").removeClass("scroll_lock");
            });
        }
    };
    // 화면 리사이즈 감지 후 실행
    Responsive();
    let resizeTimer;

    $(window).on("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            Responsive();
        }, 150);
    });

    // 푸터 리스트 토글
    $(".footer_li button").click(function () {
        if ($(window).width() > 1024) return; // PC에서는 토글 무시
        $(".footer_li button").stop().toggleClass("customerInfo_toggle");
        $(".footer_customerInfo").stop().slideToggle("fast");
    });

    // 새로고침 이후에도 스크롤 위치 반영하여 헤더 투명화 방지
    $(window).trigger("scroll");
});
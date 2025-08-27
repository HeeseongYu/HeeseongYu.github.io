$(document).ready(function () {
    // topBtn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".topBtn").fadeIn();
        } else {
            $(".topBtn").fadeOut();
        }
    });
    $(".topBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 300);
        return false;
    });

    // gnb scroll
    $(".gnb a").click(function (e) {
        const hash = this.hash;

        // $("선택자").animate({변경할CSS},변화시간,콜백함수);
        $("html,body").animate({
            scrollTop: $(hash).offset().top
        }, 500, function () {
            window.location.hash = hash;
        });
        return false;
    });

    // ScrollTrigger 
    gsap.registerPlugin(ScrollTrigger);
    
    // 배경 패럴랙스
    ScrollTrigger.create({
        trigger: "#portfolioSec",
        start: "top top",
        end: "90% top",
        pin: ".bgTxtCon",
        pinSpacing: false,
        scrub: true,
    });


    // portfolioLeft
    gsap.utils.toArray(".pl").forEach((el) => {
       gsap.fromTo(el,
            { x: -150, opacity: 0.8 },
            {x: 0, opacity: 1, ease: "power5", duration: 1, 
            scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "restart none",
                    // markers: true,
                    id: "portfolioCon"
                }
            }
        );    
    });
    // portfolioright
    gsap.utils.toArray(".pr").forEach((el) => {
       gsap.fromTo(el,
            { x: 150, opacity: 0.8 },
            {x: 0, opacity: 1, ease: "power5", duration: 1, 
            scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "restart none",
                    // markers: true,
                    id: "portfolioConR"
                }
            }
        );    
    });

    // eyes Blink
    ScrollTrigger.create({
        start: "top bottom",
        end: "bottom top",
        trigger: ".mid-banner",
        onEnter:
            () => { $(".mid-banner").addClass("blinkActive") },
        onLeaveBack: () => { $(".mid-banner").removeClass("blinkActive"); },
        // markers: "true",
        id: "blink",
    });

    // introduceTitle1
    var introduce1 = gsap.to(".introduceTitle1", {
        xPercent: 100,
        scrollTrigger: {
            trigger: ".mid-banner",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
            id: "introSlide"
        },
    });
    // introduceTitle2
    var introduce2 = gsap.to(".introduceTitle2", {
        xPercent: -100,
        scrollTrigger: {
            trigger: ".mid-banner",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });

    //profileCard Up
    gsap.to(".profileCard",
        {
            y: 0,
            opacity: 1,
            ease: "power4",
            duration: 2,
            scrollTrigger: {
                trigger: ".profileCard",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
                // markers: true,
                id: "Card"
            },
        });
   
    // skill icon wave
    //스킬 아이콘이 있는 각각의 ul에 부여
    document.querySelectorAll(".skillContent>ul").forEach((ul, i) => { 
        gsap.fromTo(
            ul.querySelectorAll("li img"),
            {
                scale: 0.5,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.inOut",
                scrollTrigger: {
                    trigger: ul,
                    start: "bottom bottom",
                    // markers: true,
                    id: "skill"
                }
            }
        );
    });
    // QR popup
    $(".flip:last-child .card .back span").click(function () {
        $(".qrPopbg").fadeIn(100);
    });
    $(".qrPop span").click(function () {
        $(".qrPopbg").fadeOut(100);
    });

    //모바일 햄버거 메뉴
    $(".ham").click(function () { 
        $(".ham, header").stop().toggleClass("active");
        if ($(".ham").hasClass("active")) {
            $("html,body").css("overflow", "hidden");
            $(".hamBg").fadeIn();
        } else {
            $("html,body").css("overflow", "");         
            $(".hamBg").fadeOut();
        }
    });
    // 메뉴 리스트 클릭 시 닫히게
    $(".gnb li a").click(function () { 
        $(".ham, header").stop().removeClass("active");
        $("html,body").css("overflow", "");
        $(".hamBg").fadeOut();
    });

    // 넘침 요소 확인용
    // [...document.querySelectorAll('body *')].forEach(el => {
    //     if (el.scrollWidth > el.clientWidth) el.style.outline = '2px solid red';
    // });
});

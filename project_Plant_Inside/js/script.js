$(document).ready(function () {
    // topbtn
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 50) {
            $(".topbutton").fadeIn();
        } else {
            $(".topbutton").fadeOut();
        }    
    });

    $(".topbutton").click(function() { 
        $("html,body").animate({ 
            scrollTop : 0
        },300);
        return false;
    });
        
    // mainBanner
    $(".container .main_banner img:gt(0)").css("left","1920px");
        
    let now = 0;
    const imgs = 3;
    
    setInterval(function() {
    
        now = now == imgs ? 0 : ++now;
    
        $(".container .main_banner img").eq(now).animate({"left":0},300);
        $(".container .main_banner img").eq(now-1).animate({"left":"-1920px"},300,function(){$(this).css("left","1920px");
    });
    },3000);










});
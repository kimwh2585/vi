//bob item list
$(function () {
    $('.bob_item.bob_item-hover > .bob_item-menu > ul > li > a').click(function() {
        return false;
    })
    

    $('.bob_item.bob_item-hover > .bob_item-menu > ul > li').mouseenter(function () {
        var $clickedBtn = $(this);

        var no = $clickedBtn.index() + 1;

        $clickedBtn.siblings('active').removeClass('active');
        $clickedBtn.addClass('active');

        var $bestItem = $clickedBtn.parent().parent().parent();

        $bestItem.find(' > .bob_item-prod > .bob_item-list.active').removeClass('active');
        $bestItem.find(' > .bob_item-prod > .bob_item-list:nth-child(' + no + ')').addClass('active');
    });
    
//quick_menu

$(function(){
    var $quick = $('.quick');
    var currentPosition = parseInt($(".quick").css("top"));
    $quick.css("top",  150); 
    
    $(window).scroll(function() {
    
    var position = $(window).scrollTop(); // 현재 스크롤바 위치 
    $quick.stop().animate({"top":position+currentPosition + 150 + "px"},1000);
        //1000은 속도(값이 작을 수록 빠르게 움직임)
});
});





//slider1
    var opts = {
        effect: 'random',
        animSpeed: 200,
        pauseTime: 3000,
    };
    opts['controlNav'] = true;
    opts['captionOpacity'] = 0.7;
    $('#nivoSlider1').nivoSlider(opts);

//right_slider  
    $('.carousel-1 > .owl-carousel').owlCarousel({
        autoplay: true, 
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });
});

$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
        scrollOverflow: false,
        anchors: ['page0', 'page1', 'page2', 'page3', 'page4'],
 	    menu: '#myMenu',
         navigation:true,

        onLeave: function(origin, destination, direction, trigger){
            if(origin.index == 0){
                $('.hd_wrap').css('background','rgba(0, 0, 0, 0.5)');
                $('.hd_wrap').css('border-bottom','1px solid #000');
            }
            if(origin.index == 3){
                $('#sect3 .left').removeClass('animate__fadeInUp');
                $('#sect3 .right').removeClass('animate__fadeInUp');
            }
            if(origin.index == 4){
                $('#sect4 .left').removeClass('animate__fadeInDown');
                $('#sect4 .right').removeClass('animate__fadeInDown');
            }
            if(origin.index == 5){
                $('#sect5 .item1').removeClass('animate__fadeInTopLeft');
                $('#sect5 .item2').removeClass('animate__fadeInTopRight');
                $('#sect5 .item3').removeClass('animate__fadeInBottomLeft');
                $('#sect5 .item4').removeClass('animate__fadeInBottomRight');
            }
        },

        afterLoad: function(origin, destination, direction, trigger){
            if(destination.index == 0){
                $('.hd_wrap').css('background','transparent');
                $('.hd_wrap').css('border-bottom','1px solid transparent');
            }
            if(destination.index == 3){
                $('#sect3 .left').addClass('animate__fadeInUp');
                $('#sect3 .right').addClass('animate__fadeInUp');
            }
            if(destination.index == 4){
                $('#sect4 .left').addClass('animate__fadeInDown');
                $('#sect4 .right').addClass('animate__fadeInDown');
            }
            if(destination.index == 5){
                $('#sect5 .item1').addClass('animate__fadeInTopLeft');
                $('#sect5 .item2').addClass('animate__fadeInTopRight');
                $('#sect5 .item3').addClass('animate__fadeInBottomLeft');
                $('#sect5 .item4').addClass('animate__fadeInBottomRight');
            }
        }

	});

    new Swiper('#sect1 .swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay:{
            delay: 2000, 
            disableOnInteraction: true, 
        },
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 1,
            },
            800 : {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1280 : {
                slidesPerView: 3,
            }
        }
    });
    new Swiper('#sect3 .swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 200,
        autoplay:{
            delay: 1000, 
            disableOnInteraction: true, 
        },
        spped: 200,
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 1,
            },
            800 : {
                slidesPerView: 2,
            },
        }
    });
    new Swiper('#sect4 .swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 200,
        autoplay:{
            delay: 1000, 
            disableOnInteraction: true, 
        },
        spped: 200,
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 1,
            },
            800 : {
                slidesPerView: 2,
            },
        }
    });

    
    $('.slider').bxSlider({
        mode: 'fade',
        auto: true,
        spped: 500,
        controls: false,
        pager: false,
    });
      
    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.tabs li').click(function(){
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();
        var tab=$(this).attr('rel');
        $('#'+tab).show();
    });
});
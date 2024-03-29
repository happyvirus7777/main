$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
        scrollOverflow: false,
        navigation: true,

        
        onLeave: function(origin, destination, direction, trigger){
            if(origin.index == 3){
                $('#sect3 .left').removeClass('animate__fadeInDown');
                $('#sect3 .right').removeClass('animate__fadeInDown');
            }
        },

        afterLoad: function(origin, destination, direction, trigger){
            if(destination.index == 3){
                $('#sect3 .left').addClass('animate__fadeInDown');
                $('#sect3 .right').addClass('animate__fadeInDown');
            }
        }
        
	});

    new Swiper('#sect1 .swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
            loop: true,
        },
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 400,
      });
    new Swiper('#sect3 .swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
            loop: true,
        },
        slidesPerView: 2,
        spaceBetween: 200,
        speed: 400,
      });
    new Swiper('#sect4 .swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
            loop: true,
        },
        slidesPerView: 2,
        spaceBetween: 200,
        speed: 400,
      });
    
      $('.slider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: 1000,
        speed: 300,
      });

      $('.tab_content').hide();
      $('.tab_content:first').show();
      $('.tabs li').click(function(){
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();
        var tab = $(this).attr('rel');
        $('#'+tab).show();
      });
      
});

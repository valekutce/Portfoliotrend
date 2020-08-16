$(function(){
    $(document).scroll(function(){
        var hei = $(".ssh-headers-9 .side-menu-hny").height();
        //var heiPromo = $(".is-loaded .slideshow__slide-caption").height();
        var heiPromo = 200;
        var doc = $(document).height();
        if($(document).scrollTop() >= hei && $(document).scrollTop() < heiPromo){
            $(".ssh-headers-9 .side-menu-hny").css('display','none')
        } if ($(document).scrollTop() >= heiPromo) {
            $(".ssh-headers-9 .side-menu-hny").fadeIn(300).css({
                'position':'fixed',
                'top':'8px',
                'right':'8px'
            });
        } if ($(document).scrollTop() < heiPromo && $(document).scrollTop() > hei) {
            $(".ssh-headers-9 .side-menu-hny").fadeIn(300).css({
                "position":'relative'
            }); 
        }
    });
});
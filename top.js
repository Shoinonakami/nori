$(function() {
    var $win = $(window),
        $main = $('main'),
        $header = $('header'),
        headerHeight = $header.outerHeight(),
        headerPos = $header.offset().top,
        fixedClass = 'is-fixed';

    $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > headerPos ) {
        $header.addClass(fixedClass);
        $main.css('margin-top', headerHeight);
    } else {
        $header.removeClass(fixedClass);
        $main.css('margin-top', '0');
    }
    });
});


let $top = $('.mobile-backimg');

$(window).on('scroll', function () {
    if ( $(this).scrollTop() > 100) {
        $top.addClass('mobile-backimgActive');
    }else{
        $top.removeClass('mobile-backimgActive');
    }

    var doch = $(document).innerHeight();
    var winh = $(window).innerHeight();
    var bottom = doch - winh; 
    if (bottom <= $(window).scrollTop()) {
        $top.removeClass('mobile-backimgActive');
    }
});
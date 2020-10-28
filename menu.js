let $invibi = $('.invibi-back-img');
let $team = $('.team-back-img');

$(window).on( 'scroll', function () {
    if ( $(this).scrollTop() > 300 ) {
        $invibi.addClass('invibi-back-imgActive');
    } else {
        $invibi.removeClass('invibi-back-imgActive');
    }

    if ( $(this).scrollTop() > 6000 ) {
        $team.addClass('team-back-imgActive');
        $invibi.removeClass('invibi-back-imgActive');
    } else {
        $team.removeClass('team-back-imgActive');
    }

    if($(this).scrollTop() > 8600){
        $team.removeClass('team-back-imgActive');
    }
});
$(function() {

    $('.comments-count').each(function() {

        url = 'https://graph.facebook.com/v2.3/?fields=share{comment_count}&id=' + $(this).data('href');
        count = 0;
        counter = $(this);

        $.getJSON(url, function(data) {

            if ( data.hasOwnProperty('share') ) count = data.share.comment_count;

            counter.append(count);

        });

    });

    var body = $('body');
    var drawer = $('#drawer');

    $('.toggle-drawer').click(function(e) {

        e.preventDefault();

        if (drawer.data('state') == 'closed') {

            body.addClass('push-drawer');
            drawer.removeClass('drawer-closed').addClass('drawer-open');
            drawer.data('state', 'open');

        } else {

            body.removeClass('push-drawer');
            drawer.removeClass('drawer-open').addClass('drawer-closed');
            drawer.data('state', 'closed');

        }

    });

    $(window).scroll(function() {

        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }

    });

    $('.scroll-top').click(function(e) {

        e.preventDefault();

        $('html, body').animate({scrollTop: 0}, 800);

        return false;

    });

    if (!$.cookie('msgcookie')) {

        $('.cookies-message').fadeIn();

        $('.btn-close-msg').click(function(e) {

            e.preventDefault();

            $.cookie('msgcookie', 'aceptado', { expires: 365 });
            $('.cookies-message').fadeOut();

        });

    }

});

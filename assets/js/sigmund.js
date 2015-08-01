$(function() {

    $('.comments-count').each(function() {

        url = 'https://graph.facebook.com/v2.3/?fields=share{comment_count}&id=' + $(this).data('href');
        count = 0;

        $.getJSON(url, function(data) {

            if ( data.hasOwnProperty('share') ) count = data.share.comment_count;

        });

        $(this).append(count);

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

});

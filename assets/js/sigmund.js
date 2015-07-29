$(function() {

    $('.comments-count').each(function() {

        url = 'https://graph.facebook.com/v2.3/?fields=share{comment_count}&id=' + $(this).data('href');
        count = 0;

        $.getJSON(url, function(data) {

            if ( data.hasOwnProperty('share') ) count = data.share.comment_count;

        });

        $(this).append(count);

    });

});

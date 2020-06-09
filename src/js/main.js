$( document ).ready(function() {

    new WOW().init();

    $(window).resize(function() {
        $('.product-img').each(function(){
            if($(this).width()!=0)
                $(this).height($(this).width());
        });
    }).resize();

    $('#thumbnails-life a[data-toggle="tab"], #thumbnails-home a[data-toggle="tab"]').on('show.bs.tab', function(e) {
        let target = $(e.target).data('target');
        $(target)
            .addClass('active show')
            .siblings('.tab-pane.active')
            .removeClass('active show')
    });

    swiperApp = new Swiper ('.swiper-app',{
        direction: 'vertical',
        slidesPerView: 1,
        navigation: false,
        pagination: {
            el: '.app-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    if($('.callback-success').css("display") === "block") {
        $('.feedback-wrapper').hide();
    }

    var inputs = $('input[type="text"]');
    var button = $('button[type="submit"]');

    (function() {
        inputs.keyup(function() {
            checkform();
        });
    })();

    function checkform()
    {
        var empty = false;
        inputs.each(function() {
            if ($(this).val() === '') {
                empty = true;
            }
        });
        if (empty) {
            button.attr('disabled', 'disabled');
        } else {
            button.removeAttr('disabled');
        }
    }

    var phoneMask = IMask(
        document.getElementById('phoneNumber'), {
            mask: '+{7} 000 000-00-00'
        });

});
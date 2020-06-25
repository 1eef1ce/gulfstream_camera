$( document ).ready(function() {

    new WOW().init();

    var phoneMask = IMask(
        document.getElementById('phoneNumber'), {
            mask: '+{7} 000 000-00-00'
        });

    var inputs = $('input[type="text"]');
    var checkbox = $('input[type="checkbox"]');
    var button = $('button[type="submit"]');

    (function() {
        inputs.keyup(function() {
            checkform();

        });
    })();

    (function() {
        checkbox.change(function() {
            checkform();
        });
    })();
    function checkform()
    {
        var empty = false;
        if (!checkbox.is(':checked')) {
            empty = true;
        }
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

    swiperMobile = new Swiper('.swiper-mobile', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        effect: 'fade'
    });

    swiperMain = new Swiper('.swiper-main', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        effect: 'fade'
    });

    swiperSteps = new Swiper('.swiper-steps', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.step-nav-next',
            prevEl: '.step-nav-prev',
        },
        pagination: {
            el: '.step-pagination',
            clickable: true,
            bulletClass: 'nav-bullet',
            bulletActiveClass: 'active'
        },
    });

    swiperApp = new Swiper('.swiper-app', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.app-nav-next',
            prevEl: '.app-nav-prev',
        },
        pagination: {
            el: '.app-pagination',
            clickable: true,
            bulletClass: 'nav-bullet',
            bulletActiveClass: 'active'
        },
    });

    $('.app-option').hover(function(e) {
        e.preventDefault();
        var num_slide = $(this).data('slide-next');

        $('#option'+num_slide).css('display', 'inline-block');
        $('.app-img').not('#option'+num_slide).css('display', 'none');
    });

    $('body').on('click', '.app-option', function(event) {
        event.preventDefault();
        $(this).addClass('active');
        $('.app-option').not(this).removeClass('active');
    });

    $(window).resize(function() {
        if ($(window).width() > 767 && $(window).width() < 1600) {
            $('.features').addClass('h-scroll');
        }
        else {$('.features').removeClass('h-scroll');}
    }).resize();

    $(function() {
        /* For each horizontal scroll container, add a wrapper & set it's shadows */
        $(".h-scroll").each(function() {
            $(this).wrap('<div class="h-scroll-wrap"></div>');
            setContainerScroll($(this));
        });

        /* Set shadows when window is resized */
        $(window).on("resize", function() {
            $(".h-scroll").each(function() {
                setContainerScroll($(this));
            });
        });

        $(".h-scroll").on("scroll", function() {
            setContainerScroll($(this));

        });
    });

    function setContainerScroll($container) {
        var $this = $container,
            scrollLeft = $this.scrollLeft(),
            maxScrollWidth = $this.innerWidth(),
            maxScrollAmt = $this.find("ul").prop('scrollWidth') - maxScrollWidth;

        if (scrollLeft >= maxScrollAmt) {
            $this.closest(".h-scroll-wrap").addClass("scrolled-right");
        } else {
            $this.closest(".h-scroll-wrap").removeClass("scrolled-right");
        }

        if (scrollLeft > 0) {
            $this.closest(".h-scroll-wrap").addClass("scrolled-left");
        } else {
            $this.closest(".h-scroll-wrap").removeClass("scrolled-left");
        }
    }

});
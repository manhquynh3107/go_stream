(function(window, $) {
    var $doc = $(document);

    var config = {}

    // Common functions
    var oe = {
        selectbox: function() {
            $('.selectpicker').selectpicker({
                mobile: true,
                dropupAuto: false,
                width: '100%',
                size: false
            });
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
                $('.selectpicker').selectpicker('mobile').addClass('mobile-selector');
            }

            $doc.on('change', '.selectpicker[title]', function() {
                var $this = $(this);
                $this.parent('.bootstrap-select').addClass('value-selected');
            });
        },
        
        slidehome: function() {

            $('.slider-banner-min').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                nextArrow: false,
                prevArrow: false,
                dots: true,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        },
        scrollTopButton: function() {
            var offset = 200;
            var duration = 500;
            var button = $('<div class="be-scroll-top"></div>');
            button.appendTo("body");
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > offset) {
                    button.fadeIn(duration);
                } else {
                    button.fadeOut(duration);
                }
            });
            button.on('touchstart mouseup', function(e) {
                $('html, body').animate({
                    scrollTop: 0
                }, duration);
                e.preventDefault();
            });
        },
        slidehome: function() {
            $('.slider-banner').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                nextArrow: false,
                prevArrow: false
            });
        },

        headerSticky: function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 1) { 
                    $('.navbar').addClass("sticky"); 
                } else { 
                    $('.navbar').removeClass("sticky"); 
                }
            });

        },

        headerFixed: function() {
            var scrollAnchor = 0,
                $header = $('.oe-header-fixed'),
                pos = 90;

            if ($(window).scrollTop() > pos) {
                $header.addClass('oe-header-show');
            }

            $(window).on('scroll DOMMouseScroll', function() {
                var scrollTop = $(window).scrollTop();

                if (scrollTop - scrollAnchor >= 30 || scrollTop - scrollAnchor <= -30) {
                    scrollAnchor = scrollTop;

                    if (scrollTop > pos) {
                        $header.addClass('oe-header-show');
                        $('#logo').addClass('hide');
                        $('#logo2').removeClass('hide');

                    } else {
                        $header.removeClass('oe-header-show');
                        $('#logo').removeClass('hide');
                        $('#logo2').addClass('hide');
                    }
                }
            });
        },
        showSearch: function() {
            $(window).click(function() {
                $('#goLanguage').removeClass('show');
            });
            $('#formSearch').on('click', function() {
                $('#goLanguage').toggleClass('show');
                event.stopPropagation();
            });
            $('#goLanguage').on('focusout', function() {
                $('#goLanguage').removeClass('show');
            });

        },
        whyScroll: function() {
            var ck = true;
            $(window).scroll(function() {
                var height = $(window).scrollTop();
                var height_why = $('#whySection').scrollTop();
                if (ck)
                    if (height > 500) {
                        go.runPercent();
                        $('.scroll-horizontal input').each(function() {
                            var percent = $(this).val();
                            $(this).parent().find('.scroll').css('width', percent + '%');
                        });
                        delete go.runPercent;
                        ck = false;
                    }
            });
        },
        syncing: function() {
            $('.slider-for').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: false,
              asNavFor: '.slider-nav',
              autoplay: true,
              autoplaySpeed: 4000,
              useTransform: false,
            });

            $('.slider-nav').slick({
              slidesToShow: 6,
              slidesToScroll: 1,
              asNavFor: '.slider-for',
              dots: false,
              centerMode: false,
              focusOnSelect: true
            });
        },
        syncing1: function() {
            $('.slider-for1').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: false,
              asNavFor: '.slider-nav1',
              autoplay: true,
              autoplaySpeed: 3000,
              useTransform: false
            });

            $('.slider-nav1').slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              asNavFor: '.slider-for1',
              dots: false,
              centerMode: false,
              focusOnSelect: true
            });
        },
        scroll: function() {
            $("a").on('click', function(event) {
                if (this.hash !== "") {
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function() {
                        window.location.hash = hash;
                    });
                }
            });
        },
        fullscreen: function() {
            var setREVStartSize = function() {
                var tpopt = new Object();
                tpopt.startwidth = 1920;
                tpopt.startheight = 1080;
                tpopt.container = jQuery('#rev_slider_30_1');
                tpopt.fullScreen = "on";
                tpopt.forceFullWidth = "off";

                tpopt.container.closest(".rev_slider_wrapper").css({ height: tpopt.container.height() });
                tpopt.width = parseInt(tpopt.container.width(), 0);
                tpopt.height = parseInt(tpopt.container.height(), 0);
                tpopt.bw = tpopt.width / tpopt.startwidth;
                tpopt.bh = tpopt.height / tpopt.startheight;
                if (tpopt.bh > tpopt.bw) tpopt.bh = tpopt.bw;
                if (tpopt.bh < tpopt.bw) tpopt.bw = tpopt.bh;
                if (tpopt.bw < tpopt.bh) tpopt.bh = tpopt.bw;
                if (tpopt.bh > 1) {
                    tpopt.bw = 1;
                    tpopt.bh = 1
                }
                if (tpopt.bw > 1) {
                    tpopt.bw = 1;
                    tpopt.bh = 1
                }
                tpopt.height = Math.round(tpopt.startheight * (tpopt.width / tpopt.startwidth));
                if (tpopt.height > tpopt.startheight && tpopt.autoHeight != "on") tpopt.height = tpopt.startheight;
                if (tpopt.fullScreen == "on") {
                    tpopt.height = tpopt.bw * tpopt.startheight;
                    var cow = tpopt.container.parent().width();
                    var coh = jQuery(window).height();
                    if (tpopt.fullScreenOffsetContainer != undefined) {
                        try {
                            var offcontainers = tpopt.fullScreenOffsetContainer.split(",");
                            jQuery.each(offcontainers, function(e, t) { coh = coh - jQuery(t).outerHeight(true); if (coh < tpopt.minFullScreenHeight) coh = tpopt.minFullScreenHeight })
                        } catch (e) {}
                    }
                    tpopt.container.parent().height(coh);
                    tpopt.container.height(coh);
                    tpopt.container.closest(".rev_slider_wrapper").height(coh);
                    tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);
                    tpopt.container.css({ height: "100%" });
                    tpopt.height = coh;
                } else {
                    tpopt.container.height(tpopt.height);
                    tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);
                    tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);
                }
            };
            setREVStartSize();
            var tpj = jQuery;
            tpj.noConflict();
            var revapi30;
        },
        showLang: function() {
            $('.list-lg li').click(function(event) {
                var a = $(this).find('img').attr('src');
                $('#formSearch').find('img').attr('src', a);
            });
        },
        sliderfull: function() {
            $('.item-full.slick-slide').click(function(event) {
                $(this).siblings().find('.content-list').removeClass('active');
                $(this).find('.content-list').addClass('active');
            });
        }, 
        animate: function() {
            $('.item-full').click(function(event) {
                $('.slider-for .slick-slide').removeClass('bounceInRight animated');
                $('.slider-for .slick-slide.slick-active').addClass('bounceInRight animated');
            });
        }
    };

    // Make it global
    window.oe = oe;
})(window, jQuery);


$(function() {
    oe.headerFixed();
    oe.selectbox();
    oe.headerSticky();
    //oe.slidehome();
    oe.slidehome();
    //oe.showSearch();
    oe.syncing();
    oe.syncing1();
    oe.fullscreen();
    oe.sliderfull();
    oe.scrollTopButton();
    oe.showLang();
    oe.animate();
    // Homepage
});
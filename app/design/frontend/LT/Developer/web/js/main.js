require([
    'jquery',
    'slick',
    'inputMask'
], function($, slick, inputMask) {
    'use strict';

    // Slick
    function slickFull() {
        let homeCarousel = '#home .carousel-slick';

        if (homeCarousel) {
            $('#home .carousel-slick').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            dots: false,
                            arrows: false,
                        }
                    }
                ]
            });
        }
    }

    // Menu Navbar
    function navbar() {

        $(document).on('click', '.showmenu', function() {
            showMenu();
        });
        $(document).on('click', '.links .close', function(){
            closeMenu()
        });

        $(document).on('click', '.links .close', function(){
            closeMenu()
        });

        $(document).on('click', '.navbar .links .link-redirect', function(el){
            // el.preventDefault();
            // let id = $(this).attr('href'),
            //     targetOffset = $(this).offset().top;

            // $('html, body').animate({
            //     scrollTop: targetOffset
            // }, 800);

            closeMenu();
        });

        function closeMenu() {
            $('.navbar .logo').css('position', 'unset');
            $('.page-header .wrapper >.header').css('display', 'none');
            $('.links').css('left', '-100%');
        }
        function showMenu() {
            $('.navbar .logo').css('position', 'fixed');
            $('.page-header .wrapper >.header').css('display', 'flex');
            $('.links').css('left', '0px');
        }


        // Mask
        var SPMaskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            },
            clearIfNotMatch: true
        };

        $('#telephone').mask(SPMaskBehavior, spOptions);
        $('#fax').mask(SPMaskBehavior, spOptions);
    }

    // Forms
    function mixinForms() {
        $(document).on('focus', '.form .input-text', function() {
            let div = $(this).parent().parent();
            $(div).find('.label').addClass('focus-label');
        });

        $(document).on('focusout', '.form .input-text', function() {
            let div = $(this).parent().parent();

            if ($(this).val() != '') {
                $(div).find('.label').addClass('focus-label');
            } else {
                $(div).find('.label').removeClass('focus-label');
            }
        });

        let inputs = window.document.querySelectorAll('.form .field input[type="text"], input[type="email"], input[type="date"]');

        $(inputs).each((key, val) => {
            if ($(val).val() != '') {
                $(val).parent().parent().find('label').addClass('focus-label');
            }
        });
    }

    navbar();
    // mixinForms();
    slickFull();

});

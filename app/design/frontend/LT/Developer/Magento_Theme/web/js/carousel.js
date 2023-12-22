define([
    'jquery',
    'slick'
], function ($, slick) {
    'use strict';

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear'
    });
});

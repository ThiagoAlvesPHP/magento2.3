define(['jquery', 'mage/translate'], function ($, $t) {
    'use strict';

    $(document).ready(function () {
        function checkAndSetBodyStatus() {
            if ($("body").attr("cz-shortcut-listen") === "true") {
                $('.loading-mask').fadeOut('slow');

                let div = $('main div.messages');

                if (div && div.length > 0) {
                    var messages = $.mage.messages;
                    if (messages && messages.clear) {
                        messages.clear();
                    }

                    setTimeout(() => {
                        $(div).fadeOut('slow');
                    }, 4000);
                }
            }
        }

        checkAndSetBodyStatus();

        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName === "cz-shortcut-listen") {
                    checkAndSetBodyStatus();
                }
            });
        });

        observer.observe(document.body, { attributes: true });
    });
});

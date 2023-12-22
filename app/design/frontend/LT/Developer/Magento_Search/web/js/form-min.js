define([
    'jquery',
    'matchMedia',
    'ko'
], function ($, mediaCheck, ko) {
    'use strict';

    mediaCheck({
        media: '(max-width: 780px)',
        // Switch to Mobile Version
        entry: function () {
            $(document).on('click', '.minisearch-label-icon', function (event) {
                $('#block-search-mobile').toggle();
                $('#action_search').toggle();
            });

            // Cria uma variável observável para monitorar a existência da classe '.active'
            var isClassActive = ko.observable(false);
            console.log(isClassActive());

            // Função para verificar a existência da classe '.active' e atualizar a variável observável
            function checkActiveClass() {
                var hasActiveClass = $('#search_mini_form').find('.active').length > 0;
                isClassActive(hasActiveClass);
            }

            // Executa a verificação inicialmente
            checkActiveClass();

            // Monitora continuamente a existência da classe '.active'
            setInterval(checkActiveClass, 100);

            // Função de callback para ser chamada quando a classe '.active' é detectada
            function onActiveClassDetected() {
                $('#block-search-mobile').show();
                $('#action_search').show();
            }

            // Função de callback para ser chamada quando a classe '.active' não é mais detectada
            function onActiveClassRemoved() {
                $('#block-search-mobile').css('display', 'none');
                $('#action_search').css('display', 'none');
            }

            // Assina a variável observável para chamar a função de callback adequada quando a classe muda
            isClassActive.subscribe(function (newValue) {
                if (newValue) {
                    onActiveClassDetected();
                } else {
                    onActiveClassRemoved();
                }
            });
        },
        // Switch to Desktop Version
        exit: function () {
            // Código a ser executado ao sair do modo mobile
        }
    });
});

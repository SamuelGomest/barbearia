$(document).ready(function() {
    // Funcionalidade do menu hamburguer
    $('.menu-icon').click(function() {
        $('.menu-items').slideToggle();
    });

    // Funcionalidade do carrossel de imagens
    setInterval(function() {
        $('.carousel').animate({marginLeft: '-100%'}, 1000, function() {
            $(this).find('img:first-child').appendTo(this);
            $(this).css({marginLeft: 0});
        });
    }, 3000);
});

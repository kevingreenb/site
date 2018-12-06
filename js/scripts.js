 /* ================================
            Preloader
================================*/
$(window).on('load', function(){ // makes sure site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});
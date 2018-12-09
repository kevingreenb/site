 /* ================================
            Preloader
================================*/
 $(window).on('load', function () { // makes sure site is loaded
     $('#status').fadeOut();
     $('#preloader').delay(350).fadeOut('slow');
 });

 /* ================================
            Preloader
================================*/
 $(function () { // Short form on ready method
     $("#team-members").owlCarousel({
         items: 2,
         autoplay: true,
         smartSpeed: 1000,
         loop: true,
         autoplayHoverPause: true,
         nav: true,
         dots: false,
         navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
     });
 });

 /* ================================
            Progress Bars
================================*/
 $(function () {
     $("#progress-elements").waypoint(function () {
         $(".progress-bar").each(function () {
             $(this).animate({
                 width: $(this).attr("aria-valuenow") + "%"
             }, 1000);
         });

         this.destroy();
     }, {
         offset: 'bottom-in-view'
     });
 });

 /* ================================
            Responsive Tabs
================================*/
 $(function () {
     $("#services-tabs").responsiveTabs({
         animation: 'slide'
     });
 });

 /* ================================
            Preloader
================================*/
 $(window).on('load', function () { // makes sure site is loaded
     $('#status').fadeOut();
     $('#preloader').delay(350).fadeOut('slow');
 });

 /* ================================
            Pets
================================*/
 $(function () { // Short form on ready method
     $("#team-members").owlCarousel({
         items: 2,
         autoplay: false,
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

 /* =========================================
                Portfolio
 ============================================ */
 $(window).on('load', function () {

     // Initialize Isotope
     $("#isotope-container").isotope({});

     // filter items on button click
     $("#isotope-filters").on('click', 'button', function () {

         // get filter value
         var filterValue = $(this).attr('data-filter');

         // filter portfolio
         $("#isotope-container").isotope({
             filter: filterValue
         });

         // active button
         $("#isotope-filters").find('.active').removeClass('active');
         $(this).addClass('active');
     });
 });
 /* =========================================
                Magnifier
 ============================================ */
 $(function () {

     $("#portfolio-wrapper").magnificPopup({
         delegate: 'a', // child items selector, by clicking on it popup will open
         type: 'image',
         gallery: {
             enabled: true
         }
     });

 });
 /* =========================================
                Experience
 ============================================ */
 $(function () { // Short form on ready method
     $("#testimonial-slider").owlCarousel({
         items: 1,
         autoplay: true,
         smartSpeed: 1000,
         loop: true,
         autoplayHoverPause: true,
         nav: true,
         dots: false,
         navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
     });
 });
 /* =========================================
                Stats
 ============================================ */
 $(function () {
     $('.counter').counterUp({
         delay: 10,
         time: 2000
     });
 });

 /* =========================================
                Navigation
 ============================================ */

 $(function () {
     showHideNav();

     $(window).scroll(function () {
         showHideNav()
     });

     function showHideNav() {
         if ($(window).scrollTop() > 50) {
             $("nav").addClass("white-nav-top");
             $("#back-to-top").fadeIn();
         } else {
             $("nav").removeClass("white-nav-top");
             $("#back-to-top").fadeOut();
         }
     }
 });

 // Smooth Scrolling 
 $(function () {
     $("a.smooth-scroll").click(function (event) {
         event.preventDefault();
         //get section id
         var section_id = $(this).attr("href");
         $("html, body").animate({
             scrollTop: $(section_id).offset().top - 64
         }, 1250, "easeInOutExpo");
     });
 });

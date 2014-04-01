$( document ).ready(function() {

      if ( Modernizr.touch ) {
        $('.js-casestudy-flexslider').flexslider();
      } else {
        var initFlexSlider = function() {
            var retina = window.devicePixelRatio > 1;
            $('.js-casestudy-flexslider').flexslider({
                animation: "slide",
                animationLoop: true,
                slideshow: false,
                itemMargin: 20,
                touch: true,
                start: function(slider){
                    // centerCaption();
                    // //force img load
                    // $('.js-casestudy-flexslider img').each(function() {
                    //   var imageSrc = $(this).data('min-width-825');
                    //   var imageRetinaSrc = $(this).data('pixel-ratio-1.5');
                    //   if (  retina === true ) {
                    //       $(this).attr("src", imageRetinaSrc);
                    //   } else {
                    //       $(this).attr("src", imageSrc);
                    //   }
                    // });

                    $('.casestudy-flexslider--img-container').on('click', function () {
                        if ( $(this).parent('li').prev().hasClass('flex-active-slide') ) {
                          $(this).parents('.js-casestudy-flexslider').find('.flex-direction-nav li a.flex-next').trigger('click');
                        }
                        if ( $(this).parent('li').next().hasClass('flex-active-slide') ) {
                          $(this).parents('.js-casestudy-flexslider').find('.flex-direction-nav li a.flex-prev').trigger('click');
                        }
                    });
                },
                before: function(slider){
                    // centerCaption();
                }
            });
        };
        initFlexSlider();
      }
});

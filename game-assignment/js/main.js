// Money clicking function //

$(document).ready(function() {

   $('div').click(function() {
       $(this).toggle(700);

   }); 
});

// Level One text fade out //

$(document).ready(function() {

    $(".l1").fadeOut(3500);


});

// Main Menu blinking function //

$(function () {
    var $element = $('.begin');
    function fadeInOut () {
        $element.fadeIn(700, function () {
            $element.fadeOut(700, function () {
                $element.fadeIn(700, function () {
                    setTimeout(fadeInOut, 500);
                });
            });
        });
    }

    fadeInOut();
});

// Start the game blinking function //

$(function () {
    var $element = $('.start');
    function fadeInOut () {
        $element.fadeIn(700, function () {
            $element.fadeOut(700, function () {
                $element.fadeIn(700, function () {
                    setTimeout(fadeInOut, 500);
                });
            });
        });
    }

    fadeInOut();
});




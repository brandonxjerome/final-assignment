// Money clicking function //

$(document).ready(function() {

var w = $(window).width();
var h = $(window).width();

    $('.money').each(function() {
        $(this).css('left', Math.random() * w).css('top', Math.random() * h)
    })


   $('.money').click(function() {
       $(this).toggle(600);

   }); 


    // Level One text fade out //

    $(".l1").fadeOut(3000);

    $('a[data-page]').on('click', function(e) {

        var go = $(this).attr('data-page');
        $('.page').fadeOut(400).filter('#'+go).fadeIn(400);
    });

    



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

var cash = document.getElementById('cash');
$('.money').on('click', function(){
    $(this).on('click');
    $(this).off('click');
    cash.load();
    cash.play();
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




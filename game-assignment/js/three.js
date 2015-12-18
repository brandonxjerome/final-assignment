    $(document).ready(function() {

    //Money appearing in random positions

    //var w = $(window).width();
    //var h = $(window).height();

    //$('.money').each(function() {
    //$(this).css('left', Math.random() * h).css('top', Math.random() * w)
    //})


    $('.money').click(function() {
    $(this).hide(0);

    }); 


    // LevelTwo text fade out 

    $(".l1").fadeOut(3000);
    $('a[data-page]').on('click', function(e) {

    var go = $(this).attr('data-page');

    $('.page').fadeOut(400).filter('#'+go).fadeIn(400);

    });
    });

    // Main Menu blinking function 

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

    // Money sound effect when clicked

    var cash = document.getElementById('cash');
    $('.money').on('click', function(){
    $(this).on('click');
    $(this).off('click');
    cash.load();
    cash.play();
    });

    // Start the game blinking function 

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



    //Money appearing random and clicking it

    $("document").ready(function(){
    var score=0;
    $(".money").click(function(){
    y=Math.random()*1500;
    d=Math.random()*800;
    w=Math.random()*10;
    if (w<10) { $(".money").css({left: y, top: d, width: "50px"}); }
    if (w>10) { $(".money").css({left: y, top: d, width: w}); }
    score+=1;
    });

    // Timer Function and Score

    $("#time p").animate({width: "0"}, 15000, function(){
    $("#time").fadeOut(300, function(){
    $("body").append("<div id='score'><p>Good Job! You completed level Three with $ <span id='sc'>"+score+"</span></p></div>");
    $("#score").fadeIn(1000);
    $("#score").css({left: (screen.width)/2 - 250, top: (screen.height)/2 - 25});
    });
    });
    });
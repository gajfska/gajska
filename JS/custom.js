// WOW ANIMATION

$(function () {
    new WOW().init();
})

//   NAVIGATION
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() < 50){
            //hide navbar
            $("nav").removeClass("werka-top-navbar");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("werka-top-navbar");
            $("#back-to-top").fadeIn();
        }
    })
});

//  SMOOOTH SCROOLING
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        // get/return id like #about if is clicked
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 60
        }, 1250), "easeInOutExpo";
    });
});

//  CLOSE MOBILE MENU
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggler").click();
    })
})
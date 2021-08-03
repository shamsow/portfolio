$(window).scroll(function() {
    if(Math.ceil($(window).scrollTop() + $(window).height()) > $(document).height() - 200) {
        $('.toTop').fadeIn();
    } else {
        $('.toTop').fadeOut();
    }
});

$( document ).ready(function() {
    console.log( "ready!" );
    $("div.toTop").click(function() {
        console.log("TO TOP");
        $("html, body").animate({scrollTop: 0}, 1000);
     });
});

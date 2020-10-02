function redirectCustLogin() {
    url = "https://www.liveconnect.in";
    if (navigator.userAgent.match(/Android/i)) {
        url = "https://play.google.com/store/apps/details?id=com.c2info.liveconnect.productlist&hl=en";
    }
    if (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i)) {

        url = "https://apps.apple.com/in/app/liveconnect/id1179736465";
    }

    window.open(url);
}

function redirectMfacLogin() {
    url = "http://www.stockandsales.com";
    if (navigator.userAgent.match(/Android/i)) {
        url = "https://play.google.com/store/apps/details?id=com.c2info.sas&hl=en";
    }
    if (navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {

        url = "http://mobile.stockandsales.com";
    }

    window.open(url);
}
// :: 5.0 SMOOTH SCROLLING ACTIVE CODE
var scrollLink = $('.scroll');
scrollLink.on('click', function(e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});

// :: 3.0 SCROLL TO TOP ACTIVE CODE
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 300) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$("#back-to-top").click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
});
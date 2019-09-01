$(document).ready(function () {
    //side-bar
    $('.menu-btn').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");
        $('html, body').animate({
            scrollTop: 0
        }, 1);
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
    });
    $(".nav-links").click(function (e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////
    //megamenu
    $(".megamenu-link").hover(function () {
        $('.megamenu-link').addClass('mega-active');
        $('.megamenu').addClass("mega-in");
        $('.megamenu').removeClass("mega-out");
    }, function () {
        $('.megamenu-link').removeClass('mega-active');
        $('.megamenu').removeClass("mega-in");
        $('.megamenu').addClass("mega-out");
    });

    $(".megamenu").hover(function () {
        $('.megamenu-link').addClass('mega-active');
        $('.megamenu').addClass("mega-in");
        $('.megamenu').removeClass("mega-out");


    }, function () {
        $('.megamenu-link').removeClass('mega-active');
        $('.megamenu').removeClass("mega-in");
        $('.megamenu').addClass("mega-out");
    });
    ////////////////////////////////////////////////////////////
    // search
    // Mobile Search 
    $('.search-btn').click(function () {
        $('.search-pop').slideDown(500);
        $('body').css("overflow", "hidden");
    });
    $('.search-pop').click(function () {
        $('.search-pop').slideUp(500);
        $('body').css("overflow-x", "auto");
    });
    $(".search").click(function (e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////

    // Fixed Header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('fixednav');
        } else {
            $('.header').removeClass('fixednav');
        }
    });
    ////////////////////////////////////////////////////////////
    // Accordion
    if ($(window).width() <= 767) {
        $(".foot-nav-links-header").addClass("mo-accordion");
        $(".foot-links").addClass("mo-panel");

        $(".newsletter-head").addClass("mo-accordion");
        $(".news-body").addClass("mo-panel");
    }
    var acc = document.getElementsByClassName("mo-accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("mo-active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    ////////////////////////////////////////////////////////////
    // Main Slider
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: false,
        margin: 10,
        rtl: true,
        loop: true,
        nav: false,
        dots: false
    });


    if ($(window).width() >= 500 && $(window).width() <= 991) {
        var x = $(".header-nav").width()
        $(".search-container").width(x);
    }
    ////////////////////////////////////////////////////////////


    //map
    var adresse = "<img style='width:50px; text-align: left; display:inline-block; margin-right: 10px; vertical-align: sub;' src='img/logofooter.png'> <div style='display:inline-block;'>Blackstone<br>0540000000<br>info@blackstone.sa</div>";


    var location = [adresse[0], $("#map").attr("lat"), $("#map").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(24.8629889, 46.5980617),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));

    ////////////////////////////////////////////
    $('.news-slider').owlCarousel({
        items: 2,
        autoplay: false,
        margin: 30,
        rtl: true,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1,
            },
            500: {
                items: 1,
                nav: false,
                dots: true,
            },
            768: {
                items: 1,
                nav: false,
            },
            992: {
                items: 2,
                nav: false,
            },
        }
    });
    AOS.init();
});
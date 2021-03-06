(function ($) {
    "use strict"; // Start of use strict

    // Preloader Start
    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });
    // Preloader End

    /// MAIN MENU SCRIPT START

    $('nav.mobile_menu').meanmenu({
        meanScreenWidth: '991'
    });
    $('nav.mean-nav li > a:first-child').on('click', function () {
        $('a.meanmenu-reveal').click();
    });

    // MAIN MENU SCRIPT END

    // Veno Box
    $('.venobox').venobox({
        titleattr: 'data-title',
        numeratio: true,
    });

    // --------Scroll To Top---------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // --------Scroll To Top---------

    //Search Option Start

    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = "<div style='color:rgba(0,0,0,.4);'>কোন সেবা খুঁজতে চান?</div>";
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 0; j < selElmnt.length; j++) {
            /*for each option in the original select element,
             create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                 and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
             and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
         except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
     then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);

    //Search Option End

    // Home App Download Slider
    var all_slide = $('.home-app-slider-wrap');
    all_slide.owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    $('.slide_nav .testi_next').on('click', function () {
        all_slide.trigger('next.owl.carousel');
    });

    $('.slide_nav .testi_prev').on('click', function () {
        all_slide.trigger('prev.owl.carousel');
    });
    // Home App Download Slider

    // Home Recent Questions Slider
    var question_slide = $('.recent-questions-slider-wrap');
    question_slide.owlCarousel({
        loop: true,
        margin: 5,
        autoplay: false,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });
    $('.slide_nav .testi_next').on('click', function () {
        question_slide.trigger('next.owl.carousel');
    });

    $('.slide_nav .testi_prev').on('click', function () {
        question_slide.trigger('prev.owl.carousel');
    });
    // Home Recent Questions Slider

    // Home Popular Services Slider
    var popular_slide = $('.popular-services-slider-wrap');
    popular_slide.owlCarousel({
        loop: true,
        margin: 5,
        autoplay: false,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });
    $('.popular_slide_nav .testi_next').on('click', function () {
        popular_slide.trigger('next.owl.carousel');
    });

    $('.popular_slide_nav .testi_prev').on('click', function () {
        popular_slide.trigger('prev.owl.carousel');
    });
    // Home Popular Services Slider

    // Guarantee Fixed Nav Tabs
    if ($(window).width() > 767) {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 700) {
                $('.guarantee-menu').addClass("sticky-menu");
            } else {
                $('.guarantee-menu').removeClass("sticky-menu");
            }
        });
    }
    // Guarantee Fixed Nav Tabs

    // How To Details Fixed Nav Tabs
    if ($(window).width() > 767) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.how-to-details-page-area .guarantee-menu').addClass("sticky-menu");
            } else {
                $('.how-to-details-page-area .guarantee-menu').removeClass("sticky-menu");
            }
        });
    }
    // How To Details Fixed Nav Tabs

    // More Services Fixed Nav Tabs
    if ($(window).width() > 767) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 130) {
                $('.how-to-details-page-area .guarantee-menu.more-services-left-menu').addClass("sticky-menu");
            } else {
                $('.how-to-details-page-area .guarantee-menu.more-services-left-menu').removeClass("sticky-menu");
            }
        });
    }
    // More Services Fixed Nav Tabs

    // More Services Mobile Menu Fixed Nav Tabs
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 200) {
                $('.more-services-page-area .mobile-more-services-left-menu').addClass("sticky-menu");
            } else {
                $('.more-services-page-area .mobile-more-services-left-menu').removeClass("sticky-menu");
            }
        });
    // More Services Mobile Menu Fixed Nav Tabs

    //Accordion Box
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {

            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');

            if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                return false;
            } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
            }
        });
    }

    // Review Rating Js Start
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('#stars li').on('click', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = $('#stars li.selected').last().data('title');
        var msg = "";
        if (ratingValue > 1) {
            msg = ratingValue;
        } else {
            msg = ratingValue;
        }
        responseMessage(msg);

    });

    function responseMessage(msg) {
        $('.success-box').fadeIn(200);
        $('.success-box div.text-message').html("<span>" + msg + "</span>");
    }
    // Review Rating Js End

    // Hadayet Js Start

    // Logo Slider
    $('.details-photo-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: [

            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"

        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });

    // Customer Slider
    $('.customer-slider-area ').owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: [

            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"

        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });
    // Why love Slider
    $('.why-love-slider-area').owlCarousel({
        loop: true,
        dots: true,
        margin: 10,
        nav: true,
        navText: [

            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"

        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });
    // client asking
    $('.client-asking-slider').owlCarousel({
        loop: true,
        dots: true,
        margin: 0,
        nav: true,
        navText: [

            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"

        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    // Bottom area fixed
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 620) {

            $('.fixed-area').addClass("fixed-sticky");
        } else {
            $('.fixed-area').removeClass("fixed-sticky");
        }
    });

    $("#fun-one").click(function () {
        $("#close-one").click();
    });

    // Why love Slider
    $('.business-slider-text ').owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: [

            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"

        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });
    // when page
    $("#when-close").click(function () {
        $("#close-two").click();
    });

    // Hadayet Js End

    //--------- Initialize WOW JS
    new WOW().init();

})(jQuery); // End of use strict
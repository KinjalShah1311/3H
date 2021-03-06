$(document).ready(function() {
     $("#headerID").load("header.html");
     $("#footerID").load("footer.html");

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});

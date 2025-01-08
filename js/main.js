$(function () {
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1176,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        
    });

    $('.menu-btn').on('click', function () {
        $('.menu-list').toggleClass('menu-list-active')
    });
 });
$(function () {
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true
        
    });

    $('.menu-btn').on('click', function () {
        $('.menu-list').toggleClass('menu-list-active')
    });
 });
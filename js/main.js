$(function() {
    console.log(screen.width)
    if (screen.width < 600) {
        $('.reviews__slider').slick({

            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,


        });
    } else if (screen.width <= 768) {
        $('.reviews__slider').slick({

            arrows: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,


        });
    } else {
        $('.reviews__slider').slick({

            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,


        });
    }


    // if (window.matchMedia("(max-width: 1000px)").matches) {

    // } else {
    //     $('.reviews__slider').slick({
    //         arrows: false,
    //         infinite: true,
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 3000,
    //         dots: true,
    //     });
    // };



    // if (window.matchMedia("(max-width: 767px)").matches) {

    // } else {
    //     $('.reviews__slider').slick({
    //         arrows: false,
    //         infinite: true,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 3000,
    //         dots: true,
    //     });
    // };





    $('.menu_btn').on('click', function() {
        $('.header__menu__phone').addClass('active');
        $('.menu_btn').addClass('pressed');
        $('.close_btn').addClass('pressed');
        $('body').addClass('hidden');
    });
    $('.close_btn').on('click', function() {
        $('.header__menu__phone').removeClass('active');
        $('.menu_btn').removeClass('pressed');
        $('.close_btn').removeClass('pressed');
        $('body').removeClass('hidden');
    });

    if (screen.width < 600) {
        console.log("True")
    } else {
        console.log("false")
    }

});
/**
 * Created by kangkang on 2016/08/16.
 */

$(function () {

    /**
     * Swiper (product page head)
     */
    var galleryProductCategory = new Swiper('.gallery-product-category', {
        nextButton: '.gallery-product-category .swiper-button-next',
        prevButton: '.gallery-product-category .swiper-button-prev',
        spaceBetween: 10,
        slidesPerView: 'auto'
    });

    /**
     * Swiper (product page foot)
     */
    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.gallery-top .swiper-button-next',
        prevButton: '.gallery-top .swiper-button-prev',
        spaceBetween: 10
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

});
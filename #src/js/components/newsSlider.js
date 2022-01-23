import Swiper, {Navigation} from "swiper";

export const newsSlider = () => {

    const newsSliderItem = new Swiper('.news__slider', {
        modules: [Navigation], 
        slidesPerView: 3,
        spaceBetween: 89,
        navigation: {
            nextEl: '.slider__btn_next',
            prevEl: '.slider__btn_prev',
            // disabledClass: 'slider__btn_disabled',
            // lockClass: 'slider__btn_disabled',
        },
    });
};
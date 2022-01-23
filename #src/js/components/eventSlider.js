import Swiper, {Navigation} from "swiper";

export const eventSlider = () => {
    const eventSliderItem = new Swiper('.event__slider', {
        modules: [Navigation], 
        slidesPerView: 1,
        navigation: {
            nextEl: '.slider__btn_next',
            prevEl: '.slider__btn_prev',
            disabledClass: 'slider__btn_disabled',
            lockClass: 'slider__btn_disabled',
        },
    });
};
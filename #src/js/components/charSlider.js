import Swiper, {Thumbs, Navigation, EffectFade} from "swiper"

export const charSlider = () => {

    var charThumbSlider = new Swiper('.chars__thumbs_slider', {
        modules: [Navigation],
        slidesPerView: 5,
        spaceBetween: 100,
        // navigation: {
        //     nextEl: '.slider__btn_next',
        //     prevEl: '.slider__btn_prev'
        // }
        
    });

    var charMainSlider = new Swiper('.chars__slider', {
        modules: [Thumbs, EffectFade],
        slidesPerView: 1,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        thumbs: {
            swiper: charThumbSlider
        }
        
    });

    const charNext = document.querySelector('#charNext');
    const charPrev = document.querySelector('#charPrev');

    if(charNext && charPrev) {
        charNext.addEventListener('click', () => {
            charThumbSlider.slideNext();
        });
        charPrev.addEventListener('click', () => {
            charThumbSlider.slidePrev();
        });
    }
};
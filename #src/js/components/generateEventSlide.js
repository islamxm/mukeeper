import { eventTimer } from "./eventTimer";




export function generateEventSlide(img, name, startTime) {    
    
    const eventSliderWrapper = document.querySelector('.event__slider_wr');
    const eventSlide = document.createElement('div');

    eventSlide.classList.add('event__slide', 'swiper-slide');

    eventSlide.innerHTML = `
        <div class="event__slide_img">
            <picture>
                <source type="image/webp" srcset="">
                <img src="${img}" alt="${name}">
            </picture> 
        </div>
        <div class="event__slide_content">
            <div class="event__slide_content_head">
                <div class="event__slide_content_head_label">
                    EVENT
                </div>
                <div class="event__slide_content_head_title">
                    ${name}
                </div>
            </div>
            <div class="event__slide_content_timer">
                <div class="event__slide_content_timer_label">EVENT START </div>
                <div class="event__slide_content_timer_value">     
                    
                </div>
            </div>
        </div>
    `;

    if(eventSliderWrapper) {
        eventSliderWrapper.append(eventSlide);
    }



    
}
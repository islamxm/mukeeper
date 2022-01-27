import { eventTimer } from "./eventTimer";




export function generateEventSlide(img, name, startTime) {    

    //Timer components
    let deadline = (startTime * 1000) + Date.parse(new Date);

    function getTimerRemaining(endtime) {
        const t = endtime - Date.parse(new Date);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t / (1000 * 60 * 60) % 24));
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }




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
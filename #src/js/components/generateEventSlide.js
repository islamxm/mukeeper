import Timer from "easytimer.js";

export function generateEventSlide(img, name, link, startTime) {    


    //Times 
    

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    let t = startTime * 1000;
    let days = getZero(Math.floor(t / (1000 * 60 * 60 * 24)));
    let hours = getZero(Math.floor((t / (1000 * 60 * 60) % 24)));
    let minutes = getZero(Math.floor((t / 1000 / 60) % 60));
    let seconds = getZero(Math.floor((t / 1000) % 60));

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
                <a href="${link}" class="event__slide_content_head_title">
                    ${name}
                </a>
            </div>
            <div class="event__slide_content_timer">
                <div class="event__slide_content_timer_label">EVENT START </div>
                <div class="event__slide_content_timer_value" data-time="${startTime}">     
                    
                </div>
            </div>
        </div>
    `;

    if(eventSliderWrapper) {
        eventSliderWrapper.append(eventSlide);
    }

    // var timer = new Timer();
    // timer.start({
    //     countdown: true,
    //     startValues: {
    //         seconds: startTime,
    //     },
    //     target: {
    //         seconds: 0
    //     }
    // });

    // const elementForTimer = document.querySelectorAll('.event__slide_content_timer_value');

    // elementForTimer.forEach(i => {
    //     i.innerHTML = timer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    // })

    // timer.addEventListener('secondsUpdated', () => {
    //     elementForTimer.forEach(i => {
    //         i.innerHTML = timer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    //     })
    // });

    // timer.addEventListener('targetAchieved', () => {
    //     console.log('timer end')
    // });


    
}

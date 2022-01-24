export function eventRequest() {


    function generateEventSlide(name, img, startTime) {
        const eventSliderWrapper = document.querySelector('.event__slider_wr');
        const newsSlide = document.createElement('div');

        newsSlide.classList.add('event__slide', 'swiper-slide');

        newsSlide.innerHTML = `
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
                    <div class="event__slide_content_timer_value">${startTime}</div>
                </div>
            </div>
        `;

        eventSliderWrapper.append(newsSlide);
    }

    setInterval(() => {
        const req = new XMLHttpRequest;

        req.open('GET', '');
        req.setRequestHeader('Content-type', 'application/json');
        req.send();

        req.addEventListener('readystatechange', () => {
            if(req.readyState == 4 && req.status == 200) {
                
            }
        });
    }, 10000);

    


}
export function generateCharSlide(name, descr, subdescr, level, img) {
    const charSlideWrapper = document.querySelector('');
    const charSlide = document.createElement('div');

    charSlide.classList.add('chars__slide', 'swiper-slide');
    charSlide.innerHTML = `
        <div class="chars__slide_content">
            <div class="chars__slide_content_head">
                <div class="name">${name}</div>
                <div class="sub">${descr}</div>
            </div>

            <div class="chars__slide_content_ex">
                <div class="info">${subdescr}</div>
                <div class="level">
                    <div class="level_label">Сложность</div>
                    <div class="level_ind">
                        <div class="level_ind_value" style="width: ${level}px"></div>
                    </div>
                </div>
            </div>
        </div>  
        <div class="chars__slide_img">
            <picture>
                <source type="image/webp" srcset="">
                <img src="${img}" alt="${name}">
            </picture>
        </div>  
    `;

    if(charSlideWrapper) {
        charSlideWrapper.append(charSlide);
    }

    
}
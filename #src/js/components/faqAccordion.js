export function faqAccordion() {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        item.addEventListener('click', (e) => {
            let thisItemHead = e.currentTarget.querySelector('.faq__item_head');
            let thisItemBody = e.currentTarget.querySelector('.faq__item_body');

            if(e.target && e.target.classList.contains('faq__item_head')) {
                item.classList.toggle('faq__item_active');

                if(item.classList.contains('faq__item_active')) {
                    thisItemBody.style.height = `${thisItemBody.scrollHeight}px`;
                }

                if(!item.classList.contains('faq__item_active')) {
                    thisItemBody.style.height = 0;
                }
            }
        })
    })
}
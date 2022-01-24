export const preloader = {
    element: '.preloader',
    show: function() {
        const prel = document.querySelector(this.element);
        if(prel) {
            prel.classList.add('active');
        }
    },
    hide: function() {
        const prel = document.querySelector(this.element);
        prel.classList.remove('active');
    }
    
};
export const eventTabs = () => {

    const tabBtns = document.querySelectorAll('.event__tabs_btn');
    const tabContents = document.querySelectorAll('.event__tabs_content');
    const tabBtnsParent = document.querySelector('.event__tabs_btns');

    const hideTabs = () => {
        tabBtns.forEach(i => {
            i.classList.remove('event__tabs_btn_active');
        })
        tabContents.forEach(i => {
            i.style.display = 'none';
        });
    }


    const showTabs = (index = 0) => {
        tabBtns[index].classList.add('event__tabs_btn_active');
        tabContents[index].style.display = 'block';
    };
    if(tabBtnsParent) {
        hideTabs();
        showTabs();

        tabBtnsParent.addEventListener('click', (e) => {
            let target = e.target;
    
            if(target && target.classList.contains('event__tabs_btn')) {
                tabBtns.forEach((item, index) => {
                    if(target == item) {
                        hideTabs();
                        showTabs(index);
                    }
                });
            }
    
        });
    }
    

    
}
// 'use strict';

// LIBS
import MicroModal from "micromodal";

// COMPONENTS
import { eventSlider } from "./components/eventSlider";
import { eventTabs } from './components/eventTabs';
import { newsSlider } from './components/newsSlider';
import { charSlider } from './components/charSlider';
import { faqAccordion } from './components/faqAccordion';


// Test$$$$$$$$$$
import { requestGet } from './components/requestGet';
// import { checkServer } from './components/checkServer';
import { requestStatus } from "./components/requestStatus";
import { generateEventSlide } from "./components/generateEventSlide";
import { emptyLink } from "./components/emtyLink";
import { eventTimer } from './components/eventTimer';
import Timer from "easytimer.js";


// requestStatus.loading();
 
document.addEventListener('DOMContentLoaded', () => {

    

    // requestStatus.success();
    // ACTIVE
    MicroModal.init();


    //DOM elements
    
    eventTabs();
    newsSlider();
    charSlider();
    faqAccordion();

    // Check
    emptyLink();


    //AJAX
    requestGet('https://mukeeper.com/eventTime.php?ajax=true');

    eventSlider();

    

    eventTimer();

    const eventSliderParent = document.querySelector('.event__slider_wr');

    const activeEvents = document.querySelectorAll('.event__slide_content_timer_value');

    activeEvents.forEach(event => {
        if(event.dataset.time == 0) {

            eventSliderParent.innerHTML = '';
            requestGet('https://mukeeper.com/eventTime.php?ajax=true');
            
        }
    });

    
    // eventTimer()

    // const date = new Date();

    // let seconds = date.getTime() / 1000;

    // console.log(seconds);
    // console.log(date.getTime());

    


    

    
    

    


    
    //Requests

    //Test$$$$$$$$$$$$$$$
    // const links = document.querySelectorAll('a');

    // links.forEach(link => {
    //     link.addEventListener('click', (e) => {
    //         checkServer(e, link);
    //     });
    // });
    

});








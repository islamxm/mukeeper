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
import { mainTimer } from "./components/mainTimer";
import { generateEventTabs } from './components/generateEventTabs';



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

    mainTimer();

    // Check
    emptyLink();

    generateEventTabs();


    requestGet('https://mukeeper.com/eventTime.php?ajax=true');

    eventSlider();
    // eventTimer();

    // let eventSliderParent = document.querySelector('.event__slider_wr');

    // setInterval(function() {
    //     let activeEvent = document.querySelector('.event__slide_content_timer_value').dataset.time;

    //     if(activeEvent == 0) {
    //         eventSliderParent.innerHTML = '';
    //         requestGet('https://mukeeper.com/eventTime.php?ajax=true');
    //         eventSlider();
    //         eventTimer();
    //     }
    // }, 1000);

    

    

});








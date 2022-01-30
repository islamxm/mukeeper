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

    const activeEvent = document.querySelector('.event__slide_content_timer_value');


    console.log(activeEvent.dataset.time);

    setInterval(function() {
        setTimeout(function(){
            eventSliderParent.innerHTML = '';
            
            requestGet('https://mukeeper.com/eventTime.php?ajax=true');
            console.log('request success');
        }, activeEvent.dataset.time * 1000);
    }, activeEvent.dataset.time * 1000);

    

   

    
    // eventTimer()

    // const date = new Date();

    // let seconds = date.getTime() / 1000;

    // console.log(seconds);
    // console.log(date.getTime());

    

});








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


    requestGet('https://mukeeper.com/eventTime.php?ajax=true');

    eventSlider();
    eventTimer();


    // let timerId = setInterval(function() {
    //     
    //     let activeEvent = document.querySelector('.event__slide_content_timer_value').dataset.time;
        
    //     return activeEvent;

    // }, 1000);
    let eventSliderParent = document.querySelector('.event__slider_wr');

    setInterval(function() {
        let activeEvent = document.querySelector('.event__slide_content_timer_value').dataset.time;

        if(activeEvent == 0) {
            eventSliderParent.innerHTML = '';
            requestGet('https://mukeeper.com/eventTime.php?ajax=true');
            eventSlider();
            eventTimer();
        }
    }, 1000);

    
    


    
    


    // setInterval(function() {
    //     requestGet('https://mukeeper.com/eventTime.php?ajax=true');

    //     eventSlider();

    //     eventTimer();
    // }, 1000);
    


    // const eventSliderParent = document.querySelector('.event__slider_wr');

    // const activeEvent = document.querySelector('.event__slide_content_timer_value');


    // console.log(activeEvent.dataset.time);

    // setInterval(function() {
    //     console.log('interval starts')
    //     setTimeout(function(){
    //         eventSliderParent.innerHTML = '';
            
    //         requestGet('https://mukeeper.com/eventTime.php?ajax=true');
    //         console.log('request success');
    //     }, activeEvent.dataset.time * 1000);
    // }, activeEvent.dataset.time * 1000);


    // setInterval(function(){
    //     console.log('start interval');
    //     eventSliderParent.innerHTML = '';
    //     requestGet('https://mukeeper.com/eventTime.php?ajax=true');
    // }, 10000);

    

   

    
    // eventTimer()

    // const date = new Date();

    // let seconds = date.getTime() / 1000;

    // console.log(seconds);
    // console.log(date.getTime());

    

});








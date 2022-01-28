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
    eventSlider();
    eventTabs();
    newsSlider();
    charSlider();
    faqAccordion();

    // Check
    emptyLink();


    //AJAX
    requestGet('https://mukeeper.com/eventTime.php?ajax=true');
    
    const allTimes = document.querySelectorAll('.event__slide_content_timer_value');


    

    allTimes.forEach(time => {
        var tm = new Timer();
        tm.start({
            countdown: true,
            startValues: {
                seconds: time.dataset.time
            }
        })
        tm.addEventListener('secondsUpdated', (e) => {
            time.innerHTML = tm.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
        });

        tm.addEventListener('targetAchieved', (e) => {
            requestGet('https://mukeeper.com/eventTime.php?ajax=true');
        });
    });

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








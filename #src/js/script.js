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
import { checkServer } from './components/checkServer';
 
document.addEventListener('DOMContentLoaded', () => {

    // ACTIVE
    MicroModal.init();

    eventSlider();
    eventTabs();
    newsSlider();
    charSlider();
    faqAccordion();


    //Requests

    //Test$$$$$$$$$$$$$$$
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            checkServer(e, link);
        });
    });
    

});








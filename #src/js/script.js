// 'use strict';

// LIBS
import MicroModal from "micromodal";

// COMPONENTS
import { eventSlider } from "./components/eventSlider";
import { eventTabs } from './components/eventTabs';
import { newsSlider } from './components/newsSlider';
import { charSlider } from './components/charSlider';
import { faqAccordion } from './components/faqAccordion';
 
document.addEventListener('DOMContentLoaded', () => {

    // ACTIVE
    MicroModal.init();

    eventSlider();
    eventTabs();
    newsSlider();
    charSlider();
    faqAccordion();

    //Test$$$$$$$$$$$$$$$
    

});








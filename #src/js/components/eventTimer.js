import { Timer } from 'easytimer.js';
import { requestGet } from './requestGet';

export function eventTimer() {
    const allTimes = document.querySelectorAll('.event__slide_content_timer_value');

    if(allTimes.length >= 0) {
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
    }
    
    

}
import Timer from "easytimer.js";

export function mainTimer() {
    const mainTimerParent = document.querySelector('.mainTimer');
    const mainParentTime = mainTimerParent.dataset.time;

    let mainDays = mainTimerParent.querySelector('#mainDays');
    let mainHours = mainTimerParent.querySelector('#mainHours');
    let mainMins = mainTimerParent.querySelector('#mainMins');
    let mainSecs = mainTimerParent.querySelector('#mainSecs');

    let mainTimerEl = new Timer();

    mainDays.innerHTML = mainTimerEl.getTimeValues().days;
    mainHours.innerHTML = mainTimerEl.getTimeValues().hours;
    mainMins.innerHTML = mainTimerEl.getTimeValues().minutes;
    mainSecs.innerHTML = mainTimerEl.getTimeValues().seconds;

    mainTimerEl.start({
        countdown: true,
        startValues: {
            seconds: mainParentTime,
        },
        target: {
            seconds: 0
        }
    });

    mainTimerEl.addEventListener('secondsUpdated', () => {
        mainDays.innerHTML = mainTimerEl.getTimeValues().days;
        mainHours.innerHTML = mainTimerEl.getTimeValues().hours;
        mainMins.innerHTML = mainTimerEl.getTimeValues().minutes;
        mainSecs.innerHTML = mainTimerEl.getTimeValues().seconds;
    });

    mainTimerEl.addEventListener('targetAchieved', () => {
        mainTimerParent.style.display = 'none';
    });
}
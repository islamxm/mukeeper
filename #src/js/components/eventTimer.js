import { Timer } from 'easytimer.js';

export function eventTimer(i, cS, cC, dS, cA, dD, bC) {
    
    //Events
    let invasion = document.querySelector('#invasion .event__slide_content_timer_value'),
        castleSiege = document.querySelector('#castle_siege .event__slide_content_timer_value'),
        chaosCastle =document.querySelector('#chaos_castle .event__slide_content_timer_value'),
        devilSquare = document.querySelector('#devil_square .event__slide_content_timer_value'),
        crywolfAttack = document.querySelector('#crywolf_attack .event__slide_content_timer_value'),
        dropDavis = document.querySelector('#drop_davis .event__slide_content_timer_value'),
        bloodCastle = document.querySelector('#blood_castle .event__slide_content_timer_value'); 

    //Timers
    let invasionTimer = new Timer();
    invasionTimer.start({
        countdown: true,
        startValues: {
            seconds: i
        }
    
    });

    invasion.innerHTML = invasionTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    invasionTimer.addEventListener('secondsUpdated', function(e){
        invasion.innerHTML = invasionTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    });




    let castleSiegeTimer = new Timer();
    castleSiegeTimer.start({
        countdown: true,
        startValues: {
            seconds: cS
        }
    });

    castleSiege.innerHTML = castleSiegeTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    castleSiegeTimer.addEventListener('secondsUpdated', function(e){
        castleSiege.innerHTML = castleSiegeTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    });




    let chaosCastleTimer = new Timer();
    chaosCastleTimer.start({
        countdown: true,
        startValues: {
            seconds: cC
        }
    });

    chaosCastle.innerHTML = chaosCastleTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    chaosCastleTimer.addEventListener('secondsUpdated', function(e){
        chaosCastle.innerHTML = chaosCastleTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    });




    let devilSquareTimer = new Timer();
    devilSquareTimer.start({
        countdown: true,
        startValues: {
            seconds: dS
        }
    });

    devilSquare.innerHTML = devilSquareTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    devilSquareTimer.addEventListener('secondsUpdated', function(e){
        devilSquare.innerHTML = devilSquareTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    });



    let crywolfAttackTimer = new Timer();
    crywolfAttackTimer.start({
        countdown: true,
        startValues: {
            seconds: cA
        }
    });

    crywolfAttack.innerHTML = crywolfAttackTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    crywolfAttackTimer.addEventListener('secondsUpdated', function(e){
        crywolfAttack.innerHTML = crywolfAttackTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    });



    let dropDavisTimer = new Timer();
    dropDavisTimer.start({
        countdown: true,
        startValues: {
            seconds: dD
        }
    });

    dropDavis.innerHTML = dropDavisTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    dropDavisTimer.addEventListener('secondsUpdated', function(e){
        dropDavis.innerHTML = dropDavisTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    });



    let bloodCastleTimer = new Timer();
    bloodCastleTimer.start({
        countdown: true,
        startValues: {
            seconds: bC
        }
    });

    bloodCastle.innerHTML = bloodCastleTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    bloodCastleTimer.addEventListener('secondsUpdated', function(e){
        bloodCastle.innerHTML = bloodCastleTimer.getTimeValues().toString(['days', 'hours', 'minutes', 'seconds']);
    });

    

}
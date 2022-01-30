import {requestStatus} from './requestStatus';
// DOMAction
import {generateEventSlide} from './generateEventSlide';
import { eventTimer } from './eventTimer';


// Img path
let imgUrls = {
    invasion: './img/event-invasion@1x.png',
    castleSiege: './img/event-castle_siege@1x.png',
    chaosCastle: './img/event-chaos_castle@1x.png',
    devilSquare: './img/event-devil_square@1x.png',
    crywolfAttack: './img/event-crywolf_attack@1x.png',
    dropDavias: './img/event-drop_davias@1x.png',
    bloodCastle: './img/event-blood_castle@1x.png'
};



export function requestGet(url, async, login, pass) {
    requestStatus.loading();
    const request = new XMLHttpRequest;
    request.open('GET', url, async, login, pass);
    request.send();
    

    if(request.status == 200 && request.readyState == 4) {
        let obj = JSON.parse(request.response);
        let allEvents = obj.allEvents;

        function sortObject(obj) {
            var arr = [];
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    arr.push({
                        'key': prop,
                        'value': obj[prop]
                    });
                }
            }
            arr.sort(function(a, b) { 
                return a.value.startSeconds - b.value.startSeconds;
            
            });
            return arr;
        }
        let arr = sortObject(allEvents);

        arr.forEach(i => {
            generateEventSlide('./img/event-img-test.png', i.value.data.name, i.value.data.link, i.value.startSeconds); 
        });

        // eventTimer();
        
        requestStatus.success();
        
    } else {
        requestStatus.fail();
        
    }

}
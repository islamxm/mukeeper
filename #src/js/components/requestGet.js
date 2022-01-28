import {requestStatus} from './requestStatus';
// DOMAction
import {generateEventSlide} from './generateEventSlide';
import { eventTimer } from './eventTimer';

export function requestGet(url, async, login, pass) {
    const request = new XMLHttpRequest;
    request.open('GET', url, async, login, pass);
    request.send();
    requestStatus.loading();

    if(request.status == 200 && request.readyState == 4) {
        let obj = JSON.parse(request.response);

        eventTimer(
            obj.allEvents["Golden Invasion"].startSeconds,
            obj.allEvents["Castle Siege"].startSeconds,
            obj.allEvents["Chaos Castle"].startSeconds,
            obj.allEvents["Devil Square"].startSeconds,
            obj.allEvents["CryWolf Attack"].startSeconds,
            obj.allEvents["Event Drop"].startSeconds,
            obj.allEvents["Blood Castle"].startSeconds                 
        );
        // generateEventSlide('', obj.data.name, obj.startSeconds);
        //generateEventSlide(obj.allEvents["Blood Castle"].data.images, obj.allEvents["Blood Castle"].data.name, );

        requestStatus.success();
        
    } else {
        requestStatus.fail();
        
    }

}
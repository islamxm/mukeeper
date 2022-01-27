import {requestStatus} from './requestStatus';
// DOMAction
import {generateEventSlide} from './generateEventSlide';

export function requestGet(url, async, login, pass) {
    const request = new XMLHttpRequest;
    request.open('GET', url, async, login, pass);
    request.send();
    requestStatus.loading();

    if(request.status == 200 && request.readyState == 4) {
        // let obj = JSON.parse(request.response);
        // console.log(typeof(obj.data.name));
        
        let obj = JSON.parse(request.response);

        generateEventSlide('', obj.data.name, obj.startSeconds);
        //generateEventSlide(obj.allEvents["Blood Castle"].data.images, obj.allEvents["Blood Castle"].data.name, obj.allEvents["Blood Castle"].startHour);

        requestStatus.success();
        
    } else {
        requestStatus.fail();
        
    }

}
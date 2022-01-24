import {requestStatus} from './requestStatus';

// DOMAction
import {generateEventSlide} from './generateEventSlide';

export function requestGet(url, async, login, pass) {
    const request = new XMLHttpRequest;

    requestStatus.loading();

    request.open('GET', url, async, login, pass);
    
    if(request.status == 200 && request.readyState == 4) {
        requestStatus.success();
    } else {
        requestStatus.fail();
    }

}
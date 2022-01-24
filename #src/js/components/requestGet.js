import requestStatus from './requestStatus';

// DOMAction
import generateEventSlide from './generateEventSlide';

export function requestGet(url, async, login, pass) {
    const request = new XMLHttpRequest;

    request.open('GET', url, async, login, pass);
    
    if(request.status == 200 && request.readyState == 4) {
        console.log(requestStatus.success);
    } else {
        console.log(requestStatus.fail);
    }

}
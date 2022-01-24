import {requestStatus} from './requestStatus';

export function requestPost(url, body, async, login, pass) {
    const request = new XMLHttpRequest;

    request.open('POST', url);
    request.send(body);
    
    if(request.readyState == 4 && request.status == 200) {
        console.log(requestStatus.success);
    } else {
        console.log(requestStatus.fail);
    }
}
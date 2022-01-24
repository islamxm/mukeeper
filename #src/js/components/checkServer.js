
import { requestStatus } from "./requestStatus";

export function checkServer(event, link) {

    const request = new XMLHttpRequest;

    request.open('GET', 'https://mukeeper.com/eventTime.php?ajax=true');
    request.send();
    requestStatus.loading();

    if(request.status == 200 & request.readyState == 4) {
        return;
    } else {
        event.preventDefault();
        requestStatus.fail();
    }
}
import { requestStatus } from "./requestStatus";

export function emptyLink() {
    let emptyLinks = document.querySelectorAll('[href="#"]');
    
    if(emptyLink.length > 0) {
        emptyLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                requestStatus.fail();
            });
        });
    }
}
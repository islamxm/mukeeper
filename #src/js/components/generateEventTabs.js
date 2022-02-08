export function generateEventTabs() {
    

    const tabsWrapper = document.querySelector('.event__tabs_contents');



    // request
    const req = new XMLHttpRequest;
    req.open('GET', 'https://test.mukeeper.com/ru/statistic');
    req.send();

    
    if(req.status == 200 && req.readyState == 4) {
        console.log(req.response);
        alert('success');

        let obj = JSON.parse(req.response);

        let server = document.createElement('div');
        server.classList.add('event__tabs_content');
        server.innerHTML = `
            <div class="event__tabs_content">
                <div class="event__tabs_content_item ${obj.servers.status == true ? 'event__tabs_content_item_green' : ''}">
                    <div class="name">Status</div>
                    <div class="value">${obj.servers.status == true ? 'ONLINE' : 'OFFLINE'}</div>
                </div>
                <div class="event__tabs_content_item">
                    <div class="name">Online</div>
                    <div class="value">${obj.servers.online}</div>
                </div>
                <div class="event__tabs_content_item">
                    <div class="name">Account</div>
                    <div class="value">414</div>
                </div>
                <div class="event__tabs_content_item">
                    <div class="name">Character</div>
                    <div class="value">501</div>
                </div>

            </div>
        `;

    } 

    if(req.status != 200) {
        console.log(req.readyState);
    }



    

    
} 
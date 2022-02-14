export function generateServerTab(obj) {
    

    const tabsWrapper = document.querySelector('.event__tabs_contents');

    function statusClass() {
        return obj.servers[0].status == true ? 'event__tabs_content_item_green' : '';
    }
    function statusValue() {
        return obj.servers[0].status == true ? 'ONLINE' : 'OFFLINE';
    }

    let server = document.createElement('div');
    server.classList.add('event__tabs_content');
    server.innerHTML = `
            <div class="event__tabs_content_item ${statusClass()}">
                <div class="name">Status</div>
                <div class="value">${statusValue()}</div>
            </div>
            <div class="event__tabs_content_item">
                <div class="name">Online</div>
                <div class="value">${obj.servers[0].online}</div>
            </div>
            <div class="event__tabs_content_item">
                <div class="name">Account</div>
                <div class="value">414</div>
            </div>
            <div class="event__tabs_content_item">
                <div class="name">Character</div>
                <div class="value">501</div>
            </div>

    `;

    tabsWrapper.append(server);
    
} 
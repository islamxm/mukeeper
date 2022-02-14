export function generatePlayersTab(obj) {

    const tabsWrapper = document.querySelector('.event__tabs_contents');

    let players = document.createElement('div');
    players.classList.add('event__tabs_content');

    for (let key in obj.topUsers) {
        
        console.log(`${key} : ${obj.topUsers[key]}`);

        players.innerHTML = `
        <div class="event__tabs_content_item">
            <div class="name"></div>
            <div class="value">x</div>
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

    tabsWrapper.append(players);
    }
    
}
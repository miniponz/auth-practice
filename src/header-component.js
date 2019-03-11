import { auth } from './firebase.js';

export function makeHeader() {
    const html = /*html*/ `
    <header>
        <div id="banana-header">
            <img id="banana" src="assets/banana-icon.jpg">
            <h1> I'm a cool header</h1>
        </div>
    </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    const html = /*html*/ `
    <div id="profile">
        <span id="user-name">${user.displayName}</span>
        <img id="profile-image" src="${user.photoUrl}" alt="user profile image">
        <button>Sign Out</button>
    </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader(options) {
    const dom = makeHeader();
    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }
    
    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = makeProfile(user);
            header.appendChild(userDom);
        }
        else {
            console.log('no user, go directly to auth.html, do not pass go, do not collect $200');
        }
    });
}
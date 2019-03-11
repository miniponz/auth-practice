import makeHeader from '../src/make-header.js';
const test = QUnit.test;

QUnit.module('header test');

function makeProfile(user) {
    const html = /*html*/ `
    <div id="profile">
        <span>Name: ${user.displayName}</span>
        <img id="profile-image" src="${user.photoUrl}" alt="user profile image">
        <button>Sign Out</button>
    </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('function makes header template', assert => {
    //arrange
    const expected = /*html*/ `    
    <header>
        <div id="header-container">
            <img id="banana" src="assets/banana-icon.jpg">
            <h1> I'm a cool header</h1>
        </div>
    </header>
    `;
    //act
    const result = makeHeader();
    //assert
    assert.htmlEqual(result, expected);
});

test('function makes profile template', assert => {
    //arrange
    const user = {
        displayName: 'Carol',
        photoUrl: './assets/banana-icon.jpg'
    };

    const expected = /*html*/ `
        <div id="profile">
            <span>Name: Carol</span>
            <img id="profile-image" src="./assets/banana-icon.jpg" alt="user profile image">
            <button>Sign Out</button>
        </div>
        `;
    //act
    const dom = makeProfile(user);
    //assert
    assert.htmlEqual(dom, expected);
});
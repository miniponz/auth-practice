import { makeHeader } from '../src/header-component.js';
import { makeProfile } from '../src/header-component.js';
const test = QUnit.test;

QUnit.module('header test');

test('function makes header template', assert => {
    //arrange
    const expected = /*html*/ `    
    <header>
        <div id="banana-header">
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
            <span id="user-name">Carol</span>
            <img id="profile-image" src="./assets/banana-icon.jpg" alt="user profile image">
            <button>Sign Out</button>
        </div>
        `;
    //act
    const dom = makeProfile(user);
    //assert
    assert.htmlEqual(dom, expected);
});
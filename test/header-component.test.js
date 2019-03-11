import makeHeader from '../src/make-header.js';
const test = QUnit.test;

QUnit.module('header test');

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
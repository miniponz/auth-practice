import './html-equal.js';
//import './header-component.test.js';

const test = QUnit.test;

function makeHeader() {
    const html = /*html*/ `
    <header>
        <div id="header-container">
            <img id="banana" src="assets/banana-icon.jpg">
            <h1> I'm a cool header</h1>
        </div>
    </header>
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
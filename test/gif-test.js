import './html-equal.js';
import makeGifList from '../src/make-gif-list.js';

const test = QUnit.test;
QUnit.module('gif list tests');

test('template will match HTML', assert => {
    //arrange
    const data = {
        id: "FiGiRei2ICzzG",
        url: "http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG",
        images: {
            fixed_height: {
                url: "http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif",
            },
        title: "Funny Cat GIF"
    }
}
    //act
    const result = makeGifList(data);

    //assert
    assert.htmlEqual(result, /*html*/ `
    <li>
    <a href="http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG"><img src="http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif" alt="Funny Cat GIF"></a>
    <p>Funny Cat GIF</p>
    </li>
`);
});
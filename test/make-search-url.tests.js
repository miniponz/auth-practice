import makeSearchUrl from '../src/make-url.js';

const test = QUnit.test;

test('url includes q options', assert => {
//arrange
    const qOptions = {
        q: 'pizza cat'
    };
    const expected = 'http://api.giphy.com/v1/gifs/search?q=pizza+cat&api_key=Bsk1EF0sEaI9IRg4FCvAot870BsnEZpS';
//act
    const url = makeSearchUrl(qOptions);

//assert
    assert.equal(url, expected);
});
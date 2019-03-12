import makeSearchUrl from '../src/make-url.js';

const test = QUnit.test;

test('url includes q options', assert => {
//arrange
    const qOptions = {
        q: 'pizza cat'
    };
    const expected = 'http://api.giphy.com/v1/gifs/search?q=pizza+cat&api_key=4JYUtl012K7M66v68lBD84XX77aXd1g';
//act
    const url = makeSearchUrl(qOptions);

//assert
    assert.equal(url, expected);
});
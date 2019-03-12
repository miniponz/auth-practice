import writeSearchToQuery, {readFromQuery} from '../src/hash-query.js';

const test = QUnit.test;

QUnit.module('hash query test');

// http://api.giphy.com/v1/gifs/search

test('write search to empty query', assert => {
    //arrange
    const existingQuery = '';
    const q = 'pizza cat';
    //act 
    const query = writeSearchToQuery(existingQuery, q);
    //assert
    assert.equal(query, 'q=pizza+cat&api_key=4JYUtl012K7M66v68lBD84XX77aXd1g');
});

test('write search to existing query', assert => {
    const existingQuery = 'q=pizza+dog&api_key=4JYUtl012K7M66v68lBD84XX77aXd1g';
    const q = 'pizza cat';

    const query = writeSearchToQuery(existingQuery, q);

    assert.equal(query, 'q=pizza+cat&api_key=4JYUtl012K7M66v68lBD84XX77aXd1g');
});



test('read search from query', assert => {
    const q = 'q=pizza+cat&api_key=4JYUtl012K7M66v68lBD84XX77aXd1g';
    const expected = {
        q: 'pizza cat'
    };

    const queryOptions = readFromQuery(q);
    assert.deepEqual(queryOptions, expected);
});
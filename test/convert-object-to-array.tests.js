import convertObjectToArray from '../src/convert-object-to-array.js';
const test = QUnit.test;

QUnit.module('convert object to array test!');

test('converts object of objects to array of objects', assert => {
    //arrange
    const object = {
        abc: { id: 'abc', name: 'object 1'},
        def: { id: 'def', name: 'object 2'},
        ghi: { id: 'ghi', name: 'object 3'},
    };

    const expected = [object.abc, object.def, object.ghi];
    //act
    const array = convertObjectToArray(object);
    //assert
    assert.deepEqual(array, expected);
});
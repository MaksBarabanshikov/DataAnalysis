const average = require('./average');

const arr = [1,2,3,10];

test('array average [1,2,3,10]', () => {
    expect(average(arr)).toEqual(4);
})
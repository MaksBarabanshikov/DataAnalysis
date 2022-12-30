const sort = require('./sort');

const arr = [1,2,4,10];

test('array sort [1,2,3,10]', () => {
    expect(sort(arr)).toEqual('1,2,4,10');
})
const inter = require('./inter');

const arr = [1,2,3,10];

test('array inter [1,2,3,10]', () => {
    expect(inter(arr)).toEqual('1;2;3;10');
})
const sum = require('./sum')

const arr = [1,2,3,10];

test('array sum [1,2,3,10]', () => {
    expect(sum(arr)).toBe(16);
});
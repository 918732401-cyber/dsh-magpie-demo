const { add, sub, mul, div } = require('./calc');
const assert = require('node:assert');

assert.equal(add(1, 2), 3);
assert.equal(sub(5, 2), 3);
assert.equal(mul(3, 4), 12);
// 这个测试现在会失败 —— 就是给主理鱼修的
assert.throws(() => div(10, 0), /Division by zero/);
console.log('all tests passed');

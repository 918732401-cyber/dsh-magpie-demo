// 简易计算器库
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return a / b; }  // BUG: 没有判零，除以 0 返回 Infinity

module.exports = { add, sub, mul, div };

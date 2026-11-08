// 简易计算器库
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}  // 修复 issue #1：除数为 0 时抛错而非返回 Infinity

module.exports = { add, sub, mul, div };

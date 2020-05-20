"use strict";

// let a = 2;
// console.log(a);

// 数组解构赋值 如果右边是undined就没赋值；null表示空对象，是有值
// let [a, b = 'hbj'] = ['洪', undefined];
// let [a, b = 'hbj'] = ['洪', null];
// console.log(a, b);

// 对象解构赋值
// let { a, b } = { a: 'hbj', b: '洪' }
// console.log(a, b);

// 对象解构赋值的坑 要加一个括号
// let foo;
// ({foo} = {foo: 'hbj'});
// console.log(foo);

// 字符串解构
// const [a, b, c] = 'hbj';
// console.log(a);
// console.log(b);
// console.log(c);

// 对象扩展运算符
// function foo(...arg){
//   console.log(arg[0]);
//   console.log(arg[1]);
//   console.log(arg[2]);
//   console.log(arg[3]);
// }
// foo(1, 2, 3)

// 扩展运算符解决深拷贝
// let arr1 = ['h', 'b', 'j'];
// // let arr2 = arr1;
// let arr2 = [...arr1];
// arr2.push('66');
// console.log('arr1: ' + arr1);
// console.log('arr2: ' + arr2);

// 剩余运算符
function foo(first) {
  for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arg[_key - 1] = arguments[_key];
  }

  // console.log(arg.length);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      console.log(val);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
foo(1, 2, 3);

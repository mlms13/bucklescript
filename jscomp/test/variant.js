'use strict';


var b = /* constructor */{
  tag: 0,
  name: "B",
  "0": 34
};

var c = /* constructor */{
  tag: 1,
  name: "C",
  "0": 4,
  "1": 2
};

console.log("a", /* A */0);

console.log("b", b);

console.log("c", c);

function foo(param) {
  if (typeof param === "number") {
    return 1;
  } else if (param.tag) {
    return param[0] + param[1] | 0;
  } else {
    return param[0];
  }
}

var a = /* A */0;

exports.a = a;
exports.b = b;
exports.c = c;
exports.foo = foo;
/*  Not a pure module */

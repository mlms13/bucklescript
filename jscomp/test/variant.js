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

var d = /* constructor */{
  tag: 2,
  name: "D",
  "0": /* tuple */[
    4,
    2
  ]
};

console.log("a", /* A */0);

console.log("b", b);

console.log("c", c);

console.log("d", d);

function foo(param) {
  if (typeof param === "number") {
    return 1;
  } else {
    switch (param.tag | 0) {
      case 0 :
          return param[0];
      case 1 :
          return param[0] + param[1] | 0;
      case 2 :
          var match = param[0];
          return match[0] + match[1] | 0;
      
    }
  }
}

var a = /* A */0;

exports.a = a;
exports.b = b;
exports.c = c;
exports.d = d;
exports.foo = foo;
/*  Not a pure module */

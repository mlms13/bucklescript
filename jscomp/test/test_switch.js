'use strict';

var Curry = require("../../lib/js/curry.js");

function f(param) {
  if (typeof param === "number") {
    if (param === 0) {
      return 4;
    } else {
      return 5;
    }
  } else {
    switch (param.tag | 0) {
      case 0 :
          return 0;
      case 1 :
          return 1;
      case 2 :
          return 2;
      case 3 :
          return 3;
      
    }
  }
}

function bind(x, f) {
  if (x.tag) {
    return x;
  } else {
    return /* constructor */{
            tag: 0,
            name: "Left",
            length: 1,
            "0": Curry._1(f, x[0])
          };
  }
}

exports.f = f;
exports.bind = bind;
/* No side effect */

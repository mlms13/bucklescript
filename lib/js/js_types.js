'use strict';


function classify(x) {
  var ty = typeof x;
  if (ty === "undefined") {
    return /* JSUndefined */3;
  } else if (x === null) {
    return /* JSNull */2;
  } else if (ty === "number") {
    return /* constructor */{
            tag: 0,
            name: "JSNumber",
            length: 1,
            "0": x
          };
  } else if (ty === "string") {
    return /* constructor */{
            tag: 1,
            name: "JSString",
            length: 1,
            "0": x
          };
  } else if (ty === "boolean") {
    if (x === true) {
      return /* JSTrue */1;
    } else {
      return /* JSFalse */0;
    }
  } else if (ty === "function") {
    return /* constructor */{
            tag: 2,
            name: "JSFunction",
            length: 1,
            "0": x
          };
  } else if (ty === "object") {
    return /* constructor */{
            tag: 3,
            name: "JSObject",
            length: 1,
            "0": x
          };
  } else {
    return /* constructor */{
            tag: 4,
            name: "JSSymbol",
            length: 1,
            "0": x
          };
  }
}

function test(x, v) {
  switch (v) {
    case 0 :
        return typeof x === "undefined";
    case 1 :
        return x === null;
    case 2 :
        return typeof x === "boolean";
    case 3 :
        return typeof x === "number";
    case 4 :
        return typeof x === "string";
    case 5 :
        return typeof x === "function";
    case 6 :
        return typeof x === "object";
    case 7 :
        return typeof x === "symbol";
    
  }
}

exports.test = test;
exports.classify = classify;
/* No side effect */

'use strict';

var Mt = require("./mt.js");

function tst(param) {
  for(var i = (console.log("hi"), 0) ,i_finish = (console.log("hello"), 3); i <= i_finish; ++i){
    
  }
  return /* () */0;
}

function test2(param) {
  var v = 0;
  v = 3;
  v = 10;
  for(var i = 0; i <= 1; ++i){
    
  }
  return v;
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "for_order",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": 10,
                "1": test2(/* () */0)
              };
      })
  ],
  "1": /* [] */0
};

Mt.from_pair_suites("For_side_effect_test", suites);

exports.tst = tst;
exports.test2 = test2;
exports.suites = suites;
/*  Not a pure module */

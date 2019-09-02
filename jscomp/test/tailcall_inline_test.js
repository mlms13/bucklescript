'use strict';

var Mt = require("./mt.js");
var $$Array = require("../../lib/js/array.js");
var Caml_array = require("../../lib/js/caml_array.js");

function f(param) {
  var f$1 = function (_acc, _n) {
    while(true) {
      var n = _n;
      var acc = _acc;
      if (n > 0) {
        _n = n - 1 | 0;
        _acc = acc + n | 0;
        continue ;
      } else {
        return acc;
      }
    };
  };
  var v = Caml_array.caml_make_vect(10, 0);
  for(var i = 0; i <= 9; ++i){
    Caml_array.caml_array_set(v, i, f$1(0, i));
  }
  return v;
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "acc",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": f(/* () */0),
                "1": /* array */[
                  0,
                  1,
                  3,
                  6,
                  10,
                  15,
                  21,
                  28,
                  36,
                  45
                ]
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "array_to_list",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": /* constructor */{
                    tag: 0,
                    name: "::",
                    "0": 1,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      "0": 2,
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        "0": 3,
                        "1": /* [] */0
                      }
                    }
                  },
                  "1": $$Array.to_list(/* array */[
                        1,
                        2,
                        3
                      ])
                };
        })
    ],
    "1": /* [] */0
  }
};

Mt.from_pair_suites("Tailcall_inline_test", suites);

exports.f = f;
exports.suites = suites;
/*  Not a pure module */

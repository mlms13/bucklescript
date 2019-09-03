'use strict';

var Mt = require("./mt.js");

var suites = /* record */[/* contents : [] */0];

var test_id = /* record */[/* contents */0];

function eq(loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  length: 2,
                  "0": x,
                  "1": y
                };
        })
    ],
    "1": suites[0]
  };
  return /* () */0;
}

eq("File \"ffi_array_test.ml\", line 12, characters 5-12", /* array */[
        1,
        2,
        3,
        4
      ].map((function (x) {
            return x + 1 | 0;
          })), /* array */[
      2,
      3,
      4,
      5
    ]);

Mt.from_pair_suites("Ffi_array_test", suites[0]);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/*  Not a pure module */

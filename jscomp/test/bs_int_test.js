'use strict';

var Mt = require("./mt.js");
var Belt_Int = require("../../lib/js/belt_Int.js");

var suites = /* record */[/* contents : [] */0];

var test_id = /* record */[/* contents */0];

function eq(loc, x, y) {
  return Mt.eq_suites(test_id, suites, loc, x, y);
}

function b(loc, x) {
  return Mt.bool_suites(test_id, suites, loc, x);
}

function $$throw(loc, x) {
  return Mt.throw_suites(test_id, suites, loc, x);
}

function neq(loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      loc + (" id " + String(test_id[0])),
      (function (param) {
          return /* constructor */{
                  tag: 1,
                  name: "Neq",
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

eq("File \"bs_int_test.ml\", line 14, characters 5-12", 1, 1.0);

eq("File \"bs_int_test.ml\", line 15, characters 5-12", -1, -1.0);

eq("File \"bs_int_test.ml\", line 18, characters 5-12", 1, 1);

eq("File \"bs_int_test.ml\", line 19, characters 5-12", 1, 1);

eq("File \"bs_int_test.ml\", line 20, characters 5-12", 1, 1);

eq("File \"bs_int_test.ml\", line 21, characters 5-12", -1, -1);

eq("File \"bs_int_test.ml\", line 22, characters 5-12", -1, -1);

eq("File \"bs_int_test.ml\", line 23, characters 5-12", -1, -1);

eq("File \"bs_int_test.ml\", line 26, characters 5-12", Belt_Int.fromString("1"), 1);

eq("File \"bs_int_test.ml\", line 27, characters 5-12", Belt_Int.fromString("-1"), -1);

eq("File \"bs_int_test.ml\", line 28, characters 5-12", Belt_Int.fromString("1.7"), 1);

eq("File \"bs_int_test.ml\", line 29, characters 5-12", Belt_Int.fromString("-1.0"), -1);

eq("File \"bs_int_test.ml\", line 30, characters 5-12", Belt_Int.fromString("-1.5"), -1);

eq("File \"bs_int_test.ml\", line 31, characters 5-12", Belt_Int.fromString("-1.7"), -1);

eq("File \"bs_int_test.ml\", line 32, characters 5-12", Belt_Int.fromString("not an int"), undefined);

eq("File \"bs_int_test.ml\", line 35, characters 5-12", String(1), "1");

eq("File \"bs_int_test.ml\", line 36, characters 5-12", String(-1), "-1");

eq("File \"bs_int_test.ml\", line 40, characters 5-12", 5, 5);

eq("File \"bs_int_test.ml\", line 41, characters 5-12", -1, -1);

eq("File \"bs_int_test.ml\", line 42, characters 5-12", 6, 6);

eq("File \"bs_int_test.ml\", line 43, characters 5-12", 0, 0);

Mt.from_pair_suites("File \"bs_int_test.ml\", line 45, characters 23-30", suites[0]);

var I = 0;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.$$throw = $$throw;
exports.neq = neq;
exports.I = I;
/*  Not a pure module */

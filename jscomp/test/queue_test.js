'use strict';

var Mt = require("./mt.js");
var $$Array = require("../../lib/js/array.js");
var Queue = require("../../lib/js/queue.js");
var Caml_array = require("../../lib/js/caml_array.js");

function to_array(q) {
  var v = Caml_array.caml_make_vect(q[/* length */0], 0);
  Queue.fold((function (i, e) {
          Caml_array.caml_array_set(v, i, e);
          return i + 1 | 0;
        }), 0, q);
  return v;
}

function queue_1(x) {
  var q = /* record */[
    /* length */0,
    /* tail */undefined
  ];
  $$Array.iter((function (x) {
          return Queue.add(x, q);
        }), x);
  return to_array(q);
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "simple push",
    (function (param) {
        var x = /* array */[
          3,
          4,
          5,
          2
        ];
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": x,
                "1": queue_1(x)
              };
      })
  ],
  "1": /* [] */0
};

Mt.from_pair_suites("Queue_test", suites);

exports.to_array = to_array;
exports.queue_1 = queue_1;
exports.suites = suites;
/*  Not a pure module */

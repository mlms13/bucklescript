'use strict';

var Mt = require("./mt.js");
var $$String = require("../../lib/js/string.js");

function u(v) {
  return v;
}

var s = {
  make: $$String.make,
  init: $$String.init,
  copy: $$String.copy,
  sub: $$String.sub,
  fill: $$String.fill,
  blit: $$String.blit,
  concat: $$String.concat,
  iter: $$String.iter,
  iteri: $$String.iteri,
  map: $$String.map,
  mapi: $$String.mapi,
  trim: $$String.trim,
  escaped: $$String.escaped,
  index: $$String.index,
  rindex: $$String.rindex,
  index_from: $$String.index_from,
  rindex_from: $$String.rindex_from,
  contains: $$String.contains,
  contains_from: $$String.contains_from,
  rcontains_from: $$String.rcontains_from,
  uppercase: $$String.uppercase,
  lowercase: $$String.lowercase,
  capitalize: $$String.capitalize,
  uncapitalize: $$String.uncapitalize,
  compare: $$String.compare
};

var N = {
  s: s
};

function v(x) {
  return x.length;
}

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "const",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": 1,
                "1": 1
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "other",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": 3,
                  "1": 3
                };
        })
    ],
    "1": /* [] */0
  }
};

Mt.from_pair_suites("Module_parameter_test", suites);

var v0 = 1;

exports.u = u;
exports.N = N;
exports.v0 = v0;
exports.v = v;
exports.suites = suites;
/*  Not a pure module */

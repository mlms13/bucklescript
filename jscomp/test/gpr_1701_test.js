'use strict';

var List = require("../../lib/js/list.js");
var Pervasives = require("../../lib/js/pervasives.js");
var Caml_exceptions = require("../../lib/js/caml_exceptions.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

var Foo = Caml_exceptions.create("Gpr_1701_test.Foo");

function test(n) {
  if (n === 0) {
    throw Foo;
  }
  try {
    return test(n - 1 | 0);
  }
  catch (exn){
    if (exn === Foo) {
      return /* () */0;
    } else {
      throw exn;
    }
  }
}

test(100);

function read_lines(inc) {
  var _acc = /* [] */0;
  while(true) {
    var acc = _acc;
    var match;
    try {
      match = Pervasives.input_line(inc);
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.end_of_file) {
        match = undefined;
      } else {
        throw exn;
      }
    }
    if (match !== undefined) {
      _acc = /* constructor */{
        tag: 0,
        name: "::",
        "0": match,
        "1": acc
      };
      continue ;
    } else {
      return List.rev(acc);
    }
  };
}

function read_lines2(inc) {
  var _acc = /* [] */0;
  while(true) {
    var acc = _acc;
    var l;
    try {
      l = Pervasives.input_line(inc);
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.end_of_file) {
        return List.rev(acc);
      } else {
        throw exn;
      }
    }
    _acc = /* constructor */{
      tag: 0,
      name: "::",
      "0": l,
      "1": acc
    };
    continue ;
  };
}

function read_lines3(inc) {
  var loop = function (acc) {
    try {
      var l = Pervasives.input_line(inc);
      return loop(/* constructor */{
                  tag: 0,
                  name: "::",
                  "0": l,
                  "1": acc
                });
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.end_of_file) {
        return List.rev(acc);
      } else {
        throw exn;
      }
    }
  };
  return loop(/* [] */0);
}

function fff(f, x) {
  try {
    return fff(f, x);
  }
  catch (exn){
    return x + 1 | 0;
  }
}

exports.Foo = Foo;
exports.test = test;
exports.read_lines = read_lines;
exports.read_lines2 = read_lines2;
exports.read_lines3 = read_lines3;
exports.fff = fff;
/*  Not a pure module */

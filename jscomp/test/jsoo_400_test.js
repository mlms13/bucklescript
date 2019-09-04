'use strict';

var Mt = require("./mt.js");
var Caml_int32 = require("../../lib/js/caml_int32.js");

function u(param) {
  var n;
  try {
    n = 3;
  }
  catch (exn){
    return 42;
  }
  return Caml_int32.div(3, 0);
}

Mt.from_pair_suites("Jsoo_400_test", /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "File \"jsoo_400_test.ml\", line 8, characters 3-10",
        (function (param) {
            return /* constructor */{
                    tag: 7,
                    name: "ThrowAny",
                    "0": (function (param) {
                        u(/* () */0);
                        return /* () */0;
                      })
                  };
          })
      ],
      "1": /* [] */0
    });

exports.u = u;
/*  Not a pure module */

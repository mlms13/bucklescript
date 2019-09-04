'use strict';

var Caml_obj = require("../../lib/js/caml_obj.js");
var CamlinternalLazy = require("../../lib/js/camlinternalLazy.js");

function fix(param) {
  return /* constructor */{
          tag: 0,
          name: "Fix",
          "0": Caml_obj.caml_lazy_make((function (param) {
                  return fix(/* () */0);
                }))
        };
}

function unfixLeak(_param) {
  while(true) {
    var param = _param;
    _param = CamlinternalLazy.force(param[0]);
    continue ;
  };
}

function unfix(p) {
  while(true) {
    var match = p[0];
    p[0] = CamlinternalLazy.force(match[0]);
  };
  return /* () */0;
}

exports.fix = fix;
exports.unfixLeak = unfixLeak;
exports.unfix = unfix;
/* No side effect */

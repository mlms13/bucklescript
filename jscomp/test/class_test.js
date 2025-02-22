'use strict';

var Mt = require("./mt.js");
var Block = require("../../lib/js/block.js");
var Curry = require("../../lib/js/curry.js");
var Caml_oo_curry = require("../../lib/js/caml_oo_curry.js");
var CamlinternalOO = require("../../lib/js/camlinternalOO.js");

var shared = ["x"];

var shared$1 = [
  "move",
  "get_x"
];

function point_init($$class) {
  var ids = CamlinternalOO.new_methods_variables($$class, shared$1, shared);
  var move = ids[0];
  var get_x = ids[1];
  var x = ids[2];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$1) {
            return self$1[x];
          }),
        move,
        (function (self$1, d) {
            self$1[x] = self$1[x] + d | 0;
            return /* () */0;
          })
      ]);
  return (function (env, self) {
      var self$1 = CamlinternalOO.create_object_opt(self, $$class);
      self$1[x] = 0;
      return self$1;
    });
}

var point = CamlinternalOO.make_class(shared$1, point_init);

var p = Curry._1(point[0], 0);

var zero = Caml_oo_curry.js1(291546447, 1, p);

Caml_oo_curry.js2(-933174511, 2, p, 3);

var three = Caml_oo_curry.js1(291546447, 3, p);

var x0 = {
  contents: 0
};

function point2_init($$class) {
  var ids = CamlinternalOO.new_methods_variables($$class, shared$1, shared);
  var move = ids[0];
  var get_x = ids[1];
  var x = ids[2];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$2) {
            return self$2[x];
          }),
        move,
        (function (self$2, d) {
            self$2[x] = self$2[x] + d | 0;
            return /* () */0;
          })
      ]);
  return (function (env, self) {
      var self$1 = CamlinternalOO.create_object_opt(self, $$class);
      x0.contents = x0.contents + 1 | 0;
      self$1[x] = x0.contents;
      return self$1;
    });
}

var point2 = CamlinternalOO.make_class(shared$1, point2_init);

var tmp = Curry._1(point2[0], 0);

var one = Caml_oo_curry.js1(291546447, 4, tmp);

var tmp$1 = Curry._1(point2[0], 0);

var two = Caml_oo_curry.js1(291546447, 5, tmp$1);

var u = {
  x: 3,
  getX: (function () {
      var self = this ;
      return self.x;
    })
};

Mt.from_pair_suites("Class_test", /* :: */[
      /* tuple */[
        "File \"class_test.ml\", line 38, characters 4-11",
        (function (param) {
            return /* Eq */Block.__(0, [
                      zero,
                      0
                    ]);
          })
      ],
      /* :: */[
        /* tuple */[
          "File \"class_test.ml\", line 39, characters 4-11",
          (function (param) {
              return /* Eq */Block.__(0, [
                        three,
                        3
                      ]);
            })
        ],
        /* :: */[
          /* tuple */[
            "File \"class_test.ml\", line 40, characters 4-11",
            (function (param) {
                return /* Eq */Block.__(0, [
                          one,
                          1
                        ]);
              })
          ],
          /* :: */[
            /* tuple */[
              "File \"class_test.ml\", line 41, characters 4-11",
              (function (param) {
                  return /* Eq */Block.__(0, [
                            two,
                            2
                          ]);
                })
            ],
            /* [] */0
          ]
        ]
      ]
    ]);

exports.point = point;
exports.p = p;
exports.zero = zero;
exports.three = three;
exports.x0 = x0;
exports.point2 = point2;
exports.one = one;
exports.two = two;
exports.u = u;
/* point Not a pure module */

'use strict';


var u = {
  y: 3
};

var v_ice_cream3 = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": {
    flavor: "vanilla",
    num: 3
  },
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": {
      flavor: "x",
      num: 3
    },
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": {
        flavor: "vanilla",
        num: 3
      },
      "1": /* [] */0
    }
  }
};

var v_ice_cream4 = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": {
    flavor: "vanilla",
    num: 3
  },
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": {
      flavor: "x",
      num: 3
    },
    "1": /* [] */0
  }
};

var vv = {
  x: 3
};

var int_expect = {
  x: 0
};

var int_expect2 = {
  x: 0
};

var int_expects = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": { },
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": {
      x: 2
    },
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": {
        x: 3
      },
      "1": /* [] */0
    }
  }
};

var mk_ice = {
  flavour: "vanilla",
  num: 3
};

var my_ice2 = {
  flavour: "vanilla",
  num: 1
};

var my_ice3 = {
  num: 2
};

var v_mk4 = {
  y: 3
};

var v_mk5 = {
  x: /* () */0,
  y: 3
};

var v_mk6 = {
  y: 3
};

var v_mk6_1 = {
  x: /* () */0,
  y: 3
};

var mk_u = {
  x: 0
};

var v_mk7 = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": {
    y: 3
  },
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": {
      y: 2
    },
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": {
        y: 2
      },
      "1": /* [] */0
    }
  }
};

again("a", 3);

again(undefined, 3);

again(undefined, 3);

again(undefined, 3);

again2("a", 3);

again3(3);

again3(2);

var side_effect = /* record */[/* contents */0];

again4(undefined, /* () */0, 166);

again4(undefined, /* () */0, 167);

again4(/* () */0, /* () */0, 168);

again4(/* () */0, /* () */0, 169);

again4(undefined, /* () */0, 170);

again4((side_effect[0] = side_effect[0] + 1 | 0, /* () */0), /* () */0, 171);

again4((side_effect[0] = side_effect[0] + 1 | 0, /* () */0), (side_effect[0] = side_effect[0] - 1 | 0, /* () */0), 172);

again4(undefined, (side_effect[0] = side_effect[0] - 1 | 0, /* () */0), 173);

again4((side_effect[0] = side_effect[0] + 1 | 0, /* () */0), /* () */0, 174);

exports.u = u;
exports.v_ice_cream3 = v_ice_cream3;
exports.v_ice_cream4 = v_ice_cream4;
exports.vv = vv;
exports.int_expect = int_expect;
exports.int_expect2 = int_expect2;
exports.int_expects = int_expects;
exports.mk_ice = mk_ice;
exports.my_ice2 = my_ice2;
exports.my_ice3 = my_ice3;
exports.v_mk4 = v_mk4;
exports.v_mk5 = v_mk5;
exports.v_mk6 = v_mk6;
exports.v_mk6_1 = v_mk6_1;
exports.mk_u = mk_u;
exports.v_mk7 = v_mk7;
exports.side_effect = side_effect;
/*  Not a pure module */

'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Ext_string_test = require("./ext_string_test.js");

var suites = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "split",
    (function (param) {
        return /* constructor */{
                tag: 0,
                name: "Eq",
                length: 2,
                "0": Ext_string_test.split(true, "hihi", /* "i" */105),
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": "h",
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": "h",
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": "",
                      "1": /* [] */0
                    }
                  }
                }
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    length: 2,
    "0": /* tuple */[
      "split_non_empty",
      (function (param) {
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  length: 2,
                  "0": Ext_string_test.split(undefined, "hihi", /* "i" */105),
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": "h",
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": "h",
                      "1": /* [] */0
                    }
                  }
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      length: 2,
      "0": /* tuple */[
        "split_empty",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    length: 2,
                    "0": Ext_string_test.split(true, "", /* "i" */105),
                    "1": /* [] */0
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        length: 2,
        "0": /* tuple */[
          "split_normal",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      length: 2,
                      "0": Ext_string_test.split(true, "h i i", /* " " */32),
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": "h",
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": "i",
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": "i",
                            "1": /* [] */0
                          }
                        }
                      }
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": /* tuple */[
            "split_by",
            (function (param) {
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        length: 2,
                        "0": List.filter((function (s) {
                                  return s !== "";
                                }))(Ext_string_test.split_by(undefined, (function (x) {
                                    if (x === /* " " */32) {
                                      return true;
                                    } else {
                                      return x === /* "\t" */9;
                                    }
                                  }), "h hgso hgso \t hi")),
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": "h",
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": "hgso",
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": "hgso",
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": "hi",
                                "1": /* [] */0
                              }
                            }
                          }
                        }
                      };
              })
          ],
          "1": /* [] */0
        }
      }
    }
  }
};

Mt.from_pair_suites("A_string_test", suites);

var split = Ext_string_test.split;

var split_by = Ext_string_test.split_by;

exports.split = split;
exports.split_by = split_by;
exports.suites = suites;
/*  Not a pure module */

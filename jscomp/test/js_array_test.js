'use strict';

var Mt = require("./mt.js");
var Js_vector = require("../../lib/js/js_vector.js");
var Caml_option = require("../../lib/js/caml_option.js");

var suites = /* constructor */{
  tag: 0,
  name: "::",
  "0": /* tuple */[
    "File \"js_array_test.ml\", line 3, characters 4-11",
    (function (param) {
        var x = /* array */[
          1,
          2,
          3,
          4,
          5
        ];
        return /* constructor */{
                tag: 0,
                name: "Eq",
                "0": /* array */[
                  2,
                  4
                ],
                "1": (Js_vector.filterInPlace((function (x) {
                          return x % 2 === 0;
                        }), x), x)
              };
      })
  ],
  "1": /* constructor */{
    tag: 0,
    name: "::",
    "0": /* tuple */[
      "File \"js_array_test.ml\", line 11, characters 4-11",
      (function (param) {
          var x = /* array */[
            1,
            2,
            3,
            4,
            5
          ];
          return /* constructor */{
                  tag: 0,
                  name: "Eq",
                  "0": true,
                  "1": (Js_vector.filterInPlace((function (x) {
                            return x > 10;
                          }), x), x.length === 0)
                };
        })
    ],
    "1": /* constructor */{
      tag: 0,
      name: "::",
      "0": /* tuple */[
        "isArray_array",
        (function (param) {
            return /* constructor */{
                    tag: 0,
                    name: "Eq",
                    "0": true,
                    "1": Array.isArray(/* array */[])
                  };
          })
      ],
      "1": /* constructor */{
        tag: 0,
        name: "::",
        "0": /* tuple */[
          "isArray_int",
          (function (param) {
              return /* constructor */{
                      tag: 0,
                      name: "Eq",
                      "0": false,
                      "1": Array.isArray(34)
                    };
            })
        ],
        "1": /* constructor */{
          tag: 0,
          name: "::",
          "0": /* tuple */[
            "length",
            (function (param) {
                return /* constructor */{
                        tag: 0,
                        name: "Eq",
                        "0": 3,
                        "1": /* array */[
                          1,
                          2,
                          3
                        ].length
                      };
              })
          ],
          "1": /* constructor */{
            tag: 0,
            name: "::",
            "0": /* tuple */[
              "copyWithin",
              (function (param) {
                  return /* constructor */{
                          tag: 0,
                          name: "Eq",
                          "0": /* array */[
                            1,
                            2,
                            3,
                            1,
                            2
                          ],
                          "1": /* array */[
                              1,
                              2,
                              3,
                              4,
                              5
                            ].copyWithin(-2)
                        };
                })
            ],
            "1": /* constructor */{
              tag: 0,
              name: "::",
              "0": /* tuple */[
                "copyWithinFrom",
                (function (param) {
                    return /* constructor */{
                            tag: 0,
                            name: "Eq",
                            "0": /* array */[
                              4,
                              5,
                              3,
                              4,
                              5
                            ],
                            "1": /* array */[
                                1,
                                2,
                                3,
                                4,
                                5
                              ].copyWithin(0, 3)
                          };
                  })
              ],
              "1": /* constructor */{
                tag: 0,
                name: "::",
                "0": /* tuple */[
                  "copyWithinFromRange",
                  (function (param) {
                      return /* constructor */{
                              tag: 0,
                              name: "Eq",
                              "0": /* array */[
                                4,
                                2,
                                3,
                                4,
                                5
                              ],
                              "1": /* array */[
                                  1,
                                  2,
                                  3,
                                  4,
                                  5
                                ].copyWithin(0, 3, 4)
                            };
                    })
                ],
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  "0": /* tuple */[
                    "fillInPlace",
                    (function (param) {
                        return /* constructor */{
                                tag: 0,
                                name: "Eq",
                                "0": /* array */[
                                  4,
                                  4,
                                  4
                                ],
                                "1": /* array */[
                                    1,
                                    2,
                                    3
                                  ].fill(4)
                              };
                      })
                  ],
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    "0": /* tuple */[
                      "fillFromInPlace",
                      (function (param) {
                          return /* constructor */{
                                  tag: 0,
                                  name: "Eq",
                                  "0": /* array */[
                                    1,
                                    4,
                                    4
                                  ],
                                  "1": /* array */[
                                      1,
                                      2,
                                      3
                                    ].fill(4, 1)
                                };
                        })
                    ],
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      "0": /* tuple */[
                        "fillRangeInPlace",
                        (function (param) {
                            return /* constructor */{
                                    tag: 0,
                                    name: "Eq",
                                    "0": /* array */[
                                      1,
                                      4,
                                      3
                                    ],
                                    "1": /* array */[
                                        1,
                                        2,
                                        3
                                      ].fill(4, 1, 2)
                                  };
                          })
                      ],
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        "0": /* tuple */[
                          "pop",
                          (function (param) {
                              return /* constructor */{
                                      tag: 0,
                                      name: "Eq",
                                      "0": 3,
                                      "1": Caml_option.undefined_to_opt(/* array */[
                                              1,
                                              2,
                                              3
                                            ].pop())
                                    };
                            })
                        ],
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          "0": /* tuple */[
                            "pop - empty array",
                            (function (param) {
                                return /* constructor */{
                                        tag: 0,
                                        name: "Eq",
                                        "0": undefined,
                                        "1": Caml_option.undefined_to_opt(/* array */[].pop())
                                      };
                              })
                          ],
                          "1": /* constructor */{
                            tag: 0,
                            name: "::",
                            "0": /* tuple */[
                              "push",
                              (function (param) {
                                  return /* constructor */{
                                          tag: 0,
                                          name: "Eq",
                                          "0": 4,
                                          "1": /* array */[
                                              1,
                                              2,
                                              3
                                            ].push(4)
                                        };
                                })
                            ],
                            "1": /* constructor */{
                              tag: 0,
                              name: "::",
                              "0": /* tuple */[
                                "pushMany",
                                (function (param) {
                                    return /* constructor */{
                                            tag: 0,
                                            name: "Eq",
                                            "0": 5,
                                            "1": /* array */[
                                                1,
                                                2,
                                                3
                                              ].push(4, 5)
                                          };
                                  })
                              ],
                              "1": /* constructor */{
                                tag: 0,
                                name: "::",
                                "0": /* tuple */[
                                  "reverseInPlace",
                                  (function (param) {
                                      return /* constructor */{
                                              tag: 0,
                                              name: "Eq",
                                              "0": /* array */[
                                                3,
                                                2,
                                                1
                                              ],
                                              "1": /* array */[
                                                  1,
                                                  2,
                                                  3
                                                ].reverse()
                                            };
                                    })
                                ],
                                "1": /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  "0": /* tuple */[
                                    "shift",
                                    (function (param) {
                                        return /* constructor */{
                                                tag: 0,
                                                name: "Eq",
                                                "0": 1,
                                                "1": Caml_option.undefined_to_opt(/* array */[
                                                        1,
                                                        2,
                                                        3
                                                      ].shift())
                                              };
                                      })
                                  ],
                                  "1": /* constructor */{
                                    tag: 0,
                                    name: "::",
                                    "0": /* tuple */[
                                      "shift - empty array",
                                      (function (param) {
                                          return /* constructor */{
                                                  tag: 0,
                                                  name: "Eq",
                                                  "0": undefined,
                                                  "1": Caml_option.undefined_to_opt(/* array */[].shift())
                                                };
                                        })
                                    ],
                                    "1": /* constructor */{
                                      tag: 0,
                                      name: "::",
                                      "0": /* tuple */[
                                        "sortInPlace",
                                        (function (param) {
                                            return /* constructor */{
                                                    tag: 0,
                                                    name: "Eq",
                                                    "0": /* array */[
                                                      1,
                                                      2,
                                                      3
                                                    ],
                                                    "1": /* array */[
                                                        3,
                                                        1,
                                                        2
                                                      ].sort()
                                                  };
                                          })
                                      ],
                                      "1": /* constructor */{
                                        tag: 0,
                                        name: "::",
                                        "0": /* tuple */[
                                          "sortInPlaceWith",
                                          (function (param) {
                                              return /* constructor */{
                                                      tag: 0,
                                                      name: "Eq",
                                                      "0": /* array */[
                                                        3,
                                                        2,
                                                        1
                                                      ],
                                                      "1": /* array */[
                                                          3,
                                                          1,
                                                          2
                                                        ].sort((function (a, b) {
                                                              return b - a | 0;
                                                            }))
                                                    };
                                            })
                                        ],
                                        "1": /* constructor */{
                                          tag: 0,
                                          name: "::",
                                          "0": /* tuple */[
                                            "spliceInPlace",
                                            (function (param) {
                                                var arr = /* array */[
                                                  1,
                                                  2,
                                                  3,
                                                  4
                                                ];
                                                var removed = arr.splice(2, 0, 5);
                                                return /* constructor */{
                                                        tag: 0,
                                                        name: "Eq",
                                                        "0": /* tuple */[
                                                          /* array */[
                                                            1,
                                                            2,
                                                            5,
                                                            3,
                                                            4
                                                          ],
                                                          /* array */[]
                                                        ],
                                                        "1": /* tuple */[
                                                          arr,
                                                          removed
                                                        ]
                                                      };
                                              })
                                          ],
                                          "1": /* constructor */{
                                            tag: 0,
                                            name: "::",
                                            "0": /* tuple */[
                                              "removeFromInPlace",
                                              (function (param) {
                                                  var arr = /* array */[
                                                    1,
                                                    2,
                                                    3,
                                                    4
                                                  ];
                                                  var removed = arr.splice(2);
                                                  return /* constructor */{
                                                          tag: 0,
                                                          name: "Eq",
                                                          "0": /* tuple */[
                                                            /* array */[
                                                              1,
                                                              2
                                                            ],
                                                            /* array */[
                                                              3,
                                                              4
                                                            ]
                                                          ],
                                                          "1": /* tuple */[
                                                            arr,
                                                            removed
                                                          ]
                                                        };
                                                })
                                            ],
                                            "1": /* constructor */{
                                              tag: 0,
                                              name: "::",
                                              "0": /* tuple */[
                                                "removeCountInPlace",
                                                (function (param) {
                                                    var arr = /* array */[
                                                      1,
                                                      2,
                                                      3,
                                                      4
                                                    ];
                                                    var removed = arr.splice(2, 1);
                                                    return /* constructor */{
                                                            tag: 0,
                                                            name: "Eq",
                                                            "0": /* tuple */[
                                                              /* array */[
                                                                1,
                                                                2,
                                                                4
                                                              ],
                                                              /* array */[3]
                                                            ],
                                                            "1": /* tuple */[
                                                              arr,
                                                              removed
                                                            ]
                                                          };
                                                  })
                                              ],
                                              "1": /* constructor */{
                                                tag: 0,
                                                name: "::",
                                                "0": /* tuple */[
                                                  "unshift",
                                                  (function (param) {
                                                      return /* constructor */{
                                                              tag: 0,
                                                              name: "Eq",
                                                              "0": 4,
                                                              "1": /* array */[
                                                                  1,
                                                                  2,
                                                                  3
                                                                ].unshift(4)
                                                            };
                                                    })
                                                ],
                                                "1": /* constructor */{
                                                  tag: 0,
                                                  name: "::",
                                                  "0": /* tuple */[
                                                    "unshiftMany",
                                                    (function (param) {
                                                        return /* constructor */{
                                                                tag: 0,
                                                                name: "Eq",
                                                                "0": 5,
                                                                "1": /* array */[
                                                                    1,
                                                                    2,
                                                                    3
                                                                  ].unshift(4, 5)
                                                              };
                                                      })
                                                  ],
                                                  "1": /* constructor */{
                                                    tag: 0,
                                                    name: "::",
                                                    "0": /* tuple */[
                                                      "append",
                                                      (function (param) {
                                                          return /* constructor */{
                                                                  tag: 0,
                                                                  name: "Eq",
                                                                  "0": /* array */[
                                                                    1,
                                                                    2,
                                                                    3,
                                                                    4
                                                                  ],
                                                                  "1": /* array */[
                                                                      1,
                                                                      2,
                                                                      3
                                                                    ].concat(/* array */[4])
                                                                };
                                                        })
                                                    ],
                                                    "1": /* constructor */{
                                                      tag: 0,
                                                      name: "::",
                                                      "0": /* tuple */[
                                                        "concat",
                                                        (function (param) {
                                                            return /* constructor */{
                                                                    tag: 0,
                                                                    name: "Eq",
                                                                    "0": /* array */[
                                                                      1,
                                                                      2,
                                                                      3,
                                                                      4,
                                                                      5
                                                                    ],
                                                                    "1": /* array */[
                                                                        1,
                                                                        2,
                                                                        3
                                                                      ].concat(/* array */[
                                                                          4,
                                                                          5
                                                                        ])
                                                                  };
                                                          })
                                                      ],
                                                      "1": /* constructor */{
                                                        tag: 0,
                                                        name: "::",
                                                        "0": /* tuple */[
                                                          "concatMany",
                                                          (function (param) {
                                                              return /* constructor */{
                                                                      tag: 0,
                                                                      name: "Eq",
                                                                      "0": /* array */[
                                                                        1,
                                                                        2,
                                                                        3,
                                                                        4,
                                                                        5,
                                                                        6,
                                                                        7
                                                                      ],
                                                                      "1": /* array */[
                                                                          1,
                                                                          2,
                                                                          3
                                                                        ].concat(/* array */[
                                                                            4,
                                                                            5
                                                                          ], /* array */[
                                                                            6,
                                                                            7
                                                                          ])
                                                                    };
                                                            })
                                                        ],
                                                        "1": /* constructor */{
                                                          tag: 0,
                                                          name: "::",
                                                          "0": /* tuple */[
                                                            "includes",
                                                            (function (param) {
                                                                return /* constructor */{
                                                                        tag: 0,
                                                                        name: "Eq",
                                                                        "0": true,
                                                                        "1": /* array */[
                                                                            1,
                                                                            2,
                                                                            3
                                                                          ].includes(3)
                                                                      };
                                                              })
                                                          ],
                                                          "1": /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            "0": /* tuple */[
                                                              "indexOf",
                                                              (function (param) {
                                                                  return /* constructor */{
                                                                          tag: 0,
                                                                          name: "Eq",
                                                                          "0": 1,
                                                                          "1": /* array */[
                                                                              1,
                                                                              2,
                                                                              3
                                                                            ].indexOf(2)
                                                                        };
                                                                })
                                                            ],
                                                            "1": /* constructor */{
                                                              tag: 0,
                                                              name: "::",
                                                              "0": /* tuple */[
                                                                "indexOfFrom",
                                                                (function (param) {
                                                                    return /* constructor */{
                                                                            tag: 0,
                                                                            name: "Eq",
                                                                            "0": 3,
                                                                            "1": /* array */[
                                                                                1,
                                                                                2,
                                                                                3,
                                                                                2
                                                                              ].indexOf(2, 2)
                                                                          };
                                                                  })
                                                              ],
                                                              "1": /* constructor */{
                                                                tag: 0,
                                                                name: "::",
                                                                "0": /* tuple */[
                                                                  "join",
                                                                  (function (param) {
                                                                      return /* constructor */{
                                                                              tag: 0,
                                                                              name: "Eq",
                                                                              "0": "1,2,3",
                                                                              "1": /* array */[
                                                                                  1,
                                                                                  2,
                                                                                  3
                                                                                ].join()
                                                                            };
                                                                    })
                                                                ],
                                                                "1": /* constructor */{
                                                                  tag: 0,
                                                                  name: "::",
                                                                  "0": /* tuple */[
                                                                    "joinWith",
                                                                    (function (param) {
                                                                        return /* constructor */{
                                                                                tag: 0,
                                                                                name: "Eq",
                                                                                "0": "1;2;3",
                                                                                "1": /* array */[
                                                                                    1,
                                                                                    2,
                                                                                    3
                                                                                  ].join(";")
                                                                              };
                                                                      })
                                                                  ],
                                                                  "1": /* constructor */{
                                                                    tag: 0,
                                                                    name: "::",
                                                                    "0": /* tuple */[
                                                                      "lastIndexOf",
                                                                      (function (param) {
                                                                          return /* constructor */{
                                                                                  tag: 0,
                                                                                  name: "Eq",
                                                                                  "0": 1,
                                                                                  "1": /* array */[
                                                                                      1,
                                                                                      2,
                                                                                      3
                                                                                    ].lastIndexOf(2)
                                                                                };
                                                                        })
                                                                    ],
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      "0": /* tuple */[
                                                                        "lastIndexOfFrom",
                                                                        (function (param) {
                                                                            return /* constructor */{
                                                                                    tag: 0,
                                                                                    name: "Eq",
                                                                                    "0": 1,
                                                                                    "1": /* array */[
                                                                                        1,
                                                                                        2,
                                                                                        3,
                                                                                        2
                                                                                      ].lastIndexOf(2, 2)
                                                                                  };
                                                                          })
                                                                      ],
                                                                      "1": /* constructor */{
                                                                        tag: 0,
                                                                        name: "::",
                                                                        "0": /* tuple */[
                                                                          "slice",
                                                                          (function (param) {
                                                                              return /* constructor */{
                                                                                      tag: 0,
                                                                                      name: "Eq",
                                                                                      "0": /* array */[
                                                                                        2,
                                                                                        3
                                                                                      ],
                                                                                      "1": /* array */[
                                                                                          1,
                                                                                          2,
                                                                                          3,
                                                                                          4,
                                                                                          5
                                                                                        ].slice(1, 3)
                                                                                    };
                                                                            })
                                                                        ],
                                                                        "1": /* constructor */{
                                                                          tag: 0,
                                                                          name: "::",
                                                                          "0": /* tuple */[
                                                                            "copy",
                                                                            (function (param) {
                                                                                return /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "Eq",
                                                                                        "0": /* array */[
                                                                                          1,
                                                                                          2,
                                                                                          3,
                                                                                          4,
                                                                                          5
                                                                                        ],
                                                                                        "1": /* array */[
                                                                                            1,
                                                                                            2,
                                                                                            3,
                                                                                            4,
                                                                                            5
                                                                                          ].slice()
                                                                                      };
                                                                              })
                                                                          ],
                                                                          "1": /* constructor */{
                                                                            tag: 0,
                                                                            name: "::",
                                                                            "0": /* tuple */[
                                                                              "sliceFrom",
                                                                              (function (param) {
                                                                                  return /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "Eq",
                                                                                          "0": /* array */[
                                                                                            3,
                                                                                            4,
                                                                                            5
                                                                                          ],
                                                                                          "1": /* array */[
                                                                                              1,
                                                                                              2,
                                                                                              3,
                                                                                              4,
                                                                                              5
                                                                                            ].slice(2)
                                                                                        };
                                                                                })
                                                                            ],
                                                                            "1": /* constructor */{
                                                                              tag: 0,
                                                                              name: "::",
                                                                              "0": /* tuple */[
                                                                                "toString",
                                                                                (function (param) {
                                                                                    return /* constructor */{
                                                                                            tag: 0,
                                                                                            name: "Eq",
                                                                                            "0": "1,2,3",
                                                                                            "1": /* array */[
                                                                                                1,
                                                                                                2,
                                                                                                3
                                                                                              ].toString()
                                                                                          };
                                                                                  })
                                                                              ],
                                                                              "1": /* constructor */{
                                                                                tag: 0,
                                                                                name: "::",
                                                                                "0": /* tuple */[
                                                                                  "toLocaleString",
                                                                                  (function (param) {
                                                                                      return /* constructor */{
                                                                                              tag: 0,
                                                                                              name: "Eq",
                                                                                              "0": "1,2,3",
                                                                                              "1": /* array */[
                                                                                                  1,
                                                                                                  2,
                                                                                                  3
                                                                                                ].toLocaleString()
                                                                                            };
                                                                                    })
                                                                                ],
                                                                                "1": /* constructor */{
                                                                                  tag: 0,
                                                                                  name: "::",
                                                                                  "0": /* tuple */[
                                                                                    "every",
                                                                                    (function (param) {
                                                                                        return /* constructor */{
                                                                                                tag: 0,
                                                                                                name: "Eq",
                                                                                                "0": true,
                                                                                                "1": /* array */[
                                                                                                    1,
                                                                                                    2,
                                                                                                    3
                                                                                                  ].every((function (n) {
                                                                                                        return n > 0;
                                                                                                      }))
                                                                                              };
                                                                                      })
                                                                                  ],
                                                                                  "1": /* constructor */{
                                                                                    tag: 0,
                                                                                    name: "::",
                                                                                    "0": /* tuple */[
                                                                                      "everyi",
                                                                                      (function (param) {
                                                                                          return /* constructor */{
                                                                                                  tag: 0,
                                                                                                  name: "Eq",
                                                                                                  "0": false,
                                                                                                  "1": /* array */[
                                                                                                      1,
                                                                                                      2,
                                                                                                      3
                                                                                                    ].every((function (param, i) {
                                                                                                          return i > 0;
                                                                                                        }))
                                                                                                };
                                                                                        })
                                                                                    ],
                                                                                    "1": /* constructor */{
                                                                                      tag: 0,
                                                                                      name: "::",
                                                                                      "0": /* tuple */[
                                                                                        "filter",
                                                                                        (function (param) {
                                                                                            return /* constructor */{
                                                                                                    tag: 0,
                                                                                                    name: "Eq",
                                                                                                    "0": /* array */[
                                                                                                      2,
                                                                                                      4
                                                                                                    ],
                                                                                                    "1": /* array */[
                                                                                                        1,
                                                                                                        2,
                                                                                                        3,
                                                                                                        4
                                                                                                      ].filter((function (n) {
                                                                                                            return n % 2 === 0;
                                                                                                          }))
                                                                                                  };
                                                                                          })
                                                                                      ],
                                                                                      "1": /* constructor */{
                                                                                        tag: 0,
                                                                                        name: "::",
                                                                                        "0": /* tuple */[
                                                                                          "filteri",
                                                                                          (function (param) {
                                                                                              return /* constructor */{
                                                                                                      tag: 0,
                                                                                                      name: "Eq",
                                                                                                      "0": /* array */[
                                                                                                        1,
                                                                                                        3
                                                                                                      ],
                                                                                                      "1": /* array */[
                                                                                                          1,
                                                                                                          2,
                                                                                                          3,
                                                                                                          4
                                                                                                        ].filter((function (param, i) {
                                                                                                              return i % 2 === 0;
                                                                                                            }))
                                                                                                    };
                                                                                            })
                                                                                        ],
                                                                                        "1": /* constructor */{
                                                                                          tag: 0,
                                                                                          name: "::",
                                                                                          "0": /* tuple */[
                                                                                            "find",
                                                                                            (function (param) {
                                                                                                return /* constructor */{
                                                                                                        tag: 0,
                                                                                                        name: "Eq",
                                                                                                        "0": 2,
                                                                                                        "1": Caml_option.undefined_to_opt(/* array */[
                                                                                                                1,
                                                                                                                2,
                                                                                                                3,
                                                                                                                4
                                                                                                              ].find((function (n) {
                                                                                                                    return n % 2 === 0;
                                                                                                                  })))
                                                                                                      };
                                                                                              })
                                                                                          ],
                                                                                          "1": /* constructor */{
                                                                                            tag: 0,
                                                                                            name: "::",
                                                                                            "0": /* tuple */[
                                                                                              "find - no match",
                                                                                              (function (param) {
                                                                                                  return /* constructor */{
                                                                                                          tag: 0,
                                                                                                          name: "Eq",
                                                                                                          "0": undefined,
                                                                                                          "1": Caml_option.undefined_to_opt(/* array */[
                                                                                                                  1,
                                                                                                                  2,
                                                                                                                  3,
                                                                                                                  4
                                                                                                                ].find((function (n) {
                                                                                                                      return n % 2 === 5;
                                                                                                                    })))
                                                                                                        };
                                                                                                })
                                                                                            ],
                                                                                            "1": /* constructor */{
                                                                                              tag: 0,
                                                                                              name: "::",
                                                                                              "0": /* tuple */[
                                                                                                "findi",
                                                                                                (function (param) {
                                                                                                    return /* constructor */{
                                                                                                            tag: 0,
                                                                                                            name: "Eq",
                                                                                                            "0": 1,
                                                                                                            "1": Caml_option.undefined_to_opt(/* array */[
                                                                                                                    1,
                                                                                                                    2,
                                                                                                                    3,
                                                                                                                    4
                                                                                                                  ].find((function (param, i) {
                                                                                                                        return i % 2 === 0;
                                                                                                                      })))
                                                                                                          };
                                                                                                  })
                                                                                              ],
                                                                                              "1": /* constructor */{
                                                                                                tag: 0,
                                                                                                name: "::",
                                                                                                "0": /* tuple */[
                                                                                                  "findi - no match",
                                                                                                  (function (param) {
                                                                                                      return /* constructor */{
                                                                                                              tag: 0,
                                                                                                              name: "Eq",
                                                                                                              "0": undefined,
                                                                                                              "1": Caml_option.undefined_to_opt(/* array */[
                                                                                                                      1,
                                                                                                                      2,
                                                                                                                      3,
                                                                                                                      4
                                                                                                                    ].find((function (param, i) {
                                                                                                                          return i % 2 === 5;
                                                                                                                        })))
                                                                                                            };
                                                                                                    })
                                                                                                ],
                                                                                                "1": /* constructor */{
                                                                                                  tag: 0,
                                                                                                  name: "::",
                                                                                                  "0": /* tuple */[
                                                                                                    "findIndex",
                                                                                                    (function (param) {
                                                                                                        return /* constructor */{
                                                                                                                tag: 0,
                                                                                                                name: "Eq",
                                                                                                                "0": 1,
                                                                                                                "1": /* array */[
                                                                                                                    1,
                                                                                                                    2,
                                                                                                                    3,
                                                                                                                    4
                                                                                                                  ].findIndex((function (n) {
                                                                                                                        return n % 2 === 0;
                                                                                                                      }))
                                                                                                              };
                                                                                                      })
                                                                                                  ],
                                                                                                  "1": /* constructor */{
                                                                                                    tag: 0,
                                                                                                    name: "::",
                                                                                                    "0": /* tuple */[
                                                                                                      "findIndexi",
                                                                                                      (function (param) {
                                                                                                          return /* constructor */{
                                                                                                                  tag: 0,
                                                                                                                  name: "Eq",
                                                                                                                  "0": 0,
                                                                                                                  "1": /* array */[
                                                                                                                      1,
                                                                                                                      2,
                                                                                                                      3,
                                                                                                                      4
                                                                                                                    ].findIndex((function (param, i) {
                                                                                                                          return i % 2 === 0;
                                                                                                                        }))
                                                                                                                };
                                                                                                        })
                                                                                                    ],
                                                                                                    "1": /* constructor */{
                                                                                                      tag: 0,
                                                                                                      name: "::",
                                                                                                      "0": /* tuple */[
                                                                                                        "forEach",
                                                                                                        (function (param) {
                                                                                                            var sum = /* record */[/* contents */0];
                                                                                                            /* array */[
                                                                                                                1,
                                                                                                                2,
                                                                                                                3
                                                                                                              ].forEach((function (n) {
                                                                                                                    sum[0] = sum[0] + n | 0;
                                                                                                                    return /* () */0;
                                                                                                                  }));
                                                                                                            return /* constructor */{
                                                                                                                    tag: 0,
                                                                                                                    name: "Eq",
                                                                                                                    "0": 6,
                                                                                                                    "1": sum[0]
                                                                                                                  };
                                                                                                          })
                                                                                                      ],
                                                                                                      "1": /* constructor */{
                                                                                                        tag: 0,
                                                                                                        name: "::",
                                                                                                        "0": /* tuple */[
                                                                                                          "forEachi",
                                                                                                          (function (param) {
                                                                                                              var sum = /* record */[/* contents */0];
                                                                                                              /* array */[
                                                                                                                  1,
                                                                                                                  2,
                                                                                                                  3
                                                                                                                ].forEach((function (param, i) {
                                                                                                                      sum[0] = sum[0] + i | 0;
                                                                                                                      return /* () */0;
                                                                                                                    }));
                                                                                                              return /* constructor */{
                                                                                                                      tag: 0,
                                                                                                                      name: "Eq",
                                                                                                                      "0": 3,
                                                                                                                      "1": sum[0]
                                                                                                                    };
                                                                                                            })
                                                                                                        ],
                                                                                                        "1": /* constructor */{
                                                                                                          tag: 0,
                                                                                                          name: "::",
                                                                                                          "0": /* tuple */[
                                                                                                            "map",
                                                                                                            (function (param) {
                                                                                                                return /* constructor */{
                                                                                                                        tag: 0,
                                                                                                                        name: "Eq",
                                                                                                                        "0": /* array */[
                                                                                                                          2,
                                                                                                                          4,
                                                                                                                          6,
                                                                                                                          8
                                                                                                                        ],
                                                                                                                        "1": /* array */[
                                                                                                                            1,
                                                                                                                            2,
                                                                                                                            3,
                                                                                                                            4
                                                                                                                          ].map((function (n) {
                                                                                                                                return (n << 1);
                                                                                                                              }))
                                                                                                                      };
                                                                                                              })
                                                                                                          ],
                                                                                                          "1": /* constructor */{
                                                                                                            tag: 0,
                                                                                                            name: "::",
                                                                                                            "0": /* tuple */[
                                                                                                              "map",
                                                                                                              (function (param) {
                                                                                                                  return /* constructor */{
                                                                                                                          tag: 0,
                                                                                                                          name: "Eq",
                                                                                                                          "0": /* array */[
                                                                                                                            0,
                                                                                                                            2,
                                                                                                                            4,
                                                                                                                            6
                                                                                                                          ],
                                                                                                                          "1": /* array */[
                                                                                                                              1,
                                                                                                                              2,
                                                                                                                              3,
                                                                                                                              4
                                                                                                                            ].map((function (param, i) {
                                                                                                                                  return (i << 1);
                                                                                                                                }))
                                                                                                                        };
                                                                                                                })
                                                                                                            ],
                                                                                                            "1": /* constructor */{
                                                                                                              tag: 0,
                                                                                                              name: "::",
                                                                                                              "0": /* tuple */[
                                                                                                                "reduce",
                                                                                                                (function (param) {
                                                                                                                    return /* constructor */{
                                                                                                                            tag: 0,
                                                                                                                            name: "Eq",
                                                                                                                            "0": -10,
                                                                                                                            "1": /* array */[
                                                                                                                                1,
                                                                                                                                2,
                                                                                                                                3,
                                                                                                                                4
                                                                                                                              ].reduce((function (acc, n) {
                                                                                                                                    return acc - n | 0;
                                                                                                                                  }), 0)
                                                                                                                          };
                                                                                                                  })
                                                                                                              ],
                                                                                                              "1": /* constructor */{
                                                                                                                tag: 0,
                                                                                                                name: "::",
                                                                                                                "0": /* tuple */[
                                                                                                                  "reducei",
                                                                                                                  (function (param) {
                                                                                                                      return /* constructor */{
                                                                                                                              tag: 0,
                                                                                                                              name: "Eq",
                                                                                                                              "0": -6,
                                                                                                                              "1": /* array */[
                                                                                                                                  1,
                                                                                                                                  2,
                                                                                                                                  3,
                                                                                                                                  4
                                                                                                                                ].reduce((function (acc, param, i) {
                                                                                                                                      return acc - i | 0;
                                                                                                                                    }), 0)
                                                                                                                            };
                                                                                                                    })
                                                                                                                ],
                                                                                                                "1": /* constructor */{
                                                                                                                  tag: 0,
                                                                                                                  name: "::",
                                                                                                                  "0": /* tuple */[
                                                                                                                    "reduceRight",
                                                                                                                    (function (param) {
                                                                                                                        return /* constructor */{
                                                                                                                                tag: 0,
                                                                                                                                name: "Eq",
                                                                                                                                "0": -10,
                                                                                                                                "1": /* array */[
                                                                                                                                    1,
                                                                                                                                    2,
                                                                                                                                    3,
                                                                                                                                    4
                                                                                                                                  ].reduceRight((function (acc, n) {
                                                                                                                                        return acc - n | 0;
                                                                                                                                      }), 0)
                                                                                                                              };
                                                                                                                      })
                                                                                                                  ],
                                                                                                                  "1": /* constructor */{
                                                                                                                    tag: 0,
                                                                                                                    name: "::",
                                                                                                                    "0": /* tuple */[
                                                                                                                      "reduceRighti",
                                                                                                                      (function (param) {
                                                                                                                          return /* constructor */{
                                                                                                                                  tag: 0,
                                                                                                                                  name: "Eq",
                                                                                                                                  "0": -6,
                                                                                                                                  "1": /* array */[
                                                                                                                                      1,
                                                                                                                                      2,
                                                                                                                                      3,
                                                                                                                                      4
                                                                                                                                    ].reduceRight((function (acc, param, i) {
                                                                                                                                          return acc - i | 0;
                                                                                                                                        }), 0)
                                                                                                                                };
                                                                                                                        })
                                                                                                                    ],
                                                                                                                    "1": /* constructor */{
                                                                                                                      tag: 0,
                                                                                                                      name: "::",
                                                                                                                      "0": /* tuple */[
                                                                                                                        "some",
                                                                                                                        (function (param) {
                                                                                                                            return /* constructor */{
                                                                                                                                    tag: 0,
                                                                                                                                    name: "Eq",
                                                                                                                                    "0": false,
                                                                                                                                    "1": /* array */[
                                                                                                                                        1,
                                                                                                                                        2,
                                                                                                                                        3,
                                                                                                                                        4
                                                                                                                                      ].some((function (n) {
                                                                                                                                            return n <= 0;
                                                                                                                                          }))
                                                                                                                                  };
                                                                                                                          })
                                                                                                                      ],
                                                                                                                      "1": /* constructor */{
                                                                                                                        tag: 0,
                                                                                                                        name: "::",
                                                                                                                        "0": /* tuple */[
                                                                                                                          "somei",
                                                                                                                          (function (param) {
                                                                                                                              return /* constructor */{
                                                                                                                                      tag: 0,
                                                                                                                                      name: "Eq",
                                                                                                                                      "0": true,
                                                                                                                                      "1": /* array */[
                                                                                                                                          1,
                                                                                                                                          2,
                                                                                                                                          3,
                                                                                                                                          4
                                                                                                                                        ].some((function (param, i) {
                                                                                                                                              return i <= 0;
                                                                                                                                            }))
                                                                                                                                    };
                                                                                                                            })
                                                                                                                        ],
                                                                                                                        "1": /* [] */0
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

Mt.from_pair_suites("Js_array_test", suites);

exports.suites = suites;
/*  Not a pure module */

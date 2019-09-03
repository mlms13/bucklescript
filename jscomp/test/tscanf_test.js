'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Bytes = require("../../lib/js/bytes.js");
var Curry = require("../../lib/js/curry.js");
var Scanf = require("../../lib/js/scanf.js");
var $$Buffer = require("../../lib/js/buffer.js");
var Printf = require("../../lib/js/printf.js");
var $$String = require("../../lib/js/string.js");
var Testing = require("./testing.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Mt_global = require("./mt_global.js");
var Caml_bytes = require("../../lib/js/caml_bytes.js");
var Caml_int64 = require("../../lib/js/caml_int64.js");
var Pervasives = require("../../lib/js/pervasives.js");
var Caml_format = require("../../lib/js/caml_format.js");
var Caml_string = require("../../lib/js/caml_string.js");
var Caml_js_exceptions = require("../../lib/js/caml_js_exceptions.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

var suites = /* record */[/* contents : [] */0];

var test_id = /* record */[/* contents */0];

function eq(f, param) {
  return Mt_global.collect_eq(test_id, suites, f, param[0], param[1]);
}

function test(loc, b) {
  return eq(loc, /* tuple */[
              b,
              true
            ]);
}

function id(x) {
  return x;
}

function test0(param) {
  return ((((Curry._2(Scanf.sscanf("", /* constructor */{
                          tag: 0,
                          name: "Format",
                          length: 2,
                          "0": /* End_of_format */0,
                          "1": ""
                        }), id, 1) + Curry._2(Scanf.sscanf("", /* constructor */{
                          tag: 0,
                          name: "Format",
                          length: 2,
                          "0": /* constructor */{
                            tag: 12,
                            name: "Char_literal",
                            length: 2,
                            "0": /* " " */32,
                            "1": /* End_of_format */0
                          },
                          "1": " "
                        }), id, 2) | 0) + Curry._2(Scanf.sscanf(" ", /* constructor */{
                        tag: 0,
                        name: "Format",
                        length: 2,
                        "0": /* constructor */{
                          tag: 12,
                          name: "Char_literal",
                          length: 2,
                          "0": /* " " */32,
                          "1": /* End_of_format */0
                        },
                        "1": " "
                      }), id, 3) | 0) + Curry._2(Scanf.sscanf("\t", /* constructor */{
                      tag: 0,
                      name: "Format",
                      length: 2,
                      "0": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* End_of_format */0
                      },
                      "1": " "
                    }), id, 4) | 0) + Curry._2(Scanf.sscanf("\n", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* End_of_format */0
                    },
                    "1": " "
                  }), id, 5) | 0) + Curry._1(Scanf.sscanf("\n\t 6", /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_d */0,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* End_of_format */0
                    }
                  },
                  "1": " %d"
                }), id) | 0;
}

test("File \"tscanf_test.ml\", line 42, characters 5-12", test0(/* () */0) === 21);

function test1(param) {
  return (((Curry._1(Scanf.sscanf("1", /* constructor */{
                        tag: 0,
                        name: "Format",
                        length: 2,
                        "0": /* constructor */{
                          tag: 4,
                          name: "Int",
                          length: 4,
                          "0": /* Int_d */0,
                          "1": /* No_padding */0,
                          "2": /* No_precision */0,
                          "3": /* End_of_format */0
                        },
                        "1": "%d"
                      }), id) + Curry._1(Scanf.sscanf(" 2", /* constructor */{
                        tag: 0,
                        name: "Format",
                        length: 2,
                        "0": /* constructor */{
                          tag: 12,
                          name: "Char_literal",
                          length: 2,
                          "0": /* " " */32,
                          "1": /* constructor */{
                            tag: 4,
                            name: "Int",
                            length: 4,
                            "0": /* Int_d */0,
                            "1": /* No_padding */0,
                            "2": /* No_precision */0,
                            "3": /* End_of_format */0
                          }
                        },
                        "1": " %d"
                      }), id) | 0) + Curry._1(Scanf.sscanf(" -2", /* constructor */{
                      tag: 0,
                      name: "Format",
                      length: 2,
                      "0": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* constructor */{
                          tag: 4,
                          name: "Int",
                          length: 4,
                          "0": /* Int_d */0,
                          "1": /* No_padding */0,
                          "2": /* No_precision */0,
                          "3": /* End_of_format */0
                        }
                      },
                      "1": " %d"
                    }), id) | 0) + Curry._1(Scanf.sscanf(" +2", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 4,
                        name: "Int",
                        length: 4,
                        "0": /* Int_d */0,
                        "1": /* No_padding */0,
                        "2": /* No_precision */0,
                        "3": /* End_of_format */0
                      }
                    },
                    "1": " %d"
                  }), id) | 0) + Curry._1(Scanf.sscanf(" 2a ", /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_d */0,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* "a" */97,
                        "1": /* End_of_format */0
                      }
                    }
                  },
                  "1": " %da"
                }), id) | 0;
}

test("File \"tscanf_test.ml\", line 54, characters 5-12", test1(/* () */0) === 5);

function test2(param) {
  return (Curry._1(Scanf.sscanf("123", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_i */3,
                      "1": /* constructor */{
                        tag: 0,
                        name: "Lit_padding",
                        length: 2,
                        "0": /* Right */1,
                        "1": 2
                      },
                      "2": /* No_precision */0,
                      "3": /* End_of_format */0
                    },
                    "1": "%2i"
                  }), id) + Curry._1(Scanf.sscanf("245", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_d */0,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* End_of_format */0
                    },
                    "1": "%d"
                  }), id) | 0) + Curry._1(Scanf.sscanf(" 2a ", /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_d */0,
                      "1": /* constructor */{
                        tag: 0,
                        name: "Lit_padding",
                        length: 2,
                        "0": /* Right */1,
                        "1": 1
                      },
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* "a" */97,
                        "1": /* End_of_format */0
                      }
                    }
                  },
                  "1": " %1da"
                }), id) | 0;
}

test("File \"tscanf_test.ml\", line 63, characters 5-12", test2(/* () */0) === 259);

function test3(param) {
  return ((Curry._1(Scanf.sscanf("0xff", /* constructor */{
                      tag: 0,
                      name: "Format",
                      length: 2,
                      "0": /* constructor */{
                        tag: 4,
                        name: "Int",
                        length: 4,
                        "0": /* Int_i */3,
                        "1": /* constructor */{
                          tag: 0,
                          name: "Lit_padding",
                          length: 2,
                          "0": /* Right */1,
                          "1": 3
                        },
                        "2": /* No_precision */0,
                        "3": /* End_of_format */0
                      },
                      "1": "%3i"
                    }), id) + Curry._1(Scanf.sscanf("0XEF", /* constructor */{
                      tag: 0,
                      name: "Format",
                      length: 2,
                      "0": /* constructor */{
                        tag: 4,
                        name: "Int",
                        length: 4,
                        "0": /* Int_i */3,
                        "1": /* constructor */{
                          tag: 0,
                          name: "Lit_padding",
                          length: 2,
                          "0": /* Right */1,
                          "1": 3
                        },
                        "2": /* No_precision */0,
                        "3": /* End_of_format */0
                      },
                      "1": "%3i"
                    }), id) | 0) + Curry._1(Scanf.sscanf("x=-245", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 11,
                      name: "String_literal",
                      length: 2,
                      "0": " x = ",
                      "1": /* constructor */{
                        tag: 4,
                        name: "Int",
                        length: 4,
                        "0": /* Int_d */0,
                        "1": /* No_padding */0,
                        "2": /* No_precision */0,
                        "3": /* End_of_format */0
                      }
                    },
                    "1": " x = %d"
                  }), id) | 0) + Curry._1(Scanf.sscanf(" 2a ", /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_d */0,
                      "1": /* constructor */{
                        tag: 0,
                        name: "Lit_padding",
                        length: 2,
                        "0": /* Right */1,
                        "1": 1
                      },
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* "a" */97,
                        "1": /* End_of_format */0
                      }
                    }
                  },
                  "1": " %1da"
                }), id) | 0;
}

test("File \"tscanf_test.ml\", line 73, characters 5-12", test3(/* () */0) === -214);

function test4(param) {
  if (Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("1"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%f"
            }), (function (b0) {
            return b0 === 1.0;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("-1"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%f"
            }), (function (b0) {
            return b0 === -1.0;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("+1"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%f"
            }), (function (b0) {
            return b0 === 1.0;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("1."), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%f"
            }), (function (b0) {
            return b0 === 1.0;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string(".1"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%f"
            }), (function (b0) {
            return b0 === 0.1;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("-.1"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%f"
            }), (function (b0) {
            return b0 === -0.1;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("+.1"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%f"
            }), (function (b0) {
            return b0 === 0.1;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("+1."), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%f"
            }), (function (b0) {
            return b0 === 1.0;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("-1."), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%f"
            }), (function (b0) {
            return b0 === -1.0;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("0 1. 1.3"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* " " */32,
                  "1": /* constructor */{
                    tag: 8,
                    name: "Float",
                    length: 4,
                    "0": /* Float_f */0,
                    "1": /* No_padding */0,
                    "2": /* No_precision */0,
                    "3": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 8,
                        name: "Float",
                        length: 4,
                        "0": /* Float_f */0,
                        "1": /* No_padding */0,
                        "2": /* No_precision */0,
                        "3": /* End_of_format */0
                      }
                    }
                  }
                }
              },
              "1": "%f %f %f"
            }), (function (b0, b1, b2) {
            return b0 === 0.0 && b1 === 1.0 ? b2 === 1.3 : false;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("0.113"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* constructor */{
                  tag: 0,
                  name: "Lit_padding",
                  length: 2,
                  "0": /* Right */1,
                  "1": 4
                },
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%4f"
            }), (function (b0) {
            return b0 === 0.11;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("0.113"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* constructor */{
                  tag: 0,
                  name: "Lit_padding",
                  length: 2,
                  "0": /* Right */1,
                  "1": 5
                },
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%5f"
            }), (function (b0) {
            return b0 === 0.113;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("000.113"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* constructor */{
                  tag: 0,
                  name: "Lit_padding",
                  length: 2,
                  "0": /* Right */1,
                  "1": 15
                },
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%15f"
            }), (function (b0) {
            return b0 === 0.113;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("+000.113"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* constructor */{
                  tag: 0,
                  name: "Lit_padding",
                  length: 2,
                  "0": /* Right */1,
                  "1": 15
                },
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%15f"
            }), (function (b0) {
            return b0 === 0.113;
          }))) {
    return Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("-000.113"), /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 8,
                      name: "Float",
                      length: 4,
                      "0": /* Float_f */0,
                      "1": /* constructor */{
                        tag: 0,
                        name: "Lit_padding",
                        length: 2,
                        "0": /* Right */1,
                        "1": 15
                      },
                      "2": /* No_precision */0,
                      "3": /* End_of_format */0
                    },
                    "1": "%15f"
                  }), (function (b0) {
                  return b0 === -0.113;
                }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 110, characters 5-12", test4(/* () */0));

function test5(param) {
  if (Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("1e1"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_e */3,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%e"
            }), (function (b) {
            return b === 10.0;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("1e+1"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_e */3,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%e"
            }), (function (b) {
            return b === 10.0;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("10e-1"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_e */3,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%e"
            }), (function (b) {
            return b === 1.0;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("10.e-1"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_e */3,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%e"
            }), (function (b) {
            return b === 1.0;
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("1e1 1.e+1 1.3e-1"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_e */3,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* " " */32,
                  "1": /* constructor */{
                    tag: 8,
                    name: "Float",
                    length: 4,
                    "0": /* Float_e */3,
                    "1": /* No_padding */0,
                    "2": /* No_precision */0,
                    "3": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 8,
                        name: "Float",
                        length: 4,
                        "0": /* Float_e */3,
                        "1": /* No_padding */0,
                        "2": /* No_precision */0,
                        "3": /* End_of_format */0
                      }
                    }
                  }
                }
              },
              "1": "%e %e %e"
            }), (function (b1, b2, b3) {
            return b1 === 10.0 && b2 === b1 ? b3 === 0.13 : false;
          }))) {
    return Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("1 1.1 0e+1 1.3e-1"), /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 8,
                      name: "Float",
                      length: 4,
                      "0": /* Float_g */9,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* constructor */{
                          tag: 8,
                          name: "Float",
                          length: 4,
                          "0": /* Float_g */9,
                          "1": /* No_padding */0,
                          "2": /* No_precision */0,
                          "3": /* constructor */{
                            tag: 12,
                            name: "Char_literal",
                            length: 2,
                            "0": /* " " */32,
                            "1": /* constructor */{
                              tag: 8,
                              name: "Float",
                              length: 4,
                              "0": /* Float_g */9,
                              "1": /* No_padding */0,
                              "2": /* No_precision */0,
                              "3": /* constructor */{
                                tag: 12,
                                name: "Char_literal",
                                length: 2,
                                "0": /* " " */32,
                                "1": /* constructor */{
                                  tag: 8,
                                  name: "Float",
                                  length: 4,
                                  "0": /* Float_g */9,
                                  "1": /* No_padding */0,
                                  "2": /* No_precision */0,
                                  "3": /* End_of_format */0
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": "%g %g %g %g"
                  }), (function (b1, b2, b3, b4) {
                  if (b1 === 1.0 && b2 === 1.1 && b3 === 0.0) {
                    return b4 === 0.13;
                  } else {
                    return false;
                  }
                }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 133, characters 5-12", test5(/* () */0));

function test6(param) {
  if (Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("truetrue"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 9,
                name: "Bool",
                length: 1,
                "0": /* constructor */{
                  tag: 9,
                  name: "Bool",
                  length: 1,
                  "0": /* End_of_format */0
                }
              },
              "1": "%B%B"
            }), (function (b1, b2) {
            return Caml_obj.caml_equal(/* tuple */[
                        b1,
                        b2
                      ], /* tuple */[
                        true,
                        true
                      ]);
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("truefalse"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 9,
                name: "Bool",
                length: 1,
                "0": /* constructor */{
                  tag: 9,
                  name: "Bool",
                  length: 1,
                  "0": /* End_of_format */0
                }
              },
              "1": "%B%B"
            }), (function (b1, b2) {
            return Caml_obj.caml_equal(/* tuple */[
                        b1,
                        b2
                      ], /* tuple */[
                        true,
                        false
                      ]);
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("falsetrue"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 9,
                name: "Bool",
                length: 1,
                "0": /* constructor */{
                  tag: 9,
                  name: "Bool",
                  length: 1,
                  "0": /* End_of_format */0
                }
              },
              "1": "%B%B"
            }), (function (b1, b2) {
            return Caml_obj.caml_equal(/* tuple */[
                        b1,
                        b2
                      ], /* tuple */[
                        false,
                        true
                      ]);
          })) && Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("falsefalse"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 9,
                name: "Bool",
                length: 1,
                "0": /* constructor */{
                  tag: 9,
                  name: "Bool",
                  length: 1,
                  "0": /* End_of_format */0
                }
              },
              "1": "%B%B"
            }), (function (b1, b2) {
            return Caml_obj.caml_equal(/* tuple */[
                        b1,
                        b2
                      ], /* tuple */[
                        false,
                        false
                      ]);
          }))) {
    return Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("true false"), /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 9,
                      name: "Bool",
                      length: 1,
                      "0": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* constructor */{
                          tag: 9,
                          name: "Bool",
                          length: 1,
                          "0": /* End_of_format */0
                        }
                      }
                    },
                    "1": "%B %B"
                  }), (function (b1, b2) {
                  return Caml_obj.caml_equal(/* tuple */[
                              b1,
                              b2
                            ], /* tuple */[
                              true,
                              false
                            ]);
                }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 150, characters 5-12", test6(/* () */0));

function test7(param) {
  if (Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("'a' '\n' '\t' '\0' ' '"), /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 1,
                name: "Caml_char",
                length: 1,
                "0": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* " " */32,
                  "1": /* constructor */{
                    tag: 1,
                    name: "Caml_char",
                    length: 1,
                    "0": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 1,
                        name: "Caml_char",
                        length: 1,
                        "0": /* constructor */{
                          tag: 12,
                          name: "Char_literal",
                          length: 2,
                          "0": /* " " */32,
                          "1": /* constructor */{
                            tag: 1,
                            name: "Caml_char",
                            length: 1,
                            "0": /* constructor */{
                              tag: 12,
                              name: "Char_literal",
                              length: 2,
                              "0": /* " " */32,
                              "1": /* constructor */{
                                tag: 1,
                                name: "Caml_char",
                                length: 1,
                                "0": /* End_of_format */0
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "1": "%C %C %C %C %C"
            }), (function (c1, c2, c3, c4, c5) {
            return c1 === /* "a" */97 && c2 === /* "\n" */10 && c3 === /* "\t" */9 && c4 === /* "\000" */0 ? c5 === /* " " */32 : false;
          }))) {
    return Curry._1(Scanf.bscanf(Scanf.Scanning.from_string("a \n \t \0  b"), /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 0,
                      name: "Char",
                      length: 1,
                      "0": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* constructor */{
                          tag: 0,
                          name: "Char",
                          length: 1,
                          "0": /* constructor */{
                            tag: 12,
                            name: "Char_literal",
                            length: 2,
                            "0": /* " " */32,
                            "1": /* constructor */{
                              tag: 0,
                              name: "Char",
                              length: 1,
                              "0": /* constructor */{
                                tag: 12,
                                name: "Char_literal",
                                length: 2,
                                "0": /* " " */32,
                                "1": /* End_of_format */0
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": "%c %c %c "
                  }), (function (c1, c2, c3) {
                  if (c1 === /* "a" */97 && c2 === /* "\000" */0) {
                    return c3 === /* "b" */98;
                  } else {
                    return false;
                  }
                }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 168, characters 5-12", test7(/* () */0));

function verify_read(c) {
  var s = Curry._1(Printf.sprintf(/* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 1,
              name: "Caml_char",
              length: 1,
              "0": /* End_of_format */0
            },
            "1": "%C"
          }), c);
  var ib = Scanf.Scanning.from_string(s);
  if (Curry._1(Scanf.bscanf(ib, /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 1,
                name: "Caml_char",
                length: 1,
                "0": /* End_of_format */0
              },
              "1": "%C"
            }), id) === c) {
    return 0;
  } else {
    throw [
          Caml_builtin_exceptions.assert_failure,
          /* tuple */[
            "tscanf_test.ml",
            174,
            2
          ]
        ];
  }
}

function verify_scan_Chars(param) {
  for(var i = 0; i <= 255; ++i){
    verify_read(Pervasives.char_of_int(i));
  }
  return /* () */0;
}

function test8(param) {
  return verify_scan_Chars(/* () */0) === /* () */0;
}

test("File \"tscanf_test.ml\", line 183, characters 5-12", verify_scan_Chars(/* () */0) === /* () */0);

function unit(fmt, s) {
  var ib = Scanf.Scanning.from_string(Curry._1(Printf.sprintf(/* constructor */{
                tag: 0,
                name: "Format",
                length: 2,
                "0": /* constructor */{
                  tag: 3,
                  name: "Caml_string",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* End_of_format */0
                },
                "1": "%S"
              }), s));
  return Curry._1(Scanf.bscanf(ib, fmt), id);
}

function test_fmt(fmt, s) {
  return unit(fmt, s) === s;
}

var test9_string = "\xef\xbb\xbf";

var partial_arg = /* constructor */{
  tag: 0,
  name: "Format",
  length: 2,
  "0": /* constructor */{
    tag: 3,
    name: "Caml_string",
    length: 2,
    "0": /* No_padding */0,
    "1": /* End_of_format */0
  },
  "1": "%S"
};

function test_S(param) {
  return test_fmt(partial_arg, param);
}

function test9(param) {
  if (test_S("poi") && test_S("a\"b") && test_S("a\nb") && test_S("a\nb") && test_S("a\\\nb \\\nc\n\\\nb") && test_S("a\\\n\\\n\\\nb \\\nc\n\\\nb") && test_S("\xef") && test_S("\\xef") && Curry._1(Scanf.sscanf("\"\\xef\"", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 3,
                name: "Caml_string",
                length: 2,
                "0": /* No_padding */0,
                "1": /* End_of_format */0
              },
              "1": "%S"
            }), (function (s) {
            return s;
          })) === "\xef" && Curry._1(Scanf.sscanf("\"\\xef\\xbb\\xbf\"", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 3,
                name: "Caml_string",
                length: 2,
                "0": /* No_padding */0,
                "1": /* End_of_format */0
              },
              "1": "%S"
            }), (function (s) {
            return s;
          })) === test9_string && Curry._1(Scanf.sscanf("\"\\xef\\xbb\\xbf\"", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 3,
                name: "Caml_string",
                length: 2,
                "0": /* No_padding */0,
                "1": /* End_of_format */0
              },
              "1": "%S"
            }), (function (s) {
            return s;
          })) === "\xef\xbb\xbf" && Curry._1(Scanf.sscanf("\"\xef\xbb\xbf\"", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 3,
                name: "Caml_string",
                length: 2,
                "0": /* No_padding */0,
                "1": /* End_of_format */0
              },
              "1": "%S"
            }), (function (s) {
            return s;
          })) === test9_string && Curry._1(Scanf.sscanf("\"\\\\xef\\\\xbb\\\\xbf\"", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 3,
                name: "Caml_string",
                length: 2,
                "0": /* No_padding */0,
                "1": /* End_of_format */0
              },
              "1": "%S"
            }), (function (s) {
            return s;
          })) === "\\xef\\xbb\\xbf") {
    return Curry._1(Scanf.sscanf("\" \"", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 3,
                      name: "Caml_string",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* End_of_format */0
                    },
                    "1": "%S"
                  }), (function (s) {
                  return s;
                })) === " ";
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 230, characters 5-12", test9(/* () */0));

function test10(param) {
  var unit = function (s) {
    var ib = Scanf.Scanning.from_string(s);
    return Curry._1(Scanf.bscanf(ib, /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 3,
                      name: "Caml_string",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* End_of_format */0
                    },
                    "1": "%S"
                  }), id);
  };
  var res = Curry._1(Scanf.sscanf("Une chaine: \"celle-ci\" et \"celle-la\"!", /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 2,
              name: "String",
              length: 2,
              "0": /* No_padding */0,
              "1": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 3,
                      name: "Caml_string",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* constructor */{
                          tag: 2,
                          name: "String",
                          length: 2,
                          "0": /* No_padding */0,
                          "1": /* constructor */{
                            tag: 12,
                            name: "Char_literal",
                            length: 2,
                            "0": /* " " */32,
                            "1": /* constructor */{
                              tag: 3,
                              name: "Caml_string",
                              length: 2,
                              "0": /* No_padding */0,
                              "1": /* constructor */{
                                tag: 12,
                                name: "Char_literal",
                                length: 2,
                                "0": /* " " */32,
                                "1": /* constructor */{
                                  tag: 2,
                                  name: "String",
                                  length: 2,
                                  "0": /* No_padding */0,
                                  "1": /* End_of_format */0
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
            },
            "1": "%s %s %S %s %S %s"
          }), (function (s1, s2, s3, s4, s5, s6) {
          return s1 + (s2 + (s3 + (s4 + (s5 + s6))));
        }));
  if (res === "Unechaine:celle-cietcelle-la!" && unit("\"a\\\n  b\"") === "ab" && unit("\"\\\n  ab\"") === "ab" && unit("\"\n\\\n  ab\"") === "\nab" && unit("\"\n\\\n  a\nb\"") === "\na\nb" && unit("\"\n\\\n  \\\n  a\nb\"") === "\na\nb" && unit("\"\n\\\n  a\n\\\nb\\\n\"") === "\na\nb") {
    return unit("\"a\\\n  \"") === "a";
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 254, characters 5-12", test10(/* () */0));

function test11(param) {
  if (Curry._1(Scanf.sscanf("Pierre\tWeis\t70", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* " " */32,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 2,
                        name: "String",
                        length: 2,
                        "0": /* No_padding */0,
                        "1": /* End_of_format */0
                      }
                    }
                  }
                }
              },
              "1": "%s %s %s"
            }), (function (prenom, nom, poids) {
            return prenom === "Pierre" && nom === "Weis" ? Caml_format.caml_int_of_string(poids) === 70 : false;
          })) && Curry._1(Scanf.sscanf("Jean-Luc\tde Leage\t68", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\xff\xfd\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
                "2": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* " " */32,
                  "1": /* constructor */{
                    tag: 20,
                    name: "Scan_char_set",
                    length: 3,
                    "0": undefined,
                    "1": "\xff\xfd\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
                    "2": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 4,
                        name: "Int",
                        length: 4,
                        "0": /* Int_d */0,
                        "1": /* No_padding */0,
                        "2": /* No_precision */0,
                        "3": /* End_of_format */0
                      }
                    }
                  }
                }
              },
              "1": "%[^\t] %[^\t] %d"
            }), (function (prenom, nom, poids) {
            return prenom === "Jean-Luc" && nom === "de Leage" ? poids === 68 : false;
          }))) {
    return Curry._1(Scanf.sscanf("Daniel\tde Rauglaudre\t66", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* constructor */{
                        tag: 17,
                        name: "Formatting_lit",
                        length: 2,
                        "0": /* constructor */{
                          tag: 2,
                          name: "Scan_indic",
                          length: 1,
                          "0": /* "\t" */9
                        },
                        "1": /* constructor */{
                          tag: 12,
                          name: "Char_literal",
                          length: 2,
                          "0": /* " " */32,
                          "1": /* constructor */{
                            tag: 2,
                            name: "String",
                            length: 2,
                            "0": /* No_padding */0,
                            "1": /* constructor */{
                              tag: 17,
                              name: "Formatting_lit",
                              length: 2,
                              "0": /* constructor */{
                                tag: 2,
                                name: "Scan_indic",
                                length: 1,
                                "0": /* "\t" */9
                              },
                              "1": /* constructor */{
                                tag: 12,
                                name: "Char_literal",
                                length: 2,
                                "0": /* " " */32,
                                "1": /* constructor */{
                                  tag: 4,
                                  name: "Int",
                                  length: 4,
                                  "0": /* Int_d */0,
                                  "1": /* No_padding */0,
                                  "2": /* No_precision */0,
                                  "3": /* End_of_format */0
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": "%s@\t %s@\t %d"
                  }), (function (prenom, nom, poids) {
                  if (prenom === "Daniel" && nom === "de Rauglaudre") {
                    return poids === 66;
                  } else {
                    return false;
                  }
                }));
  } else {
    return false;
  }
}

function test110(param) {
  if (Curry._2(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* End_of_format */0
              },
              "1": " "
            }), (function (x) {
            return x;
          }), "") === "" && Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* End_of_format */0
              },
              "1": "%s"
            }), (function (x) {
            return x === "";
          })) && Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* End_of_format */0
                }
              },
              "1": "%s%s"
            }), (function (x, y) {
            return x === "" ? y === "" : false;
          })) && Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* " " */32,
                  "1": /* End_of_format */0
                }
              },
              "1": "%s "
            }), (function (x) {
            return x === "";
          })) && Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* End_of_format */0
                }
              },
              "1": " %s"
            }), (function (x) {
            return x === "";
          })) && Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": " %s "
            }), (function (x) {
            return x === "";
          })) && Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\xff\xfb\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
                "2": /* End_of_format */0
              },
              "1": "%[^\n]"
            }), (function (x) {
            return x === "";
          })) && Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\xff\xfb\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
                "2": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* " " */32,
                  "1": /* End_of_format */0
                }
              },
              "1": "%[^\n] "
            }), (function (x) {
            return x === "";
          })) && Curry._1(Scanf.sscanf(" ", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* End_of_format */0
              },
              "1": "%s"
            }), (function (x) {
            return x === "";
          })) && Curry._1(Scanf.sscanf(" ", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* End_of_format */0
                }
              },
              "1": "%s%s"
            }), (function (x, y) {
            return x === "" ? y === "" : false;
          })) && Curry._1(Scanf.sscanf(" ", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": " %s "
            }), (function (x) {
            return x === "";
          })) && Curry._1(Scanf.sscanf(" ", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* End_of_format */0
                    }
                  }
                }
              },
              "1": " %s %s"
            }), (function (x, y) {
            return x === "" ? x === y : false;
          })) && Curry._1(Scanf.sscanf(" ", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 17,
                    name: "Formatting_lit",
                    length: 2,
                    "0": /* constructor */{
                      tag: 0,
                      name: "Break",
                      length: 3,
                      "0": "@ ",
                      "1": 1,
                      "2": 0
                    },
                    "1": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* End_of_format */0
                    }
                  }
                }
              },
              "1": " %s@ %s"
            }), (function (x, y) {
            return x === "" ? x === y : false;
          })) && Curry._1(Scanf.sscanf(" poi !", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 17,
                    name: "Formatting_lit",
                    length: 2,
                    "0": /* constructor */{
                      tag: 0,
                      name: "Break",
                      length: 3,
                      "0": "@ ",
                      "1": 1,
                      "2": 0
                    },
                    "1": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* constructor */{
                        tag: 17,
                        name: "Formatting_lit",
                        length: 2,
                        "0": /* Flush_newline */4,
                        "1": /* End_of_format */0
                      }
                    }
                  }
                }
              },
              "1": " %s@ %s@."
            }), (function (x, y) {
            return x === "poi" ? y === "!" : false;
          }))) {
    return Curry._1(Scanf.sscanf(" poi !", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* constructor */{
                        tag: 17,
                        name: "Formatting_lit",
                        length: 2,
                        "0": /* constructor */{
                          tag: 0,
                          name: "Break",
                          length: 3,
                          "0": "@ ",
                          "1": 1,
                          "2": 0
                        },
                        "1": /* constructor */{
                          tag: 2,
                          name: "String",
                          length: 2,
                          "0": /* No_padding */0,
                          "1": /* constructor */{
                            tag: 17,
                            name: "Formatting_lit",
                            length: 2,
                            "0": /* Flush_newline */4,
                            "1": /* End_of_format */0
                          }
                        }
                      }
                    },
                    "1": "%s@ %s@."
                  }), (function (x, y) {
                  if (x === "") {
                    return y === "poi !";
                  } else {
                    return false;
                  }
                }));
  } else {
    return false;
  }
}

function test111(param) {
  return Curry._1(Scanf.sscanf("", /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 20,
                    name: "Scan_char_set",
                    length: 3,
                    "0": undefined,
                    "1": "\xff\xfb\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
                    "2": /* constructor */{
                      tag: 17,
                      name: "Formatting_lit",
                      length: 2,
                      "0": /* Force_newline */3,
                      "1": /* End_of_format */0
                    }
                  },
                  "1": "%[^\n]@\n"
                }), (function (x) {
                return x === "";
              }));
}

test("File \"tscanf_test.ml\", line 293, characters 5-12", test11(/* () */0) && test110(/* () */0) && test111(/* () */0));

function ib(param) {
  return Scanf.Scanning.from_string("[1;2;3;4; ]");
}

function f(ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": " [",
              "1": /* End_of_format */0
            },
            "1": " ["
          }), /* () */0);
  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_i */3,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* ";" */59,
                        "1": /* End_of_format */0
                      }
                    }
                  },
                  "1": " %i;"
                }), (function (i) {
                return Curry._1(Scanf.bscanf(ib, /* constructor */{
                                tag: 0,
                                name: "Format",
                                length: 2,
                                "0": /* constructor */{
                                  tag: 12,
                                  name: "Char_literal",
                                  length: 2,
                                  "0": /* " " */32,
                                  "1": /* constructor */{
                                    tag: 4,
                                    name: "Int",
                                    length: 4,
                                    "0": /* Int_i */3,
                                    "1": /* No_padding */0,
                                    "2": /* No_precision */0,
                                    "3": /* constructor */{
                                      tag: 12,
                                      name: "Char_literal",
                                      length: 2,
                                      "0": /* ";" */59,
                                      "1": /* End_of_format */0
                                    }
                                  }
                                },
                                "1": " %i;"
                              }), (function (j) {
                              return Curry._1(Scanf.bscanf(ib, /* constructor */{
                                              tag: 0,
                                              name: "Format",
                                              length: 2,
                                              "0": /* constructor */{
                                                tag: 12,
                                                name: "Char_literal",
                                                length: 2,
                                                "0": /* " " */32,
                                                "1": /* constructor */{
                                                  tag: 4,
                                                  name: "Int",
                                                  length: 4,
                                                  "0": /* Int_i */3,
                                                  "1": /* No_padding */0,
                                                  "2": /* No_precision */0,
                                                  "3": /* constructor */{
                                                    tag: 12,
                                                    name: "Char_literal",
                                                    length: 2,
                                                    "0": /* ";" */59,
                                                    "1": /* End_of_format */0
                                                  }
                                                }
                                              },
                                              "1": " %i;"
                                            }), (function (k) {
                                            return Curry._1(Scanf.bscanf(ib, /* constructor */{
                                                            tag: 0,
                                                            name: "Format",
                                                            length: 2,
                                                            "0": /* constructor */{
                                                              tag: 12,
                                                              name: "Char_literal",
                                                              length: 2,
                                                              "0": /* " " */32,
                                                              "1": /* constructor */{
                                                                tag: 4,
                                                                name: "Int",
                                                                length: 4,
                                                                "0": /* Int_i */3,
                                                                "1": /* No_padding */0,
                                                                "2": /* No_precision */0,
                                                                "3": /* constructor */{
                                                                  tag: 12,
                                                                  name: "Char_literal",
                                                                  length: 2,
                                                                  "0": /* ";" */59,
                                                                  "1": /* End_of_format */0
                                                                }
                                                              }
                                                            },
                                                            "1": " %i;"
                                                          }), (function (l) {
                                                          Curry._1(Scanf.bscanf(ib, /* constructor */{
                                                                    tag: 0,
                                                                    name: "Format",
                                                                    length: 2,
                                                                    "0": /* constructor */{
                                                                      tag: 11,
                                                                      name: "String_literal",
                                                                      length: 2,
                                                                      "0": " ]",
                                                                      "1": /* End_of_format */0
                                                                    },
                                                                    "1": " ]"
                                                                  }), /* () */0);
                                                          return /* constructor */{
                                                                  tag: 0,
                                                                  name: "::",
                                                                  length: 2,
                                                                  "0": i,
                                                                  "1": /* constructor */{
                                                                    tag: 0,
                                                                    name: "::",
                                                                    length: 2,
                                                                    "0": j,
                                                                    "1": /* constructor */{
                                                                      tag: 0,
                                                                      name: "::",
                                                                      length: 2,
                                                                      "0": k,
                                                                      "1": /* constructor */{
                                                                        tag: 0,
                                                                        name: "::",
                                                                        length: 2,
                                                                        "0": l,
                                                                        "1": /* [] */0
                                                                      }
                                                                    }
                                                                  }
                                                                };
                                                        }));
                                          }));
                            }));
              }));
}

function test12(param) {
  return Caml_obj.caml_equal(f(Scanf.Scanning.from_string("[1;2;3;4; ]")), /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 1,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 2,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 3,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 4,
                    "1": /* [] */0
                  }
                }
              }
            });
}

test("File \"tscanf_test.ml\", line 311, characters 5-12", test12(/* () */0));

function scan_elems(ib, accu) {
  try {
    return Curry._1(Scanf.bscanf(ib, /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 4,
                        name: "Int",
                        length: 4,
                        "0": /* Int_i */3,
                        "1": /* No_padding */0,
                        "2": /* No_precision */0,
                        "3": /* constructor */{
                          tag: 12,
                          name: "Char_literal",
                          length: 2,
                          "0": /* ";" */59,
                          "1": /* End_of_format */0
                        }
                      }
                    },
                    "1": " %i;"
                  }), (function (i) {
                  return scan_elems(ib, /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": i,
                              "1": accu
                            });
                }));
  }
  catch (exn){
    return accu;
  }
}

function g(ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "[ ",
              "1": /* End_of_format */0
            },
            "1": "[ "
          }), /* () */0);
  return List.rev(scan_elems(ib, /* [] */0));
}

function test13(param) {
  return Caml_obj.caml_equal(g(Scanf.Scanning.from_string("[1;2;3;4; ]")), /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 1,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 2,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 3,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 4,
                    "1": /* [] */0
                  }
                }
              }
            });
}

test("File \"tscanf_test.ml\", line 324, characters 5-12", test13(/* () */0));

function scan_int_list(ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "[ ",
              "1": /* End_of_format */0
            },
            "1": "[ "
          }), /* () */0);
  var accu = scan_elems(ib, /* [] */0);
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": " ]",
              "1": /* End_of_format */0
            },
            "1": " ]"
          }), /* () */0);
  return List.rev(accu);
}

function test14(param) {
  return Caml_obj.caml_equal(scan_int_list(Scanf.Scanning.from_string("[1;2;3;4; ]")), /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 1,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 2,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 3,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 4,
                    "1": /* [] */0
                  }
                }
              }
            });
}

test("File \"tscanf_test.ml\", line 337, characters 5-12", test14(/* () */0));

function scan_elems$1(ib, accu) {
  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_i */3,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* constructor */{
                          tag: 0,
                          name: "Char",
                          length: 1,
                          "0": /* End_of_format */0
                        }
                      }
                    }
                  },
                  "1": " %i %c"
                }), (function (i, c) {
                if (c !== 59) {
                  if (c !== 93) {
                    throw [
                          Caml_builtin_exceptions.failure,
                          "scan_elems"
                        ];
                  }
                  return List.rev(/* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": i,
                              "1": accu
                            });
                } else {
                  return scan_elems$1(ib, /* constructor */{
                              tag: 0,
                              name: "::",
                              length: 2,
                              "0": i,
                              "1": accu
                            });
                }
              }));
}

function scan_int_list$1(ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "[ ",
              "1": /* End_of_format */0
            },
            "1": "[ "
          }), /* () */0);
  return scan_elems$1(ib, /* [] */0);
}

function test15(param) {
  return Caml_obj.caml_equal(scan_int_list$1(Scanf.Scanning.from_string("[1;2;3;4]")), /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 1,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 2,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 3,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 4,
                    "1": /* [] */0
                  }
                }
              }
            });
}

test("File \"tscanf_test.ml\", line 357, characters 5-12", test15(/* () */0));

function scan_elems$2(ib, accu) {
  try {
    return Curry._1(Scanf.bscanf(ib, /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 0,
                      name: "Char",
                      length: 1,
                      "0": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* constructor */{
                          tag: 4,
                          name: "Int",
                          length: 4,
                          "0": /* Int_i */3,
                          "1": /* No_padding */0,
                          "2": /* No_precision */0,
                          "3": /* End_of_format */0
                        }
                      }
                    },
                    "1": "%c %i"
                  }), (function (c, i) {
                  if (c >= 91) {
                    if (c < 94) {
                      switch (c - 91 | 0) {
                        case 0 :
                            if (accu === /* [] */0) {
                              return scan_elems$2(ib, /* constructor */{
                                          tag: 0,
                                          name: "::",
                                          length: 2,
                                          "0": i,
                                          "1": accu
                                        });
                            }
                            break;
                        case 1 :
                            break;
                        case 2 :
                            return List.rev(/* constructor */{
                                        tag: 0,
                                        name: "::",
                                        length: 2,
                                        "0": i,
                                        "1": accu
                                      });
                        
                      }
                    }
                    
                  } else if (c === 59) {
                    return scan_elems$2(ib, /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": i,
                                "1": accu
                              });
                  }
                  console.log(Caml_bytes.bytes_to_string(Bytes.make(1, c)));
                  throw [
                        Caml_builtin_exceptions.failure,
                        "scan_elems"
                      ];
                }));
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Scanf.Scan_failure) {
      Curry._1(Scanf.bscanf(ib, /* constructor */{
                tag: 0,
                name: "Format",
                length: 2,
                "0": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "]" */93,
                  "1": /* End_of_format */0
                },
                "1": "]"
              }), /* () */0);
      return accu;
    } else if (exn === Caml_builtin_exceptions.end_of_file) {
      return accu;
    } else {
      throw exn;
    }
  }
}

function test16(param) {
  if (Caml_obj.caml_equal(scan_elems$2(Scanf.Scanning.from_string("[]"), /* [] */0), List.rev(/* [] */0)) && Caml_obj.caml_equal(scan_elems$2(Scanf.Scanning.from_string("[1;2;3;4]"), /* [] */0), List.rev(/* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 1,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 2,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 3,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 4,
                    "1": /* [] */0
                  }
                }
              }
            })) && Caml_obj.caml_equal(scan_elems$2(Scanf.Scanning.from_string("[1;2;3;4; ]"), /* [] */0), List.rev(/* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 1,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 2,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 3,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 4,
                    "1": /* [] */0
                  }
                }
              }
            }))) {
    return Caml_obj.caml_equal(scan_elems$2(Scanf.Scanning.from_string("[1;2;3;4"), /* [] */0), List.rev(/* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 1,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 2,
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": 3,
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": 4,
                          "1": /* [] */0
                        }
                      }
                    }
                  }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 383, characters 5-12", test16(/* () */0));

function scan_elems$3(ib, accu) {
  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_i */3,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 20,
                        name: "Scan_char_set",
                        length: 3,
                        "0": undefined,
                        "1": "\0&\0\0\x01\0\0\b\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                        "2": /* End_of_format */0
                      }
                    }
                  },
                  "1": " %i%[]; \t\n\r]"
                }), (function (i, s) {
                switch (s) {
                  case ";" :
                      return scan_elems$3(ib, /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": i,
                                  "1": accu
                                });
                  case "]" :
                      return List.rev(/* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": i,
                                  "1": accu
                                });
                  default:
                    return List.rev(/* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": i,
                                "1": accu
                              });
                }
              }));
}

function scan_int_list$2(ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": " [",
              "1": /* End_of_format */0
            },
            "1": " ["
          }), /* () */0);
  return scan_elems$3(ib, /* [] */0);
}

function test17(param) {
  if (Caml_obj.caml_equal(scan_int_list$2(Scanf.Scanning.from_string("[1;2;3;4]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": 2,
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 3,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 4,
                "1": /* [] */0
              }
            }
          }
        }) && Caml_obj.caml_equal(scan_int_list$2(Scanf.Scanning.from_string("[1;2;3;4; ]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": 2,
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 3,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 4,
                "1": /* [] */0
              }
            }
          }
        })) {
    return Caml_obj.caml_equal(scan_int_list$2(Scanf.Scanning.from_string("[1;2;3;4 5]")), /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 1,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 2,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 3,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 4,
                      "1": /* [] */0
                    }
                  }
                }
              });
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 406, characters 5-12", test17(/* () */0));

function scan_rest(ib, accu) {
  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 0,
                      name: "Char",
                      length: 1,
                      "0": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* End_of_format */0
                      }
                    }
                  },
                  "1": " %c "
                }), (function (c) {
                if (c !== 59) {
                  if (c !== 93) {
                    throw [
                          Caml_builtin_exceptions.failure,
                          "scan_rest"
                        ];
                  }
                  return accu;
                } else {
                  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                                  tag: 0,
                                  name: "Format",
                                  length: 2,
                                  "0": /* constructor */{
                                    tag: 20,
                                    name: "Scan_char_set",
                                    length: 3,
                                    "0": undefined,
                                    "1": "\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                                    "2": /* End_of_format */0
                                  },
                                  "1": "%[]]"
                                }), (function (param) {
                                if (param === "]") {
                                  return accu;
                                } else {
                                  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                                                  tag: 0,
                                                  name: "Format",
                                                  length: 2,
                                                  "0": /* constructor */{
                                                    tag: 12,
                                                    name: "Char_literal",
                                                    length: 2,
                                                    "0": /* " " */32,
                                                    "1": /* constructor */{
                                                      tag: 4,
                                                      name: "Int",
                                                      length: 4,
                                                      "0": /* Int_i */3,
                                                      "1": /* No_padding */0,
                                                      "2": /* No_precision */0,
                                                      "3": /* constructor */{
                                                        tag: 12,
                                                        name: "Char_literal",
                                                        length: 2,
                                                        "0": /* " " */32,
                                                        "1": /* End_of_format */0
                                                      }
                                                    }
                                                  },
                                                  "1": " %i "
                                                }), (function (i) {
                                                return scan_rest(ib, /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": i,
                                                            "1": accu
                                                          });
                                              }));
                                }
                              }));
                }
              }));
}

function scan_elems$4(ib, accu) {
  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 0,
                      name: "Char",
                      length: 1,
                      "0": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* End_of_format */0
                      }
                    }
                  },
                  "1": " %c "
                }), (function (c) {
                if (c !== 91) {
                  throw [
                        Caml_builtin_exceptions.failure,
                        "scan_elems"
                      ];
                }
                if (accu === /* [] */0) {
                  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                                  tag: 0,
                                  name: "Format",
                                  length: 2,
                                  "0": /* constructor */{
                                    tag: 20,
                                    name: "Scan_char_set",
                                    length: 3,
                                    "0": undefined,
                                    "1": "\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                                    "2": /* End_of_format */0
                                  },
                                  "1": "%[]]"
                                }), (function (param) {
                                if (param === "]") {
                                  return accu;
                                } else {
                                  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                                                  tag: 0,
                                                  name: "Format",
                                                  length: 2,
                                                  "0": /* constructor */{
                                                    tag: 12,
                                                    name: "Char_literal",
                                                    length: 2,
                                                    "0": /* " " */32,
                                                    "1": /* constructor */{
                                                      tag: 4,
                                                      name: "Int",
                                                      length: 4,
                                                      "0": /* Int_i */3,
                                                      "1": /* No_padding */0,
                                                      "2": /* No_precision */0,
                                                      "3": /* constructor */{
                                                        tag: 12,
                                                        name: "Char_literal",
                                                        length: 2,
                                                        "0": /* " " */32,
                                                        "1": /* End_of_format */0
                                                      }
                                                    }
                                                  },
                                                  "1": " %i "
                                                }), (function (i) {
                                                return scan_rest(ib, /* constructor */{
                                                            tag: 0,
                                                            name: "::",
                                                            length: 2,
                                                            "0": i,
                                                            "1": accu
                                                          });
                                              }));
                                }
                              }));
                } else {
                  throw [
                        Caml_builtin_exceptions.failure,
                        "scan_elems"
                      ];
                }
              }));
}

function scan_int_list$3(ib) {
  return List.rev(scan_elems$4(ib, /* [] */0));
}

function test18(param) {
  var ib = Scanf.Scanning.from_string("[]");
  if (List.rev(scan_elems$4(ib, /* [] */0)) === /* [] */0) {
    var ib$1 = Scanf.Scanning.from_string("[ ]");
    if (List.rev(scan_elems$4(ib$1, /* [] */0)) === /* [] */0) {
      var ib$2 = Scanf.Scanning.from_string("[1;2;3;4]");
      if (Caml_obj.caml_equal(List.rev(scan_elems$4(ib$2, /* [] */0)), /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 1,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 2,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 3,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 4,
                    "1": /* [] */0
                  }
                }
              }
            })) {
        var ib$3 = Scanf.Scanning.from_string("[1;2;3;4; ]");
        return Caml_obj.caml_equal(List.rev(scan_elems$4(ib$3, /* [] */0)), /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 1,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 2,
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": 3,
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": 4,
                          "1": /* [] */0
                        }
                      }
                    }
                  });
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 446, characters 5-12", test18(/* () */0));

function test19(param) {
  return Testing.failure_test(scan_int_list$3, Scanf.Scanning.from_string("[1;2;3;4 5]"), "scan_rest");
}

test19(/* () */0);

function test20(param) {
  return Testing.scan_failure_test(scan_int_list$3, Scanf.Scanning.from_string("[1;2;3;4;; 5]"));
}

test20(/* () */0);

function test21(param) {
  return Testing.scan_failure_test(scan_int_list$3, Scanf.Scanning.from_string("[1;2;3;4;;"));
}

test21(/* () */0);

function scan_rest$1(ib, accu) {
  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 20,
                    name: "Scan_char_set",
                    length: 3,
                    "0": undefined,
                    "1": "\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                    "2": /* End_of_format */0
                  },
                  "1": "%[]]"
                }), (function (param) {
                if (param === "]") {
                  return accu;
                } else {
                  var ib$1 = ib;
                  var accu$1 = accu;
                  return Curry._1(Scanf.bscanf(ib$1, /* constructor */{
                                  tag: 0,
                                  name: "Format",
                                  length: 2,
                                  "0": /* constructor */{
                                    tag: 12,
                                    name: "Char_literal",
                                    length: 2,
                                    "0": /* " " */32,
                                    "1": /* constructor */{
                                      tag: 4,
                                      name: "Int",
                                      length: 4,
                                      "0": /* Int_i */3,
                                      "1": /* No_padding */0,
                                      "2": /* No_precision */0,
                                      "3": /* constructor */{
                                        tag: 12,
                                        name: "Char_literal",
                                        length: 2,
                                        "0": /* " " */32,
                                        "1": /* End_of_format */0
                                      }
                                    }
                                  },
                                  "1": " %i "
                                }), (function (i) {
                                var ib$2 = ib$1;
                                var accu$2 = /* constructor */{
                                  tag: 0,
                                  name: "::",
                                  length: 2,
                                  "0": i,
                                  "1": accu$1
                                };
                                return Curry._1(Scanf.bscanf(ib$2, /* constructor */{
                                                tag: 0,
                                                name: "Format",
                                                length: 2,
                                                "0": /* constructor */{
                                                  tag: 20,
                                                  name: "Scan_char_set",
                                                  length: 3,
                                                  "0": 1,
                                                  "1": "\0\0\0\0\0\0\0\b\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                                                  "2": /* End_of_format */0
                                                },
                                                "1": "%1[];]"
                                              }), (function (param) {
                                              switch (param) {
                                                case ";" :
                                                    return scan_rest$1(ib$2, accu$2);
                                                case "]" :
                                                    return accu$2;
                                                default:
                                                  var s = Printf.sprintf(/* constructor */{
                                                        tag: 0,
                                                        name: "Format",
                                                        length: 2,
                                                        "0": /* constructor */{
                                                          tag: 11,
                                                          name: "String_literal",
                                                          length: 2,
                                                          "0": "scan_int_list",
                                                          "1": /* End_of_format */0
                                                        },
                                                        "1": "scan_int_list"
                                                      });
                                                  throw [
                                                        Caml_builtin_exceptions.failure,
                                                        s
                                                      ];
                                              }
                                            }));
                              }));
                }
              }));
}

function scan_int_list$4(ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": " [ ",
              "1": /* End_of_format */0
            },
            "1": " [ "
          }), /* () */0);
  return List.rev(scan_rest$1(ib, /* [] */0));
}

function test22(param) {
  if (scan_int_list$4(Scanf.Scanning.from_string("[]")) === /* [] */0 && scan_int_list$4(Scanf.Scanning.from_string("[ ]")) === /* [] */0 && Caml_obj.caml_equal(scan_int_list$4(Scanf.Scanning.from_string("[1]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* [] */0
        }) && Caml_obj.caml_equal(scan_int_list$4(Scanf.Scanning.from_string("[1;2;3;4]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": 2,
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 3,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 4,
                "1": /* [] */0
              }
            }
          }
        })) {
    return Caml_obj.caml_equal(scan_int_list$4(Scanf.Scanning.from_string("[1;2;3;4;]")), /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 1,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 2,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 3,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 4,
                      "1": /* [] */0
                    }
                  }
                }
              });
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 506, characters 5-12", test22(/* () */0));

function scan_elems$5(ib, scan_elem, accu) {
  try {
    return Curry._2(scan_elem, ib, (function (i, s) {
                  var accu$1 = /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": i,
                    "1": accu
                  };
                  if (s === "") {
                    return accu$1;
                  } else {
                    return scan_elems$5(ib, scan_elem, accu$1);
                  }
                }));
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Scanf.Scan_failure) {
      return accu;
    } else {
      throw exn;
    }
  }
}

function scan_list(scan_elem, ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "[ ",
              "1": /* End_of_format */0
            },
            "1": "[ "
          }), /* () */0);
  var accu = scan_elems$5(ib, scan_elem, /* [] */0);
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": " ]",
              "1": /* End_of_format */0
            },
            "1": " ]"
          }), /* () */0);
  return List.rev(accu);
}

function scan_int_elem(ib) {
  return Scanf.bscanf(ib, /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* constructor */{
                  tag: 4,
                  name: "Int",
                  length: 4,
                  "0": /* Int_i */3,
                  "1": /* No_padding */0,
                  "2": /* No_precision */0,
                  "3": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 20,
                      name: "Scan_char_set",
                      length: 3,
                      "0": 1,
                      "1": "\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                      "2": /* End_of_format */0
                    }
                  }
                }
              },
              "1": " %i %1[;]"
            });
}

function scan_int_list$5(param) {
  return scan_list(scan_int_elem, param);
}

function test23(param) {
  if (scan_list(scan_int_elem, Scanf.Scanning.from_string("[]")) === /* [] */0 && scan_list(scan_int_elem, Scanf.Scanning.from_string("[ ]")) === /* [] */0 && Caml_obj.caml_equal(scan_list(scan_int_elem, Scanf.Scanning.from_string("[1]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* [] */0
        }) && Caml_obj.caml_equal(scan_list(scan_int_elem, Scanf.Scanning.from_string("[1;2;3;4]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": 2,
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 3,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 4,
                "1": /* [] */0
              }
            }
          }
        })) {
    return Caml_obj.caml_equal(scan_list(scan_int_elem, Scanf.Scanning.from_string("[1;2;3;4;]")), /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 1,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 2,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 3,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 4,
                      "1": /* [] */0
                    }
                  }
                }
              });
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 562, characters 5-12", test23(/* () */0));

function test24(param) {
  return Testing.scan_failure_test(scan_int_list$5, Scanf.Scanning.from_string("[1;2;3;4 5]"));
}

function test25(param) {
  return Testing.scan_failure_test(scan_int_list$5, Scanf.Scanning.from_string("[1;2;3;4;;"));
}

function test26(param) {
  return Testing.scan_failure_test(scan_int_list$5, Scanf.Scanning.from_string("[1;2;3;4;; 5]"));
}

function test27(param) {
  return Testing.scan_failure_test(scan_int_list$5, Scanf.Scanning.from_string("[1;2;3;4;; 23]"));
}

test24(/* () */0) && test25(/* () */0) && test26(/* () */0) && test27(/* () */0);

function scan_string_elem(ib) {
  return Scanf.bscanf(ib, /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 11,
                name: "String_literal",
                length: 2,
                "0": " \"",
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 17,
                    name: "Formatting_lit",
                    length: 2,
                    "0": /* constructor */{
                      tag: 2,
                      name: "Scan_indic",
                      length: 1,
                      "0": /* "\"" */34
                    },
                    "1": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 20,
                        name: "Scan_char_set",
                        length: 3,
                        "0": 1,
                        "1": "\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                        "2": /* End_of_format */0
                      }
                    }
                  }
                }
              },
              "1": " \"%s@\" %1[;]"
            });
}

function scan_String_elem(ib) {
  return Scanf.bscanf(ib, /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* constructor */{
                  tag: 3,
                  name: "Caml_string",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 20,
                      name: "Scan_char_set",
                      length: 3,
                      "0": 1,
                      "1": "\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                      "2": /* End_of_format */0
                    }
                  }
                }
              },
              "1": " %S %1[;]"
            });
}

function scan_String_list(param) {
  return scan_list(scan_String_elem, param);
}

function test28(param) {
  if (scan_list(scan_string_elem, Scanf.Scanning.from_string("[]")) === /* [] */0 && Caml_obj.caml_equal(scan_list(scan_string_elem, Scanf.Scanning.from_string("[\"Le\"]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": "Le",
          "1": /* [] */0
        }) && Caml_obj.caml_equal(scan_list(scan_string_elem, Scanf.Scanning.from_string("[\"Le\";\"langage\";\"Objective\";\"Caml\"]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": "Le",
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": "langage",
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": "Objective",
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": "Caml",
                "1": /* [] */0
              }
            }
          }
        }) && Caml_obj.caml_equal(scan_list(scan_string_elem, Scanf.Scanning.from_string("[\"Le\";\"langage\";\"Objective\";\"Caml\"; ]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": "Le",
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": "langage",
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": "Objective",
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": "Caml",
                "1": /* [] */0
              }
            }
          }
        }) && scan_String_list(Scanf.Scanning.from_string("[]")) === /* [] */0 && Caml_obj.caml_equal(scan_String_list(Scanf.Scanning.from_string("[\"Le\"]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": "Le",
          "1": /* [] */0
        }) && Caml_obj.caml_equal(scan_String_list(Scanf.Scanning.from_string("[\"Le\";\"langage\";\"Objective\";\"Caml\"]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": "Le",
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": "langage",
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": "Objective",
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": "Caml",
                "1": /* [] */0
              }
            }
          }
        })) {
    return Caml_obj.caml_equal(scan_String_list(Scanf.Scanning.from_string("[\"Le\";\"langage\";\"Objective\";\"Caml\"; ]")), /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": "Le",
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": "langage",
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": "Objective",
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": "Caml",
                      "1": /* [] */0
                    }
                  }
                }
              });
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 609, characters 5-12", test28(/* () */0));

function scan_elems$6(ib, scan_elem, accu) {
  return Curry._3(scan_elem, ib, (function (i, s) {
                var accu$1 = /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": i,
                  "1": accu
                };
                if (s === "") {
                  return accu$1;
                } else {
                  return scan_elems$6(ib, scan_elem, accu$1);
                }
              }), (function (ib, exc) {
                return accu;
              }));
}

function scan_list$1(scan_elem, ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "[ ",
              "1": /* End_of_format */0
            },
            "1": "[ "
          }), /* () */0);
  var accu = scan_elems$6(ib, scan_elem, /* [] */0);
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": " ]",
              "1": /* End_of_format */0
            },
            "1": " ]"
          }), /* () */0);
  return List.rev(accu);
}

function scan_int_elem$1(ib, f, ek) {
  return Curry._1(Scanf.kscanf(ib, ek, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_i */3,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* constructor */{
                          tag: 20,
                          name: "Scan_char_set",
                          length: 3,
                          "0": 1,
                          "1": "\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                          "2": /* End_of_format */0
                        }
                      }
                    }
                  },
                  "1": " %i %1[;]"
                }), f);
}

function test29(param) {
  if (scan_list$1(scan_int_elem$1, Scanf.Scanning.from_string("[]")) === /* [] */0 && scan_list$1(scan_int_elem$1, Scanf.Scanning.from_string("[ ]")) === /* [] */0 && Caml_obj.caml_equal(scan_list$1(scan_int_elem$1, Scanf.Scanning.from_string("[1]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* [] */0
        }) && Caml_obj.caml_equal(scan_list$1(scan_int_elem$1, Scanf.Scanning.from_string("[1;2;3;4]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": 2,
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 3,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 4,
                "1": /* [] */0
              }
            }
          }
        })) {
    return Caml_obj.caml_equal(scan_list$1(scan_int_elem$1, Scanf.Scanning.from_string("[1;2;3;4;]")), /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 1,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 2,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 3,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 4,
                      "1": /* [] */0
                    }
                  }
                }
              });
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 639, characters 5-12", test29(/* () */0));

function scan_string_elem$1(ib, f, ek) {
  return Curry._1(Scanf.kscanf(ib, ek, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* " " */32,
                    "1": /* constructor */{
                      tag: 3,
                      name: "Caml_string",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* constructor */{
                          tag: 20,
                          name: "Scan_char_set",
                          length: 3,
                          "0": 1,
                          "1": "\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                          "2": /* End_of_format */0
                        }
                      }
                    }
                  },
                  "1": " %S %1[;]"
                }), f);
}

function test30(param) {
  if (scan_list$1(scan_string_elem$1, Scanf.Scanning.from_string("[]")) === /* [] */0 && scan_list$1(scan_string_elem$1, Scanf.Scanning.from_string("[ ]")) === /* [] */0 && Caml_obj.caml_equal(scan_list$1(scan_string_elem$1, Scanf.Scanning.from_string("[ \"1\" ]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": "1",
          "1": /* [] */0
        }) && Caml_obj.caml_equal(scan_list$1(scan_string_elem$1, Scanf.Scanning.from_string("[\"1\"; \"2\"; \"3\"; \"4\"]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": "1",
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": "2",
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": "3",
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": "4",
                "1": /* [] */0
              }
            }
          }
        })) {
    return Caml_obj.caml_equal(scan_list$1(scan_string_elem$1, Scanf.Scanning.from_string("[\"1\"; \"2\"; \"3\"; \"4\";]")), /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": "1",
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": "2",
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": "3",
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": "4",
                      "1": /* [] */0
                    }
                  }
                }
              });
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 656, characters 5-12", test30(/* () */0));

function scan_elem(fmt, ib, f, ek) {
  return Curry._1(Scanf.kscanf(ib, ek, fmt), f);
}

function scan_elems$7(ib, scan_elem, accu) {
  return Curry._3(scan_elem, ib, (function (i) {
                var accu$1 = /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": i,
                  "1": accu
                };
                return Curry._1(Scanf.kscanf(ib, (function (ib, exc) {
                                  return accu$1;
                                }), /* constructor */{
                                tag: 0,
                                name: "Format",
                                length: 2,
                                "0": /* constructor */{
                                  tag: 12,
                                  name: "Char_literal",
                                  length: 2,
                                  "0": /* " " */32,
                                  "1": /* constructor */{
                                    tag: 20,
                                    name: "Scan_char_set",
                                    length: 3,
                                    "0": 1,
                                    "1": "\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                                    "2": /* End_of_format */0
                                  }
                                },
                                "1": " %1[;]"
                              }), (function (s) {
                              if (s === "") {
                                return accu$1;
                              } else {
                                return scan_elems$7(ib, scan_elem, accu$1);
                              }
                            }));
              }), (function (ib, exc) {
                return accu;
              }));
}

function scan_list$2(scan_elem, ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "[ ",
              "1": /* End_of_format */0
            },
            "1": "[ "
          }), /* () */0);
  var accu = scan_elems$7(ib, scan_elem, /* [] */0);
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": " ]",
              "1": /* End_of_format */0
            },
            "1": " ]"
          }), /* () */0);
  return List.rev(accu);
}

var partial_arg$1 = /* constructor */{
  tag: 0,
  name: "Format",
  length: 2,
  "0": /* constructor */{
    tag: 12,
    name: "Char_literal",
    length: 2,
    "0": /* " " */32,
    "1": /* constructor */{
      tag: 4,
      name: "Int",
      length: 4,
      "0": /* Int_i */3,
      "1": /* No_padding */0,
      "2": /* No_precision */0,
      "3": /* End_of_format */0
    }
  },
  "1": " %i"
};

function partial_arg$2(param, param$1, param$2) {
  return scan_elem(partial_arg$1, param, param$1, param$2);
}

function scan_int_list$6(param) {
  return scan_list$2(partial_arg$2, param);
}

var partial_arg$3 = /* constructor */{
  tag: 0,
  name: "Format",
  length: 2,
  "0": /* constructor */{
    tag: 12,
    name: "Char_literal",
    length: 2,
    "0": /* " " */32,
    "1": /* constructor */{
      tag: 3,
      name: "Caml_string",
      length: 2,
      "0": /* No_padding */0,
      "1": /* End_of_format */0
    }
  },
  "1": " %S"
};

function partial_arg$4(param, param$1, param$2) {
  return scan_elem(partial_arg$3, param, param$1, param$2);
}

function scan_string_list(param) {
  return scan_list$2(partial_arg$4, param);
}

function test31(param) {
  if (Curry._1(scan_int_list$6, Scanf.Scanning.from_string("[]")) === /* [] */0 && Curry._1(scan_int_list$6, Scanf.Scanning.from_string("[ ]")) === /* [] */0 && Caml_obj.caml_equal(Curry._1(scan_int_list$6, Scanf.Scanning.from_string("[1]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* [] */0
        }) && Caml_obj.caml_equal(Curry._1(scan_int_list$6, Scanf.Scanning.from_string("[1;2;3;4]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": 2,
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 3,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 4,
                "1": /* [] */0
              }
            }
          }
        })) {
    return Caml_obj.caml_equal(Curry._1(scan_int_list$6, Scanf.Scanning.from_string("[1;2;3;4;]")), /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 1,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 2,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 3,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 4,
                      "1": /* [] */0
                    }
                  }
                }
              });
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 714, characters 5-12", test31(/* () */0));

function test32(param) {
  if (Curry._1(scan_string_list, Scanf.Scanning.from_string("[]")) === /* [] */0 && Curry._1(scan_string_list, Scanf.Scanning.from_string("[ ]")) === /* [] */0 && Caml_obj.caml_equal(Curry._1(scan_string_list, Scanf.Scanning.from_string("[ \"1\" ]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": "1",
          "1": /* [] */0
        }) && Caml_obj.caml_equal(Curry._1(scan_string_list, Scanf.Scanning.from_string("[\"1\"; \"2\"; \"3\"; \"4\"]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": "1",
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": "2",
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": "3",
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": "4",
                "1": /* [] */0
              }
            }
          }
        })) {
    return Caml_obj.caml_equal(Curry._1(scan_string_list, Scanf.Scanning.from_string("[\"1\"; \"2\"; \"3\"; \"4\";]")), /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": "1",
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": "2",
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": "3",
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": "4",
                      "1": /* [] */0
                    }
                  }
                }
              });
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 728, characters 5-12", test32(/* () */0));

function scan_elems$8(ib, scan_elem_fmt, accu) {
  return Curry._1(Scanf.kscanf(ib, (function (ib, exc) {
                    return accu;
                  }), scan_elem_fmt), (function (i) {
                var accu$1 = /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": i,
                  "1": accu
                };
                return Curry._1(Scanf.bscanf(ib, /* constructor */{
                                tag: 0,
                                name: "Format",
                                length: 2,
                                "0": /* constructor */{
                                  tag: 12,
                                  name: "Char_literal",
                                  length: 2,
                                  "0": /* " " */32,
                                  "1": /* constructor */{
                                    tag: 20,
                                    name: "Scan_char_set",
                                    length: 3,
                                    "0": 1,
                                    "1": "\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                                    "2": /* constructor */{
                                      tag: 12,
                                      name: "Char_literal",
                                      length: 2,
                                      "0": /* " " */32,
                                      "1": /* End_of_format */0
                                    }
                                  }
                                },
                                "1": " %1[;] "
                              }), (function (param) {
                              if (param === "") {
                                return accu$1;
                              } else {
                                return scan_elems$8(ib, scan_elem_fmt, accu$1);
                              }
                            }));
              }));
}

function scan_list$3(scan_elem_fmt, ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "[ ",
              "1": /* End_of_format */0
            },
            "1": "[ "
          }), /* () */0);
  var accu = scan_elems$8(ib, scan_elem_fmt, /* [] */0);
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": " ]",
              "1": /* End_of_format */0
            },
            "1": " ]"
          }), /* () */0);
  return List.rev(accu);
}

var partial_arg$5 = /* constructor */{
  tag: 0,
  name: "Format",
  length: 2,
  "0": /* constructor */{
    tag: 4,
    name: "Int",
    length: 4,
    "0": /* Int_i */3,
    "1": /* No_padding */0,
    "2": /* No_precision */0,
    "3": /* End_of_format */0
  },
  "1": "%i"
};

function scan_int_list$7(param) {
  return scan_list$3(partial_arg$5, param);
}

var partial_arg$6 = /* constructor */{
  tag: 0,
  name: "Format",
  length: 2,
  "0": /* constructor */{
    tag: 3,
    name: "Caml_string",
    length: 2,
    "0": /* No_padding */0,
    "1": /* End_of_format */0
  },
  "1": "%S"
};

function scan_string_list$1(param) {
  return scan_list$3(partial_arg$6, param);
}

function test33(param) {
  if (Curry._1(scan_int_list$7, Scanf.Scanning.from_string("[]")) === /* [] */0 && Curry._1(scan_int_list$7, Scanf.Scanning.from_string("[ ]")) === /* [] */0 && Caml_obj.caml_equal(Curry._1(scan_int_list$7, Scanf.Scanning.from_string("[ 1 ]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* [] */0
        }) && Caml_obj.caml_equal(Curry._1(scan_int_list$7, Scanf.Scanning.from_string("[ 1; 2; 3; 4 ]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": 1,
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": 2,
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": 3,
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 4,
                "1": /* [] */0
              }
            }
          }
        })) {
    return Caml_obj.caml_equal(Curry._1(scan_int_list$7, Scanf.Scanning.from_string("[1;2;3;4;]")), /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 1,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": 2,
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 3,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 4,
                      "1": /* [] */0
                    }
                  }
                }
              });
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 773, characters 5-12", test33(/* () */0));

function test34(param) {
  if (Curry._1(scan_string_list$1, Scanf.Scanning.from_string("[]")) === /* [] */0 && Curry._1(scan_string_list$1, Scanf.Scanning.from_string("[ ]")) === /* [] */0 && Caml_obj.caml_equal(Curry._1(scan_string_list$1, Scanf.Scanning.from_string("[ \"1\" ]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": "1",
          "1": /* [] */0
        }) && Caml_obj.caml_equal(Curry._1(scan_string_list$1, Scanf.Scanning.from_string("[\"1\"; \"2\"; \"3\"; \"4\"]")), /* constructor */{
          tag: 0,
          name: "::",
          length: 2,
          "0": "1",
          "1": /* constructor */{
            tag: 0,
            name: "::",
            length: 2,
            "0": "2",
            "1": /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": "3",
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": "4",
                "1": /* [] */0
              }
            }
          }
        })) {
    return Caml_obj.caml_equal(Curry._1(scan_string_list$1, Scanf.Scanning.from_string("[\"1\"; \"2\"; \"3\"; \"4\";]")), /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": "1",
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": "2",
                  "1": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": "3",
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": "4",
                      "1": /* [] */0
                    }
                  }
                }
              });
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 787, characters 5-12", test34(/* () */0));

function scan_elems$9(scan_elem, accu, ib) {
  return Curry._2(Scanf.kscanf(ib, (function (ib, exc) {
                    return accu;
                  }), /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 19,
                    name: "Reader",
                    length: 1,
                    "0": /* End_of_format */0
                  },
                  "1": "%r"
                }), (function (ib) {
                return Curry._2(scan_elem, ib, (function (elem) {
                              var accu$1 = /* constructor */{
                                tag: 0,
                                name: "::",
                                length: 2,
                                "0": elem,
                                "1": accu
                              };
                              return Curry._1(Scanf.bscanf(ib, /* constructor */{
                                              tag: 0,
                                              name: "Format",
                                              length: 2,
                                              "0": /* constructor */{
                                                tag: 12,
                                                name: "Char_literal",
                                                length: 2,
                                                "0": /* " " */32,
                                                "1": /* constructor */{
                                                  tag: 20,
                                                  name: "Scan_char_set",
                                                  length: 3,
                                                  "0": 1,
                                                  "1": "\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                                                  "2": /* constructor */{
                                                    tag: 12,
                                                    name: "Char_literal",
                                                    length: 2,
                                                    "0": /* " " */32,
                                                    "1": /* End_of_format */0
                                                  }
                                                }
                                              },
                                              "1": " %1[;] "
                                            }), (function (param) {
                                            if (param === "") {
                                              return accu$1;
                                            } else {
                                              return scan_elems$9(scan_elem, accu$1, ib);
                                            }
                                          }));
                            }));
              }), (function (l) {
                return l;
              }));
}

function scan_list$4(scan_elem, ib) {
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": "[ ",
              "1": /* End_of_format */0
            },
            "1": "[ "
          }), /* () */0);
  var accu = scan_elems$9(scan_elem, /* [] */0, ib);
  Curry._1(Scanf.bscanf(ib, /* constructor */{
            tag: 0,
            name: "Format",
            length: 2,
            "0": /* constructor */{
              tag: 11,
              name: "String_literal",
              length: 2,
              "0": " ]",
              "1": /* End_of_format */0
            },
            "1": " ]"
          }), /* () */0);
  return List.rev(accu);
}

function scan_float(ib) {
  return Scanf.bscanf(ib, /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 8,
                name: "Float",
                length: 4,
                "0": /* Float_f */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%f"
            });
}

function scan_int_list$8(param) {
  return scan_list$4((function (ib) {
                return Scanf.bscanf(ib, /* constructor */{
                            tag: 0,
                            name: "Format",
                            length: 2,
                            "0": /* constructor */{
                              tag: 4,
                              name: "Int",
                              length: 4,
                              "0": /* Int_i */3,
                              "1": /* No_padding */0,
                              "2": /* No_precision */0,
                              "3": /* End_of_format */0
                            },
                            "1": "%i"
                          });
              }), param);
}

function scan_string_list$2(param) {
  return scan_list$4((function (ib) {
                return Scanf.bscanf(ib, /* constructor */{
                            tag: 0,
                            name: "Format",
                            length: 2,
                            "0": /* constructor */{
                              tag: 3,
                              name: "Caml_string",
                              length: 2,
                              "0": /* No_padding */0,
                              "1": /* End_of_format */0
                            },
                            "1": "%S"
                          });
              }), param);
}

function scan_bool_list(param) {
  return scan_list$4((function (ib) {
                return Scanf.bscanf(ib, /* constructor */{
                            tag: 0,
                            name: "Format",
                            length: 2,
                            "0": /* constructor */{
                              tag: 9,
                              name: "Bool",
                              length: 1,
                              "0": /* End_of_format */0
                            },
                            "1": "%B"
                          });
              }), param);
}

function scan_char_list(param) {
  return scan_list$4((function (ib) {
                return Scanf.bscanf(ib, /* constructor */{
                            tag: 0,
                            name: "Format",
                            length: 2,
                            "0": /* constructor */{
                              tag: 1,
                              name: "Caml_char",
                              length: 1,
                              "0": /* End_of_format */0
                            },
                            "1": "%C"
                          });
              }), param);
}

function scan_float_list_list(param) {
  return scan_list$4((function (ib, k) {
                return Curry._1(k, scan_list$4(scan_float, ib));
              }), param);
}

function test340(param) {
  return Caml_obj.caml_equal(scan_float_list_list(Scanf.Scanning.from_string("[[1.0] ; []; [2.0; 3; 5.0; 6.];]")), /* constructor */{
              tag: 0,
              name: "::",
              length: 2,
              "0": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": 1,
                "1": /* [] */0
              },
              "1": /* constructor */{
                tag: 0,
                name: "::",
                length: 2,
                "0": /* [] */0,
                "1": /* constructor */{
                  tag: 0,
                  name: "::",
                  length: 2,
                  "0": /* constructor */{
                    tag: 0,
                    name: "::",
                    length: 2,
                    "0": 2,
                    "1": /* constructor */{
                      tag: 0,
                      name: "::",
                      length: 2,
                      "0": 3,
                      "1": /* constructor */{
                        tag: 0,
                        name: "::",
                        length: 2,
                        "0": 5,
                        "1": /* constructor */{
                          tag: 0,
                          name: "::",
                          length: 2,
                          "0": 6,
                          "1": /* [] */0
                        }
                      }
                    }
                  },
                  "1": /* [] */0
                }
              }
            });
}

function scan_list_list(scan_elems, ib) {
  return scan_list$4((function (ib, k) {
                return Curry._1(k, Curry._1(scan_elems, ib));
              }), ib);
}

function scan_float_item(ib, k) {
  return Curry._1(k, Curry._1(scan_float(ib), (function (x) {
                    return x;
                  })));
}

function scan_float_list(ib, k) {
  return Curry._1(k, scan_list$4(scan_float_item, ib));
}

function scan_float_list_list$1(ib, k) {
  return Curry._1(k, scan_list$4(scan_float_list, ib));
}

function test35(param) {
  if (Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 21,
                name: "Scan_get_counter",
                length: 2,
                "0": /* Token_counter */2,
                "1": /* End_of_format */0
              },
              "1": "%N"
            }), (function (x) {
            return x;
          })) === 0 && Curry._1(Scanf.sscanf("456", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 21,
                name: "Scan_get_counter",
                length: 2,
                "0": /* Token_counter */2,
                "1": /* End_of_format */0
              },
              "1": "%N"
            }), (function (x) {
            return x;
          })) === 0 && Caml_obj.caml_equal(Curry._1(Scanf.sscanf("456", /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 4,
                    name: "Int",
                    length: 4,
                    "0": /* Int_d */0,
                    "1": /* No_padding */0,
                    "2": /* No_precision */0,
                    "3": /* constructor */{
                      tag: 21,
                      name: "Scan_get_counter",
                      length: 2,
                      "0": /* Token_counter */2,
                      "1": /* End_of_format */0
                    }
                  },
                  "1": "%d%N"
                }), (function (x, y) {
                return /* tuple */[
                        x,
                        y
                      ];
              })), /* tuple */[
          456,
          1
        ])) {
    return Caml_obj.caml_equal(Curry._1(Scanf.sscanf(" ", /* constructor */{
                        tag: 0,
                        name: "Format",
                        length: 2,
                        "0": /* constructor */{
                          tag: 21,
                          name: "Scan_get_counter",
                          length: 2,
                          "0": /* Token_counter */2,
                          "1": /* constructor */{
                            tag: 2,
                            name: "String",
                            length: 2,
                            "0": /* No_padding */0,
                            "1": /* constructor */{
                              tag: 21,
                              name: "Scan_get_counter",
                              length: 2,
                              "0": /* Token_counter */2,
                              "1": /* End_of_format */0
                            }
                          }
                        },
                        "1": "%N%s%N"
                      }), (function (x, s, y) {
                      return /* tuple */[
                              x,
                              s,
                              y
                            ];
                    })), /* tuple */[
                0,
                "",
                1
              ]);
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 940, characters 5-12", test340(/* () */0) && test35(/* () */0));

function read_elems(read_elem, accu, ib) {
  return Curry._2(Scanf.kscanf(ib, (function (ib, exc) {
                    return accu;
                  }), /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 19,
                    name: "Reader",
                    length: 1,
                    "0": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 20,
                        name: "Scan_char_set",
                        length: 3,
                        "0": 1,
                        "1": "\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                        "2": /* constructor */{
                          tag: 12,
                          name: "Char_literal",
                          length: 2,
                          "0": /* " " */32,
                          "1": /* End_of_format */0
                        }
                      }
                    }
                  },
                  "1": "%r %1[;] "
                }), Curry._1(read_elem, (function (elem) {
                    return /* constructor */{
                            tag: 0,
                            name: "::",
                            length: 2,
                            "0": elem,
                            "1": accu
                          };
                  })), (function (accu, s) {
                if (s === "") {
                  return accu;
                } else {
                  return read_elems(read_elem, accu, ib);
                }
              }));
}

function read_list(read_elem, ib) {
  return Curry._2(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 11,
                    name: "String_literal",
                    length: 2,
                    "0": "[ ",
                    "1": /* constructor */{
                      tag: 19,
                      name: "Reader",
                      length: 1,
                      "0": /* constructor */{
                        tag: 11,
                        name: "String_literal",
                        length: 2,
                        "0": " ]",
                        "1": /* End_of_format */0
                      }
                    }
                  },
                  "1": "[ %r ]"
                }), (function (param) {
                return read_elems(read_elem, /* [] */0, param);
              }), List.rev);
}

function make_read_elem(fmt, f, ib) {
  return Curry._1(Scanf.bscanf(ib, fmt), f);
}

function scan_List(fmt) {
  return (function (param) {
      return read_list((function (param, param$1) {
                    return Curry._1(Scanf.bscanf(param$1, fmt), param);
                  }), param);
    });
}

function test36(param) {
  if (Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 21,
                name: "Scan_get_counter",
                length: 2,
                "0": /* Char_counter */1,
                "1": /* End_of_format */0
              },
              "1": "%n"
            }), (function (x) {
            return x;
          })) === 0 && Curry._1(Scanf.sscanf("456", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 21,
                name: "Scan_get_counter",
                length: 2,
                "0": /* Char_counter */1,
                "1": /* End_of_format */0
              },
              "1": "%n"
            }), (function (x) {
            return x;
          })) === 0 && Caml_obj.caml_equal(Curry._1(Scanf.sscanf("456", /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 4,
                    name: "Int",
                    length: 4,
                    "0": /* Int_d */0,
                    "1": /* No_padding */0,
                    "2": /* No_precision */0,
                    "3": /* constructor */{
                      tag: 21,
                      name: "Scan_get_counter",
                      length: 2,
                      "0": /* Char_counter */1,
                      "1": /* End_of_format */0
                    }
                  },
                  "1": "%d%n"
                }), (function (x, y) {
                return /* tuple */[
                        x,
                        y
                      ];
              })), /* tuple */[
          456,
          3
        ])) {
    return Caml_obj.caml_equal(Curry._1(Scanf.sscanf(" ", /* constructor */{
                        tag: 0,
                        name: "Format",
                        length: 2,
                        "0": /* constructor */{
                          tag: 21,
                          name: "Scan_get_counter",
                          length: 2,
                          "0": /* Char_counter */1,
                          "1": /* constructor */{
                            tag: 2,
                            name: "String",
                            length: 2,
                            "0": /* No_padding */0,
                            "1": /* constructor */{
                              tag: 21,
                              name: "Scan_get_counter",
                              length: 2,
                              "0": /* Char_counter */1,
                              "1": /* End_of_format */0
                            }
                          }
                        },
                        "1": "%n%s%n"
                      }), (function (x, s, y) {
                      return /* tuple */[
                              x,
                              s,
                              y
                            ];
                    })), /* tuple */[
                0,
                "",
                0
              ]);
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 995, characters 5-12", test36(/* () */0));

function test37(param) {
  if (Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* End_of_format */0,
              "1": ""
            }), true) && Curry._2(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* End_of_format */0,
              "1": ""
            }), (function (x) {
            return x;
          }), 1) === 1) {
    return Curry._2(Scanf.sscanf("123", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* End_of_format */0,
                    "1": ""
                  }), (function (x) {
                  return x;
                }), 1) === 1;
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1005, characters 5-12", test37(/* () */0));

function test38(param) {
  if (Curry._1(Scanf.sscanf("a", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* "a" */97,
                "1": /* constructor */{
                  tag: 10,
                  name: "Flush",
                  length: 1,
                  "0": /* End_of_format */0
                }
              },
              "1": "a%!"
            }), true) && Curry._1(Scanf.sscanf("a", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* "a" */97,
                "1": /* constructor */{
                  tag: 10,
                  name: "Flush",
                  length: 1,
                  "0": /* constructor */{
                    tag: 10,
                    name: "Flush",
                    length: 1,
                    "0": /* End_of_format */0
                  }
                }
              },
              "1": "a%!%!"
            }), true) && Curry._1(Scanf.sscanf(" a", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 11,
                name: "String_literal",
                length: 2,
                "0": " a",
                "1": /* constructor */{
                  tag: 10,
                  name: "Flush",
                  length: 1,
                  "0": /* End_of_format */0
                }
              },
              "1": " a%!"
            }), true) && Curry._1(Scanf.sscanf("a ", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 11,
                name: "String_literal",
                length: 2,
                "0": "a ",
                "1": /* constructor */{
                  tag: 10,
                  name: "Flush",
                  length: 1,
                  "0": /* End_of_format */0
                }
              },
              "1": "a %!"
            }), true) && Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 10,
                name: "Flush",
                length: 1,
                "0": /* End_of_format */0
              },
              "1": "%!"
            }), true) && Curry._1(Scanf.sscanf(" ", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* constructor */{
                  tag: 10,
                  name: "Flush",
                  length: 1,
                  "0": /* End_of_format */0
                }
              },
              "1": " %!"
            }), true) && Curry._1(Scanf.sscanf("", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* constructor */{
                  tag: 10,
                  name: "Flush",
                  length: 1,
                  "0": /* End_of_format */0
                }
              },
              "1": " %!"
            }), true)) {
    return Curry._1(Scanf.sscanf("", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 10,
                        name: "Flush",
                        length: 1,
                        "0": /* constructor */{
                          tag: 10,
                          name: "Flush",
                          length: 1,
                          "0": /* End_of_format */0
                        }
                      }
                    },
                    "1": " %!%!"
                  }), true);
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1020, characters 5-12", test38(/* () */0));

function test39(param) {
  var is_empty_buff = function (ib) {
    if (Scanf.Scanning.beginning_of_input(ib)) {
      return Scanf.Scanning.end_of_input(ib);
    } else {
      return false;
    }
  };
  var ib = Scanf.Scanning.from_string("");
  if (is_empty_buff(ib)) {
    return is_empty_buff(ib);
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1036, characters 5-12", test39(/* () */0));

function test40(param) {
  var ib = Scanf.Scanning.from_string("cba");
  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 20,
                    name: "Scan_char_set",
                    length: 3,
                    "0": undefined,
                    "1": "\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xf9\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
                    "2": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* constructor */{
                        tag: 10,
                        name: "Flush",
                        length: 1,
                        "0": /* End_of_format */0
                      }
                    }
                  },
                  "1": "%[^ab]%s%!"
                }), (function (s1, s2) {
                if (s1 === "c") {
                  return s2 === "ba";
                } else {
                  return false;
                }
              }));
}

test("File \"tscanf_test.ml\", line 1046, characters 5-12", test40(/* () */0));

function test41(param) {
  var ib = Scanf.Scanning.from_string("cba");
  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 20,
                    name: "Scan_char_set",
                    length: 3,
                    "0": undefined,
                    "1": "\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xf1\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
                    "2": /* constructor */{
                      tag: 20,
                      name: "Scan_char_set",
                      length: 3,
                      "0": undefined,
                      "1": "\0\0\0\0\0\0\0\0\0\0\0\0\x0e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                      "2": /* constructor */{
                        tag: 10,
                        name: "Flush",
                        length: 1,
                        "0": /* End_of_format */0
                      }
                    }
                  },
                  "1": "%[^abc]%[cba]%!"
                }), (function (s1, s2) {
                if (s1 === "") {
                  return s2 === "cba";
                } else {
                  return false;
                }
              }));
}

test("File \"tscanf_test.ml\", line 1055, characters 5-12", test41(/* () */0));

function test42(param) {
  var s = "defcbaaghi";
  var ib = Scanf.Scanning.from_string(s);
  if (Curry._1(Scanf.bscanf(ib, /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xf1\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
                "2": /* constructor */{
                  tag: 20,
                  name: "Scan_char_set",
                  length: 3,
                  "0": undefined,
                  "1": "\0\0\0\0\0\0\0\0\0\0\0\0\x0e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                  "2": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* constructor */{
                      tag: 10,
                      name: "Flush",
                      length: 1,
                      "0": /* End_of_format */0
                    }
                  }
                }
              },
              "1": "%[^abc]%[abc]%s%!"
            }), (function (s1, s2, s3) {
            if (s1 === "def" && s2 === "cbaa") {
              return s3 === "ghi";
            } else {
              return false;
            }
          }))) {
    var ib$1 = Scanf.Scanning.from_string(s);
    return Curry._1(Scanf.bscanf(ib$1, /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* constructor */{
                        tag: 17,
                        name: "Formatting_lit",
                        length: 2,
                        "0": /* constructor */{
                          tag: 2,
                          name: "Scan_indic",
                          length: 1,
                          "0": /* "\t" */9
                        },
                        "1": /* End_of_format */0
                      }
                    },
                    "1": "%s@\t"
                  }), (function (s) {
                  return s === "defcbaaghi";
                }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1067, characters 5-12", test42(/* () */0));

var ib$1 = Scanf.Scanning.from_string("");

function test43(param) {
  return Curry._1(Scanf.bscanf(ib$1, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 4,
                    name: "Int",
                    length: 4,
                    "0": /* Int_i */3,
                    "1": /* No_padding */0,
                    "2": /* No_precision */0,
                    "3": /* constructor */{
                      tag: 10,
                      name: "Flush",
                      length: 1,
                      "0": /* End_of_format */0
                    }
                  },
                  "1": "%i%!"
                }), (function (i) {
                return i;
              }));
}

function test44(param) {
  return Curry._1(Scanf.bscanf(ib$1, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 10,
                    name: "Flush",
                    length: 1,
                    "0": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_i */3,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* End_of_format */0
                    }
                  },
                  "1": "%!%i"
                }), (function (i) {
                return i;
              }));
}

Testing.test_raises_this_exc(Caml_builtin_exceptions.end_of_file)(test43, /* () */0) && Testing.test_raises_this_exc(Caml_builtin_exceptions.end_of_file)(test44, /* () */0);

function test45(param) {
  var ib = Scanf.Scanning.from_string("12.2");
  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 20,
                    name: "Scan_char_set",
                    length: 3,
                    "0": undefined,
                    "1": "\0\0\0\0\0\0\xff\x03\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                    "2": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* "." */46,
                      "1": /* constructor */{
                        tag: 20,
                        name: "Scan_char_set",
                        length: 3,
                        "0": undefined,
                        "1": "\0\0\0\0\0\0\xff\x03\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                        "2": /* constructor */{
                          tag: 2,
                          name: "String",
                          length: 2,
                          "0": /* No_padding */0,
                          "1": /* constructor */{
                            tag: 10,
                            name: "Flush",
                            length: 1,
                            "0": /* End_of_format */0
                          }
                        }
                      }
                    }
                  },
                  "1": "%[0-9].%[0-9]%s%!"
                }), (function (s1, s2, s3) {
                if (s1 === "12" && s2 === "2") {
                  return s3 === "";
                } else {
                  return false;
                }
              }));
}

test("File \"tscanf_test.ml\", line 1090, characters 5-12", test45(/* () */0));

function test46(param) {
  return Curry._3(Printf.sprintf(/* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 4,
                    name: "Int",
                    length: 4,
                    "0": /* Int_i */3,
                    "1": /* No_padding */0,
                    "2": /* No_precision */0,
                    "3": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 14,
                        name: "Format_subst",
                        length: 3,
                        "0": undefined,
                        "1": /* constructor */{
                          tag: 1,
                          name: "String_ty",
                          length: 1,
                          "0": /* End_of_fmtty */0
                        },
                        "2": /* constructor */{
                          tag: 12,
                          name: "Char_literal",
                          length: 2,
                          "0": /* "." */46,
                          "1": /* End_of_format */0
                        }
                      }
                    }
                  },
                  "1": "%i %(%s%)."
                }), 1, /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 11,
                name: "String_literal",
                length: 2,
                "0": "spells one, ",
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* End_of_format */0
                }
              },
              "1": "spells one, %s"
            }, "in english");
}

function test47(param) {
  return Curry._3(Printf.sprintf(/* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 4,
                    name: "Int",
                    length: 4,
                    "0": /* Int_i */3,
                    "1": /* No_padding */0,
                    "2": /* No_precision */0,
                    "3": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* " " */32,
                      "1": /* constructor */{
                        tag: 13,
                        name: "Format_arg",
                        length: 3,
                        "0": undefined,
                        "1": /* constructor */{
                          tag: 1,
                          name: "String_ty",
                          length: 1,
                          "0": /* End_of_fmtty */0
                        },
                        "2": /* constructor */{
                          tag: 11,
                          name: "String_literal",
                          length: 2,
                          "0": ", ",
                          "1": /* constructor */{
                            tag: 2,
                            name: "String",
                            length: 2,
                            "0": /* No_padding */0,
                            "1": /* constructor */{
                              tag: 12,
                              name: "Char_literal",
                              length: 2,
                              "0": /* "." */46,
                              "1": /* End_of_format */0
                            }
                          }
                        }
                      }
                    }
                  },
                  "1": "%i %{%s%}, %s."
                }), 1, /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 11,
                name: "String_literal",
                length: 2,
                "0": "spells one ",
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* End_of_format */0
                }
              },
              "1": "spells one %s"
            }, "in english");
}

test("File \"tscanf_test.ml\", line 1104, characters 5-12", test46(/* () */0) === "1 spells one, in english.");

test("File \"tscanf_test.ml\", line 1106, characters 5-12", test47(/* () */0) === "1 %s, in english.");

function test48(param) {
  var test_meta_read = function (s, fmt, efmt) {
    return Caml_obj.caml_equal(Scanf.format_from_string(s, fmt), efmt);
  };
  var fmt = /* constructor */{
    tag: 0,
    name: "Format",
    length: 2,
    "0": /* constructor */{
      tag: 4,
      name: "Int",
      length: 4,
      "0": /* Int_i */3,
      "1": /* No_padding */0,
      "2": /* No_precision */0,
      "3": /* End_of_format */0
    },
    "1": "%i"
  };
  if (test_meta_read("%i", fmt, fmt) && test_meta_read("%i", /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 4,
            name: "Int",
            length: 4,
            "0": /* Int_d */0,
            "1": /* No_padding */0,
            "2": /* No_precision */0,
            "3": /* End_of_format */0
          },
          "1": "%d"
        }, /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 4,
            name: "Int",
            length: 4,
            "0": /* Int_i */3,
            "1": /* No_padding */0,
            "2": /* No_precision */0,
            "3": /* End_of_format */0
          },
          "1": "%i"
        }) && Curry._1(Scanf.sscanf("12 \"%i\"89 ", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 4,
                name: "Int",
                length: 4,
                "0": /* Int_i */3,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* " " */32,
                  "1": /* constructor */{
                    tag: 13,
                    name: "Format_arg",
                    length: 3,
                    "0": undefined,
                    "1": /* constructor */{
                      tag: 2,
                      name: "Int_ty",
                      length: 1,
                      "0": /* End_of_fmtty */0
                    },
                    "2": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* constructor */{
                          tag: 10,
                          name: "Flush",
                          length: 1,
                          "0": /* End_of_format */0
                        }
                      }
                    }
                  }
                }
              },
              "1": "%i %{%d%}%s %!"
            }), (function (i, f, s) {
            if (i === 12 && Caml_obj.caml_equal(f, /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_i */3,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* End_of_format */0
                    },
                    "1": "%i"
                  })) {
              return s === "89";
            } else {
              return false;
            }
          }))) {
    var k = function (s) {
      return Curry._1(Scanf.sscanf(s, /* constructor */{
                      tag: 0,
                      name: "Format",
                      length: 2,
                      "0": /* constructor */{
                        tag: 14,
                        name: "Format_subst",
                        length: 3,
                        "0": undefined,
                        "1": /* constructor */{
                          tag: 6,
                          name: "Float_ty",
                          length: 1,
                          "0": /* End_of_fmtty */0
                        },
                        "2": /* End_of_format */0
                      },
                      "1": "%(%f%)"
                    }), (function (_fmt, i) {
                    return i;
                  }));
    };
    if (k("\" : %1f\": 987654321") === 9.0 && k("\" : %2f\": 987654321") === 98.0 && k("\" : %3f\": 9.87654321") === 9.8 && k("\" : %4f\": 9.87654321") === 9.87) {
      var h = function (s) {
        return Curry._1(Scanf.sscanf(s, /* constructor */{
                        tag: 0,
                        name: "Format",
                        length: 2,
                        "0": /* constructor */{
                          tag: 11,
                          name: "String_literal",
                          length: 2,
                          "0": "Read integers with ",
                          "1": /* constructor */{
                            tag: 14,
                            name: "Format_subst",
                            length: 3,
                            "0": undefined,
                            "1": /* constructor */{
                              tag: 2,
                              name: "Int_ty",
                              length: 1,
                              "0": /* End_of_fmtty */0
                            },
                            "2": /* End_of_format */0
                          }
                        },
                        "1": "Read integers with %(%i%)"
                      }), (function (_fmt, i) {
                      return i;
                    }));
      };
      if (h("Read integers with \"%1d\"987654321") === 9 && h("Read integers with \"%2d\"987654321") === 98 && h("Read integers with \"%3u\"987654321") === 987 && h("Read integers with \"%4x\"987654321") === 39030) {
        var i = function (s) {
          return Curry._1(Scanf.sscanf(s, /* constructor */{
                          tag: 0,
                          name: "Format",
                          length: 2,
                          "0": /* constructor */{
                            tag: 11,
                            name: "String_literal",
                            length: 2,
                            "0": "with ",
                            "1": /* constructor */{
                              tag: 14,
                              name: "Format_subst",
                              length: 3,
                              "0": undefined,
                              "1": /* constructor */{
                                tag: 2,
                                name: "Int_ty",
                                length: 1,
                                "0": /* constructor */{
                                  tag: 1,
                                  name: "String_ty",
                                  length: 1,
                                  "0": /* End_of_fmtty */0
                                }
                              },
                              "2": /* End_of_format */0
                            }
                          },
                          "1": "with %(%i %s%)"
                        }), (function (_fmt, amount, currency) {
                        return /* tuple */[
                                amount,
                                currency
                              ];
                      }));
        };
        if (Caml_obj.caml_equal(i("with \" : %d %s\" :        21 euros"), /* tuple */[
                21,
                "euros"
              ]) && Caml_obj.caml_equal(i("with \" : %d %s\" : 987654321 dollars"), /* tuple */[
                987654321,
                "dollars"
              ]) && Caml_obj.caml_equal(i("with \" : %u %s\" :     54321 pounds"), /* tuple */[
                54321,
                "pounds"
              ]) && Caml_obj.caml_equal(i("with \" : %x %s\" :       321 yens"), /* tuple */[
                801,
                "yens"
              ])) {
          var j = function (s) {
            return Curry._1(Scanf.sscanf(s, /* constructor */{
                            tag: 0,
                            name: "Format",
                            length: 2,
                            "0": /* constructor */{
                              tag: 11,
                              name: "String_literal",
                              length: 2,
                              "0": "with ",
                              "1": /* constructor */{
                                tag: 14,
                                name: "Format_subst",
                                length: 3,
                                "0": undefined,
                                "1": /* constructor */{
                                  tag: 2,
                                  name: "Int_ty",
                                  length: 1,
                                  "0": /* constructor */{
                                    tag: 1,
                                    name: "String_ty",
                                    length: 1,
                                    "0": /* End_of_fmtty */0
                                  }
                                },
                                "2": /* End_of_format */0
                              }
                            },
                            "1": "with %(%i %_s %s%)"
                          }), (function (_fmt, amount, currency) {
                          return /* tuple */[
                                  amount,
                                  currency
                                ];
                        }));
          };
          if (Caml_obj.caml_equal(j("with \" : %1d %_s %s\" : 987654321 euros"), /* tuple */[
                  9,
                  "euros"
                ]) && Caml_obj.caml_equal(j("with \" : %2d %_s %s\" : 987654321 dollars"), /* tuple */[
                  98,
                  "dollars"
                ]) && Caml_obj.caml_equal(j("with \" : %3u %_s %s\" : 987654321 pounds"), /* tuple */[
                  987,
                  "pounds"
                ])) {
            return Caml_obj.caml_equal(j("with \" : %4x %_s %s\" : 987654321 yens"), /* tuple */[
                        39030,
                        "yens"
                      ]);
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1157, characters 5-12", test48(/* () */0));

function test49(param) {
  if (Curry._1(Scanf.sscanf("as", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\0\0\0\0\0\0\0\0\0\0\0\x10\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                "2": /* End_of_format */0
              },
              "1": "%[\\]"
            }), (function (s) {
            return s === "";
          })) && Curry._1(Scanf.sscanf("as", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\0\0\0\0\0\0\0\0\0\0\0\x10\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                "2": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* End_of_format */0
                }
              },
              "1": "%[\\]%s"
            }), (function (s, t) {
            return s === "" ? t === "as" : false;
          })) && Curry._1(Scanf.sscanf("as", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\0\0\0\0\0\0\0\0\0\0\0\x10\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                "2": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 10,
                    name: "Flush",
                    length: 1,
                    "0": /* End_of_format */0
                  }
                }
              },
              "1": "%[\\]%s%!"
            }), (function (s, t) {
            return s === "" ? t === "as" : false;
          })) && Curry._1(Scanf.sscanf("as", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\0\0\0\0\0@\0\0\0\0\0\0\x02\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                "2": /* End_of_format */0
              },
              "1": "%[a..z]"
            }), (function (s) {
            return s === "a";
          })) && Curry._1(Scanf.sscanf("as", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\0\0\0\0\0\0\0\0\0\0\0\0\xfe\xff\xff\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                "2": /* End_of_format */0
              },
              "1": "%[a-z]"
            }), (function (s) {
            return s === "as";
          })) && Curry._1(Scanf.sscanf("as", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\0\0\0\0\0@\0\0\0\0\0\0\x02\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                "2": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* End_of_format */0
                }
              },
              "1": "%[a..z]%s"
            }), (function (s, t) {
            return s === "a" ? t === "s" : false;
          })) && Curry._1(Scanf.sscanf("as", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\0\0\0\0\0\0\0\0\0\0\0\0\xfe\xff\xff\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                "2": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* End_of_format */0
                }
              },
              "1": "%[a-z]%s"
            }), (function (s, t) {
            return s === "as" ? t === "" : false;
          })) && Curry._1(Scanf.sscanf("-as", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\0\0\0\0\0 \0\0\0\0\0\0\xfe\xff\xff\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                "2": /* End_of_format */0
              },
              "1": "%[-a-z]"
            }), (function (s) {
            return s === "-as";
          })) && Curry._1(Scanf.sscanf("-as", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\0\0\0\0\0 \0\0\0\0\0\0\xfe\xff\xff\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                "2": /* constructor */{
                  tag: 17,
                  name: "Formatting_lit",
                  length: 2,
                  "0": /* constructor */{
                    tag: 2,
                    name: "Scan_indic",
                    length: 1,
                    "0": /* "s" */115
                  },
                  "1": /* End_of_format */0
                }
              },
              "1": "%[-a-z]@s"
            }), (function (s) {
            return s === "-a";
          })) && Curry._1(Scanf.sscanf("-as", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* "-" */45,
                "1": /* constructor */{
                  tag: 20,
                  name: "Scan_char_set",
                  length: 3,
                  "0": undefined,
                  "1": "\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                  "2": /* constructor */{
                    tag: 17,
                    name: "Formatting_lit",
                    length: 2,
                    "0": /* constructor */{
                      tag: 2,
                      name: "Scan_indic",
                      length: 1,
                      "0": /* "s" */115
                    },
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": "-%[a]@s"
            }), (function (s) {
            return s === "a";
          })) && Curry._1(Scanf.sscanf("-asb", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* "-" */45,
                "1": /* constructor */{
                  tag: 20,
                  name: "Scan_char_set",
                  length: 3,
                  "0": undefined,
                  "1": "\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                  "2": /* constructor */{
                    tag: 17,
                    name: "Formatting_lit",
                    length: 2,
                    "0": /* constructor */{
                      tag: 2,
                      name: "Scan_indic",
                      length: 1,
                      "0": /* "s" */115
                    },
                    "1": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* "b" */98,
                      "1": /* constructor */{
                        tag: 10,
                        name: "Flush",
                        length: 1,
                        "0": /* End_of_format */0
                      }
                    }
                  }
                }
              },
              "1": "-%[a]@sb%!"
            }), (function (s) {
            return s === "a";
          }))) {
    return Curry._1(Scanf.sscanf("-asb", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* "-" */45,
                      "1": /* constructor */{
                        tag: 20,
                        name: "Scan_char_set",
                        length: 3,
                        "0": undefined,
                        "1": "\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                        "2": /* constructor */{
                          tag: 17,
                          name: "Formatting_lit",
                          length: 2,
                          "0": /* constructor */{
                            tag: 2,
                            name: "Scan_indic",
                            length: 1,
                            "0": /* "s" */115
                          },
                          "1": /* constructor */{
                            tag: 2,
                            name: "String",
                            length: 2,
                            "0": /* No_padding */0,
                            "1": /* End_of_format */0
                          }
                        }
                      }
                    },
                    "1": "-%[a]@s%s"
                  }), (function (s, t) {
                  if (s === "a") {
                    return t === "b";
                  } else {
                    return false;
                  }
                }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1176, characters 5-12", test49(/* () */0));

function next_char(ob, param) {
  var s = $$Buffer.contents(ob);
  var len = s.length;
  if (len === 0) {
    throw Caml_builtin_exceptions.end_of_file;
  }
  var c = Caml_string.get(s, 0);
  ob[/* position */1] = 0;
  $$Buffer.add_string(ob, $$String.sub(s, 1, len - 1 | 0));
  return c;
}

function send_string(ob, s) {
  $$Buffer.add_string(ob, s);
  return $$Buffer.add_char(ob, /* "\n" */10);
}

function send_int(ob, i) {
  return send_string(ob, String(i));
}

function writer(ib, ob) {
  return Curry._1(Scanf.bscanf(ib, /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* "\n" */10,
                      "1": /* End_of_format */0
                    }
                  },
                  "1": "%s\n"
                }), (function (s) {
                switch (s) {
                  case "start" :
                      send_string(ob, "Hello World!");
                      return reader(ib, ob);
                  case "stop" :
                      return Curry._1(Scanf.bscanf(ib, /* constructor */{
                                      tag: 0,
                                      name: "Format",
                                      length: 2,
                                      "0": /* constructor */{
                                        tag: 4,
                                        name: "Int",
                                        length: 4,
                                        "0": /* Int_i */3,
                                        "1": /* No_padding */0,
                                        "2": /* No_precision */0,
                                        "3": /* End_of_format */0
                                      },
                                      "1": "%i"
                                    }), (function (i) {
                                    return i;
                                  }));
                  default:
                    var i = Caml_format.caml_int_of_string(s);
                    send_string(ob, String(i));
                    return reader(ib, ob);
                }
              }));
}

var count = /* record */[/* contents */0];

function reader(ib, ob) {
  if (Scanf.Scanning.beginning_of_input(ib)) {
    count[0] = 0;
    send_string(ob, "start");
    return writer(ib, ob);
  } else {
    return Curry._1(Scanf.bscanf(ib, /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 20,
                      name: "Scan_char_set",
                      length: 3,
                      "0": undefined,
                      "1": "\xff\xfb\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
                      "2": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* "\n" */10,
                        "1": /* End_of_format */0
                      }
                    },
                    "1": "%[^\n]\n"
                  }), (function (s) {
                  if (s === "stop") {
                    send_string(ob, "stop");
                    return writer(ib, ob);
                  } else {
                    var l = s.length;
                    count[0] = l + count[0] | 0;
                    if (count[0] >= 100) {
                      send_string(ob, "stop");
                      send_string(ob, String(count[0]));
                    } else {
                      send_string(ob, String(l));
                    }
                    return writer(ib, ob);
                  }
                }));
  }
}

function go(param) {
  var ob = $$Buffer.create(17);
  var ib = Scanf.Scanning.from_function((function (param) {
          return next_char(ob, param);
        }));
  return reader(ib, ob);
}

function test50(param) {
  return go(/* () */0) === 100;
}

test("File \"tscanf_test.ml\", line 1228, characters 5-12", go(/* () */0) === 100);

function test51(param) {
  if (Curry._1(Scanf.sscanf("Hello", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* End_of_format */0
              },
              "1": "%s"
            }), id) === "Hello" && Curry._1(Scanf.sscanf("Hello\n", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* End_of_format */0
                }
              },
              "1": "%s\n"
            }), id) === "Hello" && Curry._1(Scanf.sscanf("Hello\n", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* "\n" */10,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": "%s%s\n"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "" : false;
          })) && Curry._1(Scanf.sscanf("Hello\nWorld", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* constructor */{
                      tag: 10,
                      name: "Flush",
                      length: 1,
                      "0": /* End_of_format */0
                    }
                  }
                }
              },
              "1": "%s\n%s%!"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "World" : false;
          })) && Curry._1(Scanf.sscanf("Hello\nWorld!", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": "%s\n%s"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "World!" : false;
          })) && Curry._1(Scanf.sscanf("Hello\n", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 17,
                  name: "Formatting_lit",
                  length: 2,
                  "0": /* Force_newline */3,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": "%s@\n%s"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "" : false;
          }))) {
    return Curry._1(Scanf.sscanf("Hello \n", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* constructor */{
                        tag: 17,
                        name: "Formatting_lit",
                        length: 2,
                        "0": /* Force_newline */3,
                        "1": /* constructor */{
                          tag: 2,
                          name: "String",
                          length: 2,
                          "0": /* No_padding */0,
                          "1": /* End_of_format */0
                        }
                      }
                    },
                    "1": "%s@\n%s"
                  }), (function (s1, s2) {
                  if (s1 === "Hello ") {
                    return s2 === "";
                  } else {
                    return false;
                  }
                }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1248, characters 5-12", test51(/* () */0));

function test52(param) {
  if (Curry._1(Scanf.sscanf("Hello\n", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 17,
                  name: "Formatting_lit",
                  length: 2,
                  "0": /* Force_newline */3,
                  "1": /* End_of_format */0
                }
              },
              "1": "%s@\n"
            }), id) === "Hello" && Curry._1(Scanf.sscanf("Hello", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 17,
                  name: "Formatting_lit",
                  length: 2,
                  "0": /* Force_newline */3,
                  "1": /* End_of_format */0
                }
              },
              "1": "%s@\n"
            }), id) === "Hello" && Curry._1(Scanf.sscanf("Hello", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 17,
                    name: "Formatting_lit",
                    length: 2,
                    "0": /* Force_newline */3,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": "%s%s@\n"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "" : false;
          })) && Curry._1(Scanf.sscanf("Hello\nWorld", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 17,
                  name: "Formatting_lit",
                  length: 2,
                  "0": /* Force_newline */3,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* constructor */{
                      tag: 10,
                      name: "Flush",
                      length: 1,
                      "0": /* End_of_format */0
                    }
                  }
                }
              },
              "1": "%s@\n%s%!"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "World" : false;
          })) && Curry._1(Scanf.sscanf("Hello\nWorld!", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 17,
                  name: "Formatting_lit",
                  length: 2,
                  "0": /* Force_newline */3,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* constructor */{
                      tag: 17,
                      name: "Formatting_lit",
                      length: 2,
                      "0": /* Force_newline */3,
                      "1": /* End_of_format */0
                    }
                  }
                }
              },
              "1": "%s@\n%s@\n"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "World!" : false;
          })) && Curry._1(Scanf.sscanf("Hello\n", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 17,
                  name: "Formatting_lit",
                  length: 2,
                  "0": /* Force_newline */3,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": "%s@\n%s"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "" : false;
          })) && Curry._1(Scanf.sscanf("Hello \n", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 17,
                    name: "Formatting_lit",
                    length: 2,
                    "0": /* Force_newline */3,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": "%s%s@\n"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === " " : false;
          })) && Curry._1(Scanf.sscanf("Hello \n", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 23,
                    name: "Ignored_param",
                    length: 2,
                    "0": /* constructor */{
                      tag: 9,
                      name: "Ignored_scan_char_set",
                      length: 2,
                      "0": 1,
                      "1": "\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"
                    },
                    "1": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* "\n" */10,
                      "1": /* End_of_format */0
                    }
                  }
                }
              },
              "1": "%s%s%_1[ ]\n"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "" : false;
          })) && Curry._1(Scanf.sscanf("Hello \n", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 23,
                  name: "Ignored_param",
                  length: 2,
                  "0": /* constructor */{
                    tag: 9,
                    name: "Ignored_scan_char_set",
                    length: 2,
                    "0": 1,
                    "1": "\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"
                  },
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* constructor */{
                      tag: 12,
                      name: "Char_literal",
                      length: 2,
                      "0": /* "\n" */10,
                      "1": /* End_of_format */0
                    }
                  }
                }
              },
              "1": "%s%_1[ ]%s\n"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "" : false;
          })) && Curry._1(Scanf.sscanf("Hello\nWorld", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* constructor */{
                      tag: 10,
                      name: "Flush",
                      length: 1,
                      "0": /* End_of_format */0
                    }
                  }
                }
              },
              "1": "%s\n%s%!"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "World" : false;
          })) && Curry._1(Scanf.sscanf("Hello\nWorld!", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* constructor */{
                      tag: 10,
                      name: "Flush",
                      length: 1,
                      "0": /* End_of_format */0
                    }
                  }
                }
              },
              "1": "%s\n%s%!"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "World!" : false;
          })) && Curry._1(Scanf.sscanf("Hello\nWorld!", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "\n" */10,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* constructor */{
                      tag: 17,
                      name: "Formatting_lit",
                      length: 2,
                      "0": /* constructor */{
                        tag: 2,
                        name: "Scan_indic",
                        length: 1,
                        "0": /* "!" */33
                      },
                      "1": /* constructor */{
                        tag: 10,
                        name: "Flush",
                        length: 1,
                        "0": /* End_of_format */0
                      }
                    }
                  }
                }
              },
              "1": "%s\n%s@!%!"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "World" : false;
          })) && Curry._1(Scanf.sscanf("Hello{foo}", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 18,
                  name: "Formatting_gen",
                  length: 2,
                  "0": /* constructor */{
                    tag: 0,
                    name: "Open_tag",
                    length: 1,
                    "0": /* constructor */{
                      tag: 0,
                      name: "Format",
                      length: 2,
                      "0": /* End_of_format */0,
                      "1": ""
                    }
                  },
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": "%s@{%s"
            }), (function (s1, s2) {
            return s1 === "Hello" ? s2 === "foo}" : false;
          }))) {
    return Curry._1(Scanf.sscanf("Hello[foo]", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* No_padding */0,
                      "1": /* constructor */{
                        tag: 18,
                        name: "Formatting_gen",
                        length: 2,
                        "0": /* constructor */{
                          tag: 1,
                          name: "Open_box",
                          length: 1,
                          "0": /* constructor */{
                            tag: 0,
                            name: "Format",
                            length: 2,
                            "0": /* End_of_format */0,
                            "1": ""
                          }
                        },
                        "1": /* constructor */{
                          tag: 2,
                          name: "String",
                          length: 2,
                          "0": /* No_padding */0,
                          "1": /* End_of_format */0
                        }
                      }
                    },
                    "1": "%s@[%s"
                  }), (function (s1, s2) {
                  if (s1 === "Hello") {
                    return s2 === "foo]";
                  } else {
                    return false;
                  }
                }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1286, characters 5-12", test52(/* () */0));

function test53(param) {
  if (Curry._1(Scanf.sscanf("123", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 6,
                name: "Nativeint",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%nd"
            }), id) === 123 && Curry._1(Scanf.sscanf("124", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 6,
                name: "Nativeint",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%nd"
            }), (function (i) {
            return i - 1 === 123;
          })) && Curry._1(Scanf.sscanf("123", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 5,
                name: "Int32",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%ld"
            }), id) === 123 && Curry._1(Scanf.sscanf("124", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 5,
                name: "Int32",
                length: 4,
                "0": /* Int_d */0,
                "1": /* No_padding */0,
                "2": /* No_precision */0,
                "3": /* End_of_format */0
              },
              "1": "%ld"
            }), (function (i) {
            return (i + 1 | 0) === 125;
          })) && Caml_int64.eq(Curry._1(Scanf.sscanf("123", /* constructor */{
                  tag: 0,
                  name: "Format",
                  length: 2,
                  "0": /* constructor */{
                    tag: 7,
                    name: "Int64",
                    length: 4,
                    "0": /* Int_d */0,
                    "1": /* No_padding */0,
                    "2": /* No_precision */0,
                    "3": /* End_of_format */0
                  },
                  "1": "%Ld"
                }), id), /* int64 */[
          /* hi */0,
          /* lo */123
        ])) {
    return Curry._1(Scanf.sscanf("124", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 7,
                      name: "Int64",
                      length: 4,
                      "0": /* Int_d */0,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* End_of_format */0
                    },
                    "1": "%Ld"
                  }), (function (i) {
                  return Caml_int64.eq(Caml_int64.sub(i, /* int64 */[
                                  /* hi */0,
                                  /* lo */1
                                ]), /* int64 */[
                              /* hi */0,
                              /* lo */123
                            ]);
                }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1301, characters 5-12", test53(/* () */0));

function test56(param) {
  var g = function (s) {
    return Curry._1(Scanf.sscanf(s, /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_d */0,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 21,
                        name: "Scan_get_counter",
                        length: 2,
                        "0": /* Char_counter */1,
                        "1": /* End_of_format */0
                      }
                    },
                    "1": "%d%n"
                  }), (function (i, n) {
                  return /* tuple */[
                          i,
                          n
                        ];
                }));
  };
  if (Caml_obj.caml_equal(g("99"), /* tuple */[
          99,
          2
        ]) && Caml_obj.caml_equal(g("99 syntaxes all in a row"), /* tuple */[
          99,
          2
        ])) {
    return Caml_obj.caml_equal(g("-20 degrees Celsius"), /* tuple */[
                -20,
                3
              ]);
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1316, characters 5-12", test56(/* () */0));

function test57(param) {
  var test_format_scan = function (s, fmt, efmt) {
    return Caml_obj.caml_equal(Scanf.format_from_string(s, fmt), efmt);
  };
  if (test_format_scan(" %i ", /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 4,
            name: "Int",
            length: 4,
            "0": /* Int_i */3,
            "1": /* No_padding */0,
            "2": /* No_precision */0,
            "3": /* End_of_format */0
          },
          "1": "%i"
        }, /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 12,
            name: "Char_literal",
            length: 2,
            "0": /* " " */32,
            "1": /* constructor */{
              tag: 4,
              name: "Int",
              length: 4,
              "0": /* Int_i */3,
              "1": /* No_padding */0,
              "2": /* No_precision */0,
              "3": /* constructor */{
                tag: 12,
                name: "Char_literal",
                length: 2,
                "0": /* " " */32,
                "1": /* End_of_format */0
              }
            }
          },
          "1": " %i "
        }) && test_format_scan("%i", /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 4,
            name: "Int",
            length: 4,
            "0": /* Int_d */0,
            "1": /* No_padding */0,
            "2": /* No_precision */0,
            "3": /* End_of_format */0
          },
          "1": "%d"
        }, /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 4,
            name: "Int",
            length: 4,
            "0": /* Int_i */3,
            "1": /* No_padding */0,
            "2": /* No_precision */0,
            "3": /* End_of_format */0
          },
          "1": "%i"
        }) && test_format_scan("Read an int %i then a string %s.", /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 11,
            name: "String_literal",
            length: 2,
            "0": "Spec",
            "1": /* constructor */{
              tag: 4,
              name: "Int",
              length: 4,
              "0": /* Int_d */0,
              "1": /* No_padding */0,
              "2": /* No_precision */0,
              "3": /* constructor */{
                tag: 11,
                name: "String_literal",
                length: 2,
                "0": "ifi",
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 11,
                    name: "String_literal",
                    length: 2,
                    "0": "cation",
                    "1": /* End_of_format */0
                  }
                }
              }
            }
          },
          "1": "Spec%difi%scation"
        }, /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 11,
            name: "String_literal",
            length: 2,
            "0": "Read an int ",
            "1": /* constructor */{
              tag: 4,
              name: "Int",
              length: 4,
              "0": /* Int_i */3,
              "1": /* No_padding */0,
              "2": /* No_precision */0,
              "3": /* constructor */{
                tag: 11,
                name: "String_literal",
                length: 2,
                "0": " then a string ",
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* "." */46,
                    "1": /* End_of_format */0
                  }
                }
              }
            }
          },
          "1": "Read an int %i then a string %s."
        }) && test_format_scan("Read an int %i then a string \"%s\".", /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 11,
            name: "String_literal",
            length: 2,
            "0": "Spec",
            "1": /* constructor */{
              tag: 4,
              name: "Int",
              length: 4,
              "0": /* Int_d */0,
              "1": /* No_padding */0,
              "2": /* No_precision */0,
              "3": /* constructor */{
                tag: 11,
                name: "String_literal",
                length: 2,
                "0": "ifi",
                "1": /* constructor */{
                  tag: 3,
                  name: "Caml_string",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 11,
                    name: "String_literal",
                    length: 2,
                    "0": "cation",
                    "1": /* End_of_format */0
                  }
                }
              }
            }
          },
          "1": "Spec%difi%Scation"
        }, /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 11,
            name: "String_literal",
            length: 2,
            "0": "Read an int ",
            "1": /* constructor */{
              tag: 4,
              name: "Int",
              length: 4,
              "0": /* Int_i */3,
              "1": /* No_padding */0,
              "2": /* No_precision */0,
              "3": /* constructor */{
                tag: 11,
                name: "String_literal",
                length: 2,
                "0": " then a string \"",
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 11,
                    name: "String_literal",
                    length: 2,
                    "0": "\".",
                    "1": /* End_of_format */0
                  }
                }
              }
            }
          },
          "1": "Read an int %i then a string \"%s\"."
        }) && test_format_scan("Read an int %i then a string \"%s\".", /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 11,
            name: "String_literal",
            length: 2,
            "0": "Spec",
            "1": /* constructor */{
              tag: 4,
              name: "Int",
              length: 4,
              "0": /* Int_d */0,
              "1": /* No_padding */0,
              "2": /* No_precision */0,
              "3": /* constructor */{
                tag: 11,
                name: "String_literal",
                length: 2,
                "0": "ifi",
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 11,
                    name: "String_literal",
                    length: 2,
                    "0": "cation",
                    "1": /* End_of_format */0
                  }
                }
              }
            }
          },
          "1": "Spec%difi%scation"
        }, /* constructor */{
          tag: 0,
          name: "Format",
          length: 2,
          "0": /* constructor */{
            tag: 11,
            name: "String_literal",
            length: 2,
            "0": "Read an int ",
            "1": /* constructor */{
              tag: 4,
              name: "Int",
              length: 4,
              "0": /* Int_i */3,
              "1": /* No_padding */0,
              "2": /* No_precision */0,
              "3": /* constructor */{
                tag: 11,
                name: "String_literal",
                length: 2,
                "0": " then a string \"",
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* constructor */{
                    tag: 11,
                    name: "String_literal",
                    length: 2,
                    "0": "\".",
                    "1": /* End_of_format */0
                  }
                }
              }
            }
          },
          "1": "Read an int %i then a string \"%s\"."
        })) {
    return Curry._1(Scanf.sscanf("12 \"%i\"89 ", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 4,
                      name: "Int",
                      length: 4,
                      "0": /* Int_i */3,
                      "1": /* No_padding */0,
                      "2": /* No_precision */0,
                      "3": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* " " */32,
                        "1": /* constructor */{
                          tag: 13,
                          name: "Format_arg",
                          length: 3,
                          "0": undefined,
                          "1": /* constructor */{
                            tag: 2,
                            name: "Int_ty",
                            length: 1,
                            "0": /* End_of_fmtty */0
                          },
                          "2": /* constructor */{
                            tag: 2,
                            name: "String",
                            length: 2,
                            "0": /* No_padding */0,
                            "1": /* constructor */{
                              tag: 12,
                              name: "Char_literal",
                              length: 2,
                              "0": /* " " */32,
                              "1": /* constructor */{
                                tag: 10,
                                name: "Flush",
                                length: 1,
                                "0": /* End_of_format */0
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": "%i %{%d%}%s %!"
                  }), (function (i, f, s) {
                  if (i === 12 && Caml_obj.caml_equal(f, /* constructor */{
                          tag: 0,
                          name: "Format",
                          length: 2,
                          "0": /* constructor */{
                            tag: 4,
                            name: "Int",
                            length: 4,
                            "0": /* Int_i */3,
                            "1": /* No_padding */0,
                            "2": /* No_precision */0,
                            "3": /* End_of_format */0
                          },
                          "1": "%i"
                        })) {
                    return s === "89";
                  } else {
                    return false;
                  }
                }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1357, characters 5-12", test57(/* () */0));

function test58(param) {
  if (Curry._1(Scanf.sscanf("string1%string2", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 17,
                  name: "Formatting_lit",
                  length: 2,
                  "0": /* Escaped_percent */6,
                  "1": /* constructor */{
                    tag: 12,
                    name: "Char_literal",
                    length: 2,
                    "0": /* "s" */115,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": "%s@%%s"
            }), id) === "string1" && Curry._1(Scanf.sscanf("string1%string2", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* No_padding */0,
                "1": /* constructor */{
                  tag: 17,
                  name: "Formatting_lit",
                  length: 2,
                  "0": /* Escaped_percent */6,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": "%s@%%%s"
            }), (function (prim, prim$1) {
            return prim + prim$1;
          })) === "string1string2" && Curry._1(Scanf.sscanf("string1@string2", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 20,
                name: "Scan_char_set",
                length: 3,
                "0": undefined,
                "1": "\0\0\0\0\0\0\xff\x03\0\0\0\0\xfe\xff\xff\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                "2": /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  length: 2,
                  "0": /* "@" */64,
                  "1": /* constructor */{
                    tag: 2,
                    name: "String",
                    length: 2,
                    "0": /* No_padding */0,
                    "1": /* End_of_format */0
                  }
                }
              },
              "1": "%[a-z0-9]@%s"
            }), (function (prim, prim$1) {
            return prim + prim$1;
          })) === "string1string2") {
    return Curry._1(Scanf.sscanf("string1@%string2", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 20,
                      name: "Scan_char_set",
                      length: 3,
                      "0": undefined,
                      "1": "\0\0\0\0\0\0\xff\x03\0\0\0\0\xfe\xff\xff\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                      "2": /* constructor */{
                        tag: 12,
                        name: "Char_literal",
                        length: 2,
                        "0": /* "@" */64,
                        "1": /* constructor */{
                          tag: 12,
                          name: "Char_literal",
                          length: 2,
                          "0": /* "%" */37,
                          "1": /* constructor */{
                            tag: 2,
                            name: "String",
                            length: 2,
                            "0": /* No_padding */0,
                            "1": /* End_of_format */0
                          }
                        }
                      }
                    },
                    "1": "%[a-z0-9]%@%%%s"
                  }), (function (prim, prim$1) {
                  return prim + prim$1;
                })) === "string1string2";
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1367, characters 5-12", test58(/* () */0));

test("File \"tscanf_test.ml\", line 1371, characters 14-21", true);

function test60(param) {
  if (Curry._1(Scanf.sscanf("abc", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 22,
                name: "Scan_next_char",
                length: 1,
                "0": /* constructor */{
                  tag: 22,
                  name: "Scan_next_char",
                  length: 1,
                  "0": /* constructor */{
                    tag: 0,
                    name: "Char",
                    length: 1,
                    "0": /* constructor */{
                      tag: 21,
                      name: "Scan_get_counter",
                      length: 2,
                      "0": /* Char_counter */1,
                      "1": /* End_of_format */0
                    }
                  }
                }
              },
              "1": "%0c%0c%c%n"
            }), (function (c1, c2, c3, n) {
            return c1 === /* "a" */97 && c2 === /* "a" */97 && c3 === /* "a" */97 ? n === 1 : false;
          })) && Curry._1(Scanf.sscanf("abc", /* constructor */{
              tag: 0,
              name: "Format",
              length: 2,
              "0": /* constructor */{
                tag: 2,
                name: "String",
                length: 2,
                "0": /* constructor */{
                  tag: 0,
                  name: "Lit_padding",
                  length: 2,
                  "0": /* Right */1,
                  "1": 0
                },
                "1": /* constructor */{
                  tag: 2,
                  name: "String",
                  length: 2,
                  "0": /* No_padding */0,
                  "1": /* End_of_format */0
                }
              },
              "1": "%0s%s"
            }), (function (s1, s2) {
            return s1 === "" ? s2 === "abc" : false;
          }))) {
    return Curry._1(Scanf.sscanf("abc", /* constructor */{
                    tag: 0,
                    name: "Format",
                    length: 2,
                    "0": /* constructor */{
                      tag: 2,
                      name: "String",
                      length: 2,
                      "0": /* constructor */{
                        tag: 0,
                        name: "Lit_padding",
                        length: 2,
                        "0": /* Right */1,
                        "1": 1
                      },
                      "1": /* constructor */{
                        tag: 2,
                        name: "String",
                        length: 2,
                        "0": /* No_padding */0,
                        "1": /* End_of_format */0
                      }
                    },
                    "1": "%1s%s"
                  }), (function (s1, s2) {
                  if (s1 === "a") {
                    return s2 === "bc";
                  } else {
                    return false;
                  }
                }));
  } else {
    return false;
  }
}

test("File \"tscanf_test.ml\", line 1414, characters 5-12", test60(/* () */0));

Mt.from_pair_suites("Tscanf_test", suites[0]);

var tscanf_data_file_lines = /* constructor */{
  tag: 0,
  name: "::",
  length: 2,
  "0": /* tuple */[
    "Objective",
    "Caml"
  ],
  "1": /* [] */0
};

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.test = test;
exports.id = id;
exports.test0 = test0;
exports.test1 = test1;
exports.test2 = test2;
exports.test3 = test3;
exports.test4 = test4;
exports.test5 = test5;
exports.test6 = test6;
exports.test7 = test7;
exports.verify_read = verify_read;
exports.verify_scan_Chars = verify_scan_Chars;
exports.test8 = test8;
exports.unit = unit;
exports.test_fmt = test_fmt;
exports.test9_string = test9_string;
exports.test_S = test_S;
exports.test9 = test9;
exports.test10 = test10;
exports.test11 = test11;
exports.test110 = test110;
exports.test111 = test111;
exports.ib = ib;
exports.f = f;
exports.test12 = test12;
exports.g = g;
exports.test13 = test13;
exports.test14 = test14;
exports.test15 = test15;
exports.test16 = test16;
exports.test17 = test17;
exports.test18 = test18;
exports.test19 = test19;
exports.test20 = test20;
exports.test21 = test21;
exports.scan_rest = scan_rest$1;
exports.test22 = test22;
exports.test23 = test23;
exports.test24 = test24;
exports.test25 = test25;
exports.test26 = test26;
exports.test27 = test27;
exports.scan_String_elem = scan_String_elem;
exports.scan_String_list = scan_String_list;
exports.test28 = test28;
exports.scan_int_elem = scan_int_elem$1;
exports.test29 = test29;
exports.scan_string_elem = scan_string_elem$1;
exports.test30 = test30;
exports.scan_elem = scan_elem;
exports.test31 = test31;
exports.test32 = test32;
exports.test33 = test33;
exports.test34 = test34;
exports.scan_elems = scan_elems$9;
exports.scan_list = scan_list$4;
exports.scan_float = scan_float;
exports.scan_int_list = scan_int_list$8;
exports.scan_string_list = scan_string_list$2;
exports.scan_bool_list = scan_bool_list;
exports.scan_char_list = scan_char_list;
exports.test340 = test340;
exports.scan_list_list = scan_list_list;
exports.scan_float_item = scan_float_item;
exports.scan_float_list = scan_float_list;
exports.scan_float_list_list = scan_float_list_list$1;
exports.test35 = test35;
exports.read_elems = read_elems;
exports.read_list = read_list;
exports.make_read_elem = make_read_elem;
exports.scan_List = scan_List;
exports.test36 = test36;
exports.test37 = test37;
exports.test38 = test38;
exports.test39 = test39;
exports.test40 = test40;
exports.test41 = test41;
exports.test42 = test42;
exports.test43 = test43;
exports.test44 = test44;
exports.test45 = test45;
exports.test46 = test46;
exports.test47 = test47;
exports.test48 = test48;
exports.test49 = test49;
exports.next_char = next_char;
exports.send_string = send_string;
exports.send_int = send_int;
exports.reader = reader;
exports.writer = writer;
exports.go = go;
exports.test50 = test50;
exports.test51 = test51;
exports.test52 = test52;
exports.test53 = test53;
exports.test56 = test56;
exports.tscanf_data_file_lines = tscanf_data_file_lines;
exports.test57 = test57;
exports.test58 = test58;
exports.test60 = test60;
/*  Not a pure module */

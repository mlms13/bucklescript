'use strict';

var List = require("./list.js");
var Block = require("./block.js");
var Curry = require("./curry.js");
var Caml_obj = require("./caml_obj.js");
var Caml_bytes = require("./caml_bytes.js");
var Pervasives = require("./pervasives.js");
var Caml_option = require("./caml_option.js");
var Caml_string = require("./caml_string.js");
var Caml_exceptions = require("./caml_exceptions.js");
var CamlinternalLazy = require("./camlinternalLazy.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Failure = Caml_exceptions.create("Stream.Failure");

var $$Error = Caml_exceptions.create("Stream.Error");

function count(param) {
  return param.count;
}

function fill_buff(b) {
  b.len = Pervasives.input(b.ic, b.buff, 0, b.buff.length);
  b.ind = 0;
  return /* () */0;
}

function get_data(count, _d) {
  while(true) {
    var d = _d;
    if (typeof d === "number") {
      return d;
    } else {
      switch (d.tag | 0) {
        case 0 :
            return d;
        case 1 :
            var d2 = d[1];
            var match = get_data(count, d[0]);
            if (typeof match === "number") {
              _d = d2;
              continue ;
            } else if (match.tag) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    /* tuple */[
                      "stream.ml",
                      62,
                      12
                    ]
                  ];
            } else {
              return /* Scons */Block.__(0, [
                        match[0],
                        /* Sapp */Block.__(1, [
                            match[1],
                            d2
                          ])
                      ]);
            }
        case 2 :
            _d = CamlinternalLazy.force(d[0]);
            continue ;
        case 3 :
            var g = d[0];
            var match$1 = g.curr;
            if (match$1 !== undefined) {
              var match$2 = Caml_option.valFromOption(match$1);
              if (match$2 !== undefined) {
                g.curr = undefined;
                return /* Scons */Block.__(0, [
                          Caml_option.valFromOption(match$2),
                          d
                        ]);
              } else {
                return /* Sempty */0;
              }
            } else {
              var match$3 = Curry._1(g.func, count);
              if (match$3 !== undefined) {
                return /* Scons */Block.__(0, [
                          Caml_option.valFromOption(match$3),
                          d
                        ]);
              } else {
                g.curr = Caml_option.some(undefined);
                return /* Sempty */0;
              }
            }
        case 4 :
            var b = d[0];
            if (b.ind >= b.len) {
              fill_buff(b);
            }
            if (b.len === 0) {
              return /* Sempty */0;
            } else {
              var r = b.buff[b.ind];
              b.ind = b.ind + 1 | 0;
              return /* Scons */Block.__(0, [
                        r,
                        d
                      ]);
            }
        
      }
    }
  };
}

function peek(s) {
  while(true) {
    var match = s.data;
    if (typeof match === "number") {
      return ;
    } else {
      switch (match.tag | 0) {
        case 0 :
            return Caml_option.some(match[0]);
        case 1 :
            var d = get_data(s.count, s.data);
            if (typeof d === "number") {
              return ;
            } else if (d.tag) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    /* tuple */[
                      "stream.ml",
                      91,
                      12
                    ]
                  ];
            } else {
              s.data = d;
              return Caml_option.some(d[0]);
            }
        case 2 :
            s.data = CamlinternalLazy.force(match[0]);
            continue ;
        case 3 :
            var g = match[0];
            var match$1 = g.curr;
            if (match$1 !== undefined) {
              return Caml_option.valFromOption(match$1);
            } else {
              var x = Curry._1(g.func, s.count);
              g.curr = Caml_option.some(x);
              return x;
            }
        case 4 :
            var b = match[0];
            if (b.ind >= b.len) {
              fill_buff(b);
            }
            if (b.len === 0) {
              s.data = /* Sempty */0;
              return ;
            } else {
              return Caml_option.some(b.buff[b.ind]);
            }
        
      }
    }
  };
}

function junk(s) {
  while(true) {
    var match = s.data;
    if (typeof match !== "number") {
      switch (match.tag | 0) {
        case 0 :
            s.count = s.count + 1 | 0;
            s.data = match[1];
            return /* () */0;
        case 3 :
            var g = match[0];
            var match$1 = g.curr;
            if (match$1 !== undefined) {
              s.count = s.count + 1 | 0;
              g.curr = undefined;
              return /* () */0;
            }
            break;
        case 4 :
            var b = match[0];
            s.count = s.count + 1 | 0;
            b.ind = b.ind + 1 | 0;
            return /* () */0;
        default:
          
      }
    }
    var match$2 = peek(s);
    if (match$2 !== undefined) {
      continue ;
    } else {
      return /* () */0;
    }
  };
}

function nget(n, s) {
  if (n <= 0) {
    return /* tuple */[
            /* [] */0,
            s.data,
            0
          ];
  } else {
    var match = peek(s);
    if (match !== undefined) {
      var a = Caml_option.valFromOption(match);
      junk(s);
      var match$1 = nget(n - 1 | 0, s);
      return /* tuple */[
              /* :: */[
                a,
                match$1[0]
              ],
              /* Scons */Block.__(0, [
                  a,
                  match$1[1]
                ]),
              match$1[2] + 1 | 0
            ];
    } else {
      return /* tuple */[
              /* [] */0,
              s.data,
              0
            ];
    }
  }
}

function npeek(n, s) {
  var match = nget(n, s);
  s.count = s.count - match[2] | 0;
  s.data = match[1];
  return match[0];
}

function next(s) {
  var match = peek(s);
  if (match !== undefined) {
    junk(s);
    return Caml_option.valFromOption(match);
  } else {
    throw Failure;
  }
}

function empty(s) {
  var match = peek(s);
  if (match !== undefined) {
    throw Failure;
  } else {
    return /* () */0;
  }
}

function iter(f, strm) {
  var _param = /* () */0;
  while(true) {
    var match = peek(strm);
    if (match !== undefined) {
      junk(strm);
      Curry._1(f, Caml_option.valFromOption(match));
      _param = /* () */0;
      continue ;
    } else {
      return /* () */0;
    }
  };
}

function from(f) {
  return /* record */{
          count: 0,
          data: /* Sgen */Block.__(3, [/* record */{
                curr: undefined,
                func: f
              }])
        };
}

function of_list(l) {
  return /* record */{
          count: 0,
          data: List.fold_right((function (x, l) {
                  return /* Scons */Block.__(0, [
                            x,
                            l
                          ]);
                }), l, /* Sempty */0)
        };
}

function of_string(s) {
  var count = /* record */[/* contents */0];
  return from((function (param) {
                var c = count[0];
                if (c < s.length) {
                  count[0] = count[0] + 1 | 0;
                  return Caml_string.get(s, c);
                }
                
              }));
}

function of_bytes(s) {
  var count = /* record */[/* contents */0];
  return from((function (param) {
                var c = count[0];
                if (c < s.length) {
                  count[0] = count[0] + 1 | 0;
                  return Caml_bytes.get(s, c);
                }
                
              }));
}

function of_channel(ic) {
  return /* record */{
          count: 0,
          data: /* Sbuffio */Block.__(4, [/* record */{
                ic: ic,
                buff: Caml_bytes.caml_create_bytes(4096),
                len: 0,
                ind: 0
              }])
        };
}

function iapp(i, s) {
  return /* record */{
          count: 0,
          data: /* Sapp */Block.__(1, [
              i.data,
              s.data
            ])
        };
}

function icons(i, s) {
  return /* record */{
          count: 0,
          data: /* Scons */Block.__(0, [
              i,
              s.data
            ])
        };
}

function ising(i) {
  return /* record */{
          count: 0,
          data: /* Scons */Block.__(0, [
              i,
              /* Sempty */0
            ])
        };
}

function lapp(f, s) {
  return /* record */{
          count: 0,
          data: /* Slazy */Block.__(2, [Caml_obj.caml_lazy_make((function (param) {
                      return /* Sapp */Block.__(1, [
                                Curry._1(f, /* () */0).data,
                                s.data
                              ]);
                    }))])
        };
}

function lcons(f, s) {
  return /* record */{
          count: 0,
          data: /* Slazy */Block.__(2, [Caml_obj.caml_lazy_make((function (param) {
                      return /* Scons */Block.__(0, [
                                Curry._1(f, /* () */0),
                                s.data
                              ]);
                    }))])
        };
}

function lsing(f) {
  return /* record */{
          count: 0,
          data: /* Slazy */Block.__(2, [Caml_obj.caml_lazy_make((function (param) {
                      return /* Scons */Block.__(0, [
                                Curry._1(f, /* () */0),
                                /* Sempty */0
                              ]);
                    }))])
        };
}

function slazy(f) {
  return /* record */{
          count: 0,
          data: /* Slazy */Block.__(2, [Caml_obj.caml_lazy_make((function (param) {
                      return Curry._1(f, /* () */0).data;
                    }))])
        };
}

function dump_data(f, param) {
  if (typeof param === "number") {
    return Pervasives.print_string("Sempty");
  } else {
    switch (param.tag | 0) {
      case 0 :
          Pervasives.print_string("Scons (");
          Curry._1(f, param[0]);
          Pervasives.print_string(", ");
          dump_data(f, param[1]);
          return Pervasives.print_string(")");
      case 1 :
          Pervasives.print_string("Sapp (");
          dump_data(f, param[0]);
          Pervasives.print_string(", ");
          dump_data(f, param[1]);
          return Pervasives.print_string(")");
      case 2 :
          return Pervasives.print_string("Slazy");
      case 3 :
          return Pervasives.print_string("Sgen");
      case 4 :
          return Pervasives.print_string("Sbuffio");
      
    }
  }
}

function dump(f, s) {
  Pervasives.print_string("{count = ");
  Pervasives.print_int(s.count);
  Pervasives.print_string("; data = ");
  dump_data(f, s.data);
  Pervasives.print_string("}");
  return Pervasives.print_newline(/* () */0);
}

var sempty = /* record */{
  count: 0,
  data: /* Sempty */0
};

exports.Failure = Failure;
exports.$$Error = $$Error;
exports.from = from;
exports.of_list = of_list;
exports.of_string = of_string;
exports.of_bytes = of_bytes;
exports.of_channel = of_channel;
exports.iter = iter;
exports.next = next;
exports.empty = empty;
exports.peek = peek;
exports.junk = junk;
exports.count = count;
exports.npeek = npeek;
exports.iapp = iapp;
exports.icons = icons;
exports.ising = ising;
exports.lapp = lapp;
exports.lcons = lcons;
exports.lsing = lsing;
exports.sempty = sempty;
exports.slazy = slazy;
exports.dump = dump;
/* No side effect */

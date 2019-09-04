'use strict';

var Caml_int32 = require("../../lib/js/caml_int32.js");

function $plus$colon(_f, _g) {
  while(true) {
    var g = _g;
    var f = _f;
    if (!f.tag) {
      var n = f[0];
      if (g.tag) {
        if (n === 0) {
          return g;
        }
        
      } else {
        return /* constructor */{
                tag: 0,
                name: "Int",
                "0": n + g[0] | 0
              };
      }
    }
    switch (g.tag | 0) {
      case 0 :
          if (g[0] !== 0) {
            return /* constructor */{
                    tag: 2,
                    name: "Add",
                    "0": f,
                    "1": g
                  };
          } else {
            return f;
          }
      case 2 :
          _g = g[1];
          _f = $plus$colon(f, g[0]);
          continue ;
      case 1 :
      case 3 :
          return /* constructor */{
                  tag: 2,
                  name: "Add",
                  "0": f,
                  "1": g
                };
      
    }
  };
}

function $star$colon(_f, _g) {
  while(true) {
    var g = _g;
    var f = _f;
    var exit = 0;
    var exit$1 = 0;
    if (f.tag) {
      exit$1 = 3;
    } else {
      var n = f[0];
      if (g.tag) {
        if (n !== 0) {
          exit$1 = 3;
        } else {
          return /* constructor */{
                  tag: 0,
                  name: "Int",
                  "0": 0
                };
        }
      } else {
        return /* constructor */{
                tag: 0,
                name: "Int",
                "0": Caml_int32.imul(n, g[0])
              };
      }
    }
    if (exit$1 === 3) {
      if (g.tag || g[0] !== 0) {
        exit = 2;
      } else {
        return /* constructor */{
                tag: 0,
                name: "Int",
                "0": 0
              };
      }
    }
    if (exit === 2 && !f.tag && f[0] === 1) {
      return g;
    }
    switch (g.tag | 0) {
      case 0 :
          if (g[0] !== 1) {
            return /* constructor */{
                    tag: 3,
                    name: "Mul",
                    "0": f,
                    "1": g
                  };
          } else {
            return f;
          }
      case 1 :
      case 2 :
          return /* constructor */{
                  tag: 3,
                  name: "Mul",
                  "0": f,
                  "1": g
                };
      case 3 :
          _g = g[1];
          _f = $star$colon(f, g[0]);
          continue ;
      
    }
  };
}

function simplify(f) {
  switch (f.tag | 0) {
    case 0 :
    case 1 :
        return f;
    case 2 :
        return $plus$colon(simplify(f[0]), simplify(f[1]));
    case 3 :
        return $star$colon(simplify(f[0]), simplify(f[1]));
    
  }
}

exports.$plus$colon = $plus$colon;
exports.$star$colon = $star$colon;
exports.simplify = simplify;
/* No side effect */

'use strict';


function erase_rel(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 :
          return /* constructor */{
                  tag: 0,
                  name: "Char_ty",
                  "0": erase_rel(param[0])
                };
      case 1 :
          return /* constructor */{
                  tag: 1,
                  name: "String_ty",
                  "0": erase_rel(param[0])
                };
      case 2 :
          return /* constructor */{
                  tag: 2,
                  name: "Int_ty",
                  "0": erase_rel(param[0])
                };
      case 3 :
          return /* constructor */{
                  tag: 3,
                  name: "Int32_ty",
                  "0": erase_rel(param[0])
                };
      case 4 :
          return /* constructor */{
                  tag: 4,
                  name: "Nativeint_ty",
                  "0": erase_rel(param[0])
                };
      case 5 :
          return /* constructor */{
                  tag: 5,
                  name: "Int64_ty",
                  "0": erase_rel(param[0])
                };
      case 6 :
          return /* constructor */{
                  tag: 6,
                  name: "Float_ty",
                  "0": erase_rel(param[0])
                };
      case 7 :
          return /* constructor */{
                  tag: 7,
                  name: "Bool_ty",
                  "0": erase_rel(param[0])
                };
      case 8 :
          return /* constructor */{
                  tag: 8,
                  name: "Format_arg_ty",
                  "0": param[0],
                  "1": erase_rel(param[1])
                };
      case 9 :
          var ty1 = param[0];
          return /* constructor */{
                  tag: 9,
                  name: "Format_subst_ty",
                  "0": ty1,
                  "1": ty1,
                  "2": erase_rel(param[2])
                };
      case 10 :
          return /* constructor */{
                  tag: 10,
                  name: "Alpha_ty",
                  "0": erase_rel(param[0])
                };
      case 11 :
          return /* constructor */{
                  tag: 11,
                  name: "Theta_ty",
                  "0": erase_rel(param[0])
                };
      case 12 :
          return /* constructor */{
                  tag: 12,
                  name: "Any_ty",
                  "0": erase_rel(param[0])
                };
      case 13 :
          return /* constructor */{
                  tag: 13,
                  name: "Reader_ty",
                  "0": erase_rel(param[0])
                };
      case 14 :
          return /* constructor */{
                  tag: 14,
                  name: "Ignored_reader_ty",
                  "0": erase_rel(param[0])
                };
      
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case 0 :
          return /* constructor */{
                  tag: 0,
                  name: "Char_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 1 :
          return /* constructor */{
                  tag: 1,
                  name: "String_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 2 :
          return /* constructor */{
                  tag: 2,
                  name: "Int_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 3 :
          return /* constructor */{
                  tag: 3,
                  name: "Int32_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 4 :
          return /* constructor */{
                  tag: 4,
                  name: "Nativeint_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 5 :
          return /* constructor */{
                  tag: 5,
                  name: "Int64_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 6 :
          return /* constructor */{
                  tag: 6,
                  name: "Float_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 7 :
          return /* constructor */{
                  tag: 7,
                  name: "Bool_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 8 :
          return /* constructor */{
                  tag: 8,
                  name: "Format_arg_ty",
                  "0": fmtty1[0],
                  "1": concat_fmtty(fmtty1[1], fmtty2)
                };
      case 9 :
          return /* constructor */{
                  tag: 9,
                  name: "Format_subst_ty",
                  "0": fmtty1[0],
                  "1": fmtty1[1],
                  "2": concat_fmtty(fmtty1[2], fmtty2)
                };
      case 10 :
          return /* constructor */{
                  tag: 10,
                  name: "Alpha_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 11 :
          return /* constructor */{
                  tag: 11,
                  name: "Theta_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 12 :
          return /* constructor */{
                  tag: 12,
                  name: "Any_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 13 :
          return /* constructor */{
                  tag: 13,
                  name: "Reader_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      case 14 :
          return /* constructor */{
                  tag: 14,
                  name: "Ignored_reader_ty",
                  "0": concat_fmtty(fmtty1[0], fmtty2)
                };
      
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case 0 :
          return /* constructor */{
                  tag: 0,
                  name: "Char",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case 1 :
          return /* constructor */{
                  tag: 1,
                  name: "Caml_char",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case 2 :
          return /* constructor */{
                  tag: 2,
                  name: "String",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case 3 :
          return /* constructor */{
                  tag: 3,
                  name: "Caml_string",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case 4 :
          return /* constructor */{
                  tag: 4,
                  name: "Int",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": fmt1[2],
                  "3": concat_fmt(fmt1[3], fmt2)
                };
      case 5 :
          return /* constructor */{
                  tag: 5,
                  name: "Int32",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": fmt1[2],
                  "3": concat_fmt(fmt1[3], fmt2)
                };
      case 6 :
          return /* constructor */{
                  tag: 6,
                  name: "Nativeint",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": fmt1[2],
                  "3": concat_fmt(fmt1[3], fmt2)
                };
      case 7 :
          return /* constructor */{
                  tag: 7,
                  name: "Int64",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": fmt1[2],
                  "3": concat_fmt(fmt1[3], fmt2)
                };
      case 8 :
          return /* constructor */{
                  tag: 8,
                  name: "Float",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": fmt1[2],
                  "3": concat_fmt(fmt1[3], fmt2)
                };
      case 9 :
          return /* constructor */{
                  tag: 9,
                  name: "Bool",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case 10 :
          return /* constructor */{
                  tag: 10,
                  name: "Flush",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case 11 :
          return /* constructor */{
                  tag: 11,
                  name: "String_literal",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case 12 :
          return /* constructor */{
                  tag: 12,
                  name: "Char_literal",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case 13 :
          return /* constructor */{
                  tag: 13,
                  name: "Format_arg",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": concat_fmt(fmt1[2], fmt2)
                };
      case 14 :
          return /* constructor */{
                  tag: 14,
                  name: "Format_subst",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": concat_fmt(fmt1[2], fmt2)
                };
      case 15 :
          return /* constructor */{
                  tag: 15,
                  name: "Alpha",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case 16 :
          return /* constructor */{
                  tag: 16,
                  name: "Theta",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case 17 :
          return /* constructor */{
                  tag: 17,
                  name: "Formatting_lit",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case 18 :
          return /* constructor */{
                  tag: 18,
                  name: "Formatting_gen",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case 19 :
          return /* constructor */{
                  tag: 19,
                  name: "Reader",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case 20 :
          return /* constructor */{
                  tag: 20,
                  name: "Scan_char_set",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": concat_fmt(fmt1[2], fmt2)
                };
      case 21 :
          return /* constructor */{
                  tag: 21,
                  name: "Scan_get_counter",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case 22 :
          return /* constructor */{
                  tag: 22,
                  name: "Scan_next_char",
                  "0": concat_fmt(fmt1[0], fmt2)
                };
      case 23 :
          return /* constructor */{
                  tag: 23,
                  name: "Ignored_param",
                  "0": fmt1[0],
                  "1": concat_fmt(fmt1[1], fmt2)
                };
      case 24 :
          return /* constructor */{
                  tag: 24,
                  name: "Custom",
                  "0": fmt1[0],
                  "1": fmt1[1],
                  "2": concat_fmt(fmt1[2], fmt2)
                };
      
    }
  }
}

exports.concat_fmtty = concat_fmtty;
exports.erase_rel = erase_rel;
exports.concat_fmt = concat_fmt;
/* No side effect */

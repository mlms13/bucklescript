'use strict';

var Caml_option = require("./caml_option.js");

function classify(x) {
  var ty = typeof x;
  if (ty === "string") {
    return /* constructor */{
            tag: 0,
            name: "JSONString",
            length: 1,
            "0": x
          };
  } else if (ty === "number") {
    return /* constructor */{
            tag: 1,
            name: "JSONNumber",
            length: 1,
            "0": x
          };
  } else if (ty === "boolean") {
    if (x === true) {
      return /* JSONTrue */1;
    } else {
      return /* JSONFalse */0;
    }
  } else if (x === null) {
    return /* JSONNull */2;
  } else if (Array.isArray(x)) {
    return /* constructor */{
            tag: 3,
            name: "JSONArray",
            length: 1,
            "0": x
          };
  } else {
    return /* constructor */{
            tag: 2,
            name: "JSONObject",
            length: 1,
            "0": x
          };
  }
}

function test(x, v) {
  switch (v) {
    case 0 :
        return typeof x === "string";
    case 1 :
        return typeof x === "number";
    case 2 :
        if (x !== null && typeof x === "object") {
          return !Array.isArray(x);
        } else {
          return false;
        }
    case 3 :
        return Array.isArray(x);
    case 4 :
        return typeof x === "boolean";
    case 5 :
        return x === null;
    
  }
}

function decodeString(json) {
  if (typeof json === "string") {
    return json;
  }
  
}

function decodeNumber(json) {
  if (typeof json === "number") {
    return json;
  }
  
}

function decodeObject(json) {
  if (typeof json === "object" && !Array.isArray(json) && json !== null) {
    return Caml_option.some(json);
  }
  
}

function decodeArray(json) {
  if (Array.isArray(json)) {
    return json;
  }
  
}

function decodeBoolean(json) {
  if (typeof json === "boolean") {
    return json;
  }
  
}

function decodeNull(json) {
  if (json === null) {
    return null;
  }
  
}

exports.classify = classify;
exports.test = test;
exports.decodeString = decodeString;
exports.decodeNumber = decodeNumber;
exports.decodeObject = decodeObject;
exports.decodeArray = decodeArray;
exports.decodeBoolean = decodeBoolean;
exports.decodeNull = decodeNull;
/* No side effect */

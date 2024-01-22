"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _calendar = require("./calendar.js");
Object.keys(_calendar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _calendar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _calendar[key];
    }
  });
});
var _skills = require("./skills");
Object.keys(_skills).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _skills[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _skills[key];
    }
  });
});
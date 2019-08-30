const babelParse = require("@babel/parser/new/index").parse;
const acornParse = require("acorn").parse;
const esprimaParse = require("esprima").parse;
const meriyahParse = require("meriyah").parseModule;

exports.files = [
  "./fixtures/es5/angular.js",
  "./fixtures/es5/ember.debug.js",
  "./fixtures/es5/babylon-dist.js",
  "./fixtures/es5/jquery.js",
  "./fixtures/es5/backbone.js",
  "./fixtures/es5/react-with-addons.js",
  "./fixtures/es6/angular-compiler.js",
  "./fixtures/es6/material-ui-core.js",
];

exports.parsers = {
  acorn: {
    parse: acornParse,
    options: { sourceType: "module", locations: true }
  },
  babel: {
    parse: babelParse,
    options: { sourceType: "module" }
  },
  esprima: {
    parse: esprimaParse,
    options: { sourceType: "module", loc: true }
  },
  meriyah: {
    parse: meriyahParse,
    options: { loc: true }
  },
};

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/index.js');

index["default"].install = (app) => {
  app.component(index["default"].name, index["default"]);
};
const _Autocomplete = index["default"];
const ElAutocomplete = _Autocomplete;

exports.ElAutocomplete = ElAutocomplete;
exports["default"] = _Autocomplete;
//# sourceMappingURL=index.js.map

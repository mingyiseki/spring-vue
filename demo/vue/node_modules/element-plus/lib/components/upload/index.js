'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/index.js');

index["default"].install = (app) => {
  app.component(index["default"].name, index["default"]);
};
const _Upload = index["default"];
const ElUpload = _Upload;

exports.ElUpload = ElUpload;
exports["default"] = _Upload;
//# sourceMappingURL=index.js.map

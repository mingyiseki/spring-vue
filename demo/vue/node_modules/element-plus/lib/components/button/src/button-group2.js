'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../tokens/index.js');
require('../../../hooks/index.js');
var buttonGroup = require('./button-group.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var button = require('../../../tokens/button.js');
var index = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElButtonGroup",
  props: buttonGroup.buttonGroupProps,
  setup(props) {
    vue.provide(button.buttonGroupContextKey, vue.reactive({
      size: vue.toRef(props, "size"),
      type: vue.toRef(props, "type")
    }));
    const ns = index.useNamespace("button");
    return {
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(`${_ctx.ns.b("group")}`)
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2);
}
var ButtonGroup = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = ButtonGroup;
//# sourceMappingURL=button-group2.js.map

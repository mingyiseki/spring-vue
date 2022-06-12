'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index.js');
var checkTag = require('./check-tag.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElCheckTag",
  props: checkTag.checkTagProps,
  emits: checkTag.checkTagEmits,
  setup(props, { emit }) {
    const ns = index.useNamespace("check-tag");
    const onChange = () => {
      const checked = !props.checked;
      emit("change", checked);
      emit("update:checked", checked);
    };
    return {
      ns,
      onChange
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("span", {
    class: vue.normalizeClass([_ctx.ns.b(), _ctx.ns.is("checked", _ctx.checked)]),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2);
}
var CheckTag = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = CheckTag;
//# sourceMappingURL=check-tag2.js.map

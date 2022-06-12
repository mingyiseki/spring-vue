'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index.js');
var card = require('./card.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElCard",
  props: card.cardProps,
  setup() {
    const ns = index.useNamespace("card");
    return {
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass([_ctx.ns.b(), _ctx.ns.is(`${_ctx.shadow}-shadow`)])
  }, [
    _ctx.$slots.header || _ctx.header ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      class: vue.normalizeClass(_ctx.ns.e("header"))
    }, [
      vue.renderSlot(_ctx.$slots, "header", {}, () => [
        vue.createTextVNode(vue.toDisplayString(_ctx.header), 1)
      ])
    ], 2)) : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("div", {
      class: vue.normalizeClass(_ctx.ns.e("body")),
      style: vue.normalizeStyle(_ctx.bodyStyle)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6)
  ], 2);
}
var Card = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Card;
//# sourceMappingURL=card2.js.map

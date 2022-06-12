import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, normalizeStyle } from 'vue';
import '../../../hooks/index.mjs';
import { cardProps } from './card.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElCard",
  props: cardProps,
  setup() {
    const ns = useNamespace("card");
    return {
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.is(`${_ctx.shadow}-shadow`)])
  }, [
    _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.ns.e("header"))
    }, [
      renderSlot(_ctx.$slots, "header", {}, () => [
        createTextVNode(toDisplayString(_ctx.header), 1)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("body")),
      style: normalizeStyle(_ctx.bodyStyle)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6)
  ], 2);
}
var Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Card as default };
//# sourceMappingURL=card2.mjs.map

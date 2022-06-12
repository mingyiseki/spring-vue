import { defineComponent, provide, reactive, toRef, openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';
import '../../../tokens/index.mjs';
import '../../../hooks/index.mjs';
import { buttonGroupProps } from './button-group.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { buttonGroupContextKey } from '../../../tokens/button.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElButtonGroup",
  props: buttonGroupProps,
  setup(props) {
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
    const ns = useNamespace("button");
    return {
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`${_ctx.ns.b("group")}`)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { ButtonGroup as default };
//# sourceMappingURL=button-group2.mjs.map

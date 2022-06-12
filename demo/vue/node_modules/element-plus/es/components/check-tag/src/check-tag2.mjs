import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';
import '../../../hooks/index.mjs';
import { checkTagProps, checkTagEmits } from './check-tag.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElCheckTag",
  props: checkTagProps,
  emits: checkTagEmits,
  setup(props, { emit }) {
    const ns = useNamespace("check-tag");
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
  return openBlock(), createElementBlock("span", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("checked", _ctx.checked)]),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var CheckTag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { CheckTag as default };
//# sourceMappingURL=check-tag2.mjs.map

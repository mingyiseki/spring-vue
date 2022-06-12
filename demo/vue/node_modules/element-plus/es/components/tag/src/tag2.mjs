import { defineComponent, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createBlock, withCtx, createVNode, createCommentVNode, Transition } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import { Close } from '@element-plus/icons-vue';
import '../../../hooks/index.mjs';
import { tagProps, tagEmits } from './tag.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useSize } from '../../../hooks/use-common-props/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElTag",
  components: { ElIcon, Close },
  props: tagProps,
  emits: tagEmits,
  setup(props, { emit }) {
    const tagSize = useSize();
    const ns = useNamespace("tag");
    const classes = computed(() => {
      const { type, hit, effect, closable } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit)
      ];
    });
    const handleClose = (event) => {
      event.stopPropagation();
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return {
      ns,
      classes,
      handleClose,
      handleClick
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close = resolveComponent("close");
  const _component_el_icon = resolveComponent("el-icon");
  return !_ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle({ backgroundColor: _ctx.color }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createElementVNode("span", {
      class: normalizeClass(_ctx.ns.e("content"))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    _ctx.closable ? (openBlock(), createBlock(_component_el_icon, {
      key: 0,
      class: normalizeClass(_ctx.ns.e("close")),
      onClick: _ctx.handleClose
    }, {
      default: withCtx(() => [
        createVNode(_component_close)
      ]),
      _: 1
    }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
  ], 6)) : (openBlock(), createBlock(Transition, {
    key: 1,
    name: `${_ctx.ns.namespace.value}-zoom-in-center`
  }, {
    default: withCtx(() => [
      createElementVNode("span", {
        class: normalizeClass(_ctx.classes),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        createElementVNode("span", {
          class: normalizeClass(_ctx.ns.e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: normalizeClass(_ctx.ns.e("close")),
          onClick: _ctx.handleClose
        }, {
          default: withCtx(() => [
            createVNode(_component_close)
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)
    ]),
    _: 3
  }, 8, ["name"]));
}
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { Tag as default };
//# sourceMappingURL=tag2.mjs.map

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index.js');
var tag = require('./tag.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$1 = require('../../../hooks/use-common-props/index.js');
var index$2 = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElTag",
  components: { ElIcon: index.ElIcon, Close: iconsVue.Close },
  props: tag.tagProps,
  emits: tag.tagEmits,
  setup(props, { emit }) {
    const tagSize = index$1.useSize();
    const ns = index$2.useNamespace("tag");
    const classes = vue.computed(() => {
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
  const _component_close = vue.resolveComponent("close");
  const _component_el_icon = vue.resolveComponent("el-icon");
  return !_ctx.disableTransitions ? (vue.openBlock(), vue.createElementBlock("span", {
    key: 0,
    class: vue.normalizeClass(_ctx.classes),
    style: vue.normalizeStyle({ backgroundColor: _ctx.color }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    vue.createElementVNode("span", {
      class: vue.normalizeClass(_ctx.ns.e("content"))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2),
    _ctx.closable ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
      key: 0,
      class: vue.normalizeClass(_ctx.ns.e("close")),
      onClick: _ctx.handleClose
    }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_close)
      ]),
      _: 1
    }, 8, ["class", "onClick"])) : vue.createCommentVNode("v-if", true)
  ], 6)) : (vue.openBlock(), vue.createBlock(vue.Transition, {
    key: 1,
    name: `${_ctx.ns.namespace.value}-zoom-in-center`
  }, {
    default: vue.withCtx(() => [
      vue.createElementVNode("span", {
        class: vue.normalizeClass(_ctx.classes),
        style: vue.normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(_ctx.ns.e("content"))
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
          key: 0,
          class: vue.normalizeClass(_ctx.ns.e("close")),
          onClick: _ctx.handleClose
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_close)
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : vue.createCommentVNode("v-if", true)
      ], 6)
    ]),
    _: 3
  }, 8, ["name"]));
}
var Tag = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render]]);

exports["default"] = Tag;
//# sourceMappingURL=tag2.js.map

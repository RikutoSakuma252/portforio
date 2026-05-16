import { defineComponent, mergeProps, unref, ref, useSSRContext } from 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './v3-DtIER5BK.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/h3/dist/index.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/destr/dist/index.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/hookable/dist/index.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/unstorage/dist/index.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/ohash/dist/index.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/klona/dist/index.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/defu/dist/defu.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/scule/dist/index.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/pathe/dist/index.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/devalue/index.js';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/unhead/dist/utils.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/unctx/dist/index.mjs';
import 'file://C:/claude/portfolio2/sites/site-03-atelier-blanc/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SiteNav",
  __ssrInlineRender: true,
  setup(__props) {
    const scrolled = ref(false);
    const menuOpen = ref(false);
    const links = [
      { label: "Concept", href: "#concept" },
      { label: "Service", href: "#service" },
      { label: "Works", href: "#works" },
      { label: "Reserve", href: "#reserve" },
      { label: "Access", href: "#access" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          unref(scrolled) ? "bg-blanc-bg/95 backdrop-blur-sm border-b border-blanc-accent/20" : "bg-transparent"
        ]
      }, _attrs))} data-v-26c8f5e4><div class="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between" data-v-26c8f5e4><a href="#" class="font-josefin text-blanc-primary text-xs tracking-[0.4em] font-light" data-v-26c8f5e4> atelier BLANC </a><nav class="hidden md:flex gap-10" data-v-26c8f5e4><!--[-->`);
      ssrRenderList(links, (l) => {
        _push(`<a${ssrRenderAttr("href", l.href)} class="font-josefin text-[11px] tracking-[0.25em] text-blanc-muted hover:text-blanc-primary transition-colors duration-300" data-v-26c8f5e4>${ssrInterpolate(l.label)}</a>`);
      });
      _push(`<!--]--></nav><button class="md:hidden flex flex-col gap-1.5 p-1"${ssrRenderAttr("aria-label", unref(menuOpen) ? "\u30E1\u30CB\u30E5\u30FC\u3092\u9589\u3058\u308B" : "\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F")} data-v-26c8f5e4><span class="${ssrRenderClass(["block w-5 h-px bg-blanc-primary transition-all duration-300", unref(menuOpen) ? "rotate-45 translate-y-2" : ""])}" data-v-26c8f5e4></span><span class="${ssrRenderClass(["block w-5 h-px bg-blanc-primary transition-all duration-300", unref(menuOpen) ? "opacity-0" : ""])}" data-v-26c8f5e4></span><span class="${ssrRenderClass(["block w-5 h-px bg-blanc-primary transition-all duration-300", unref(menuOpen) ? "-rotate-45 -translate-y-2.5" : ""])}" data-v-26c8f5e4></span></button></div>`);
      if (unref(menuOpen)) {
        _push(`<div class="md:hidden bg-blanc-bg/98 border-t border-blanc-accent/20 px-8 py-8 flex flex-col gap-6" data-v-26c8f5e4><!--[-->`);
        ssrRenderList(links, (l) => {
          _push(`<a${ssrRenderAttr("href", l.href)} class="font-josefin text-sm tracking-[0.25em] text-blanc-muted hover:text-blanc-primary transition-colors" data-v-26c8f5e4>${ssrInterpolate(l.label)}</a>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteNav.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-26c8f5e4"]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen grid md:grid-cols-2 overflow-hidden" }, _attrs))}><div class="flex flex-col justify-center px-10 md:px-16 lg:px-24 pt-32 pb-20 md:pt-0 md:pb-0 bg-blanc-bg"><p class="hero-label font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-8"> PRIVATE HAIR SALON </p><span class="hero-label thin-rule mb-10"></span><h1 class="hero-title font-garamond text-4xl md:text-5xl lg:text-6xl italic font-light leading-snug text-blanc-primary mb-8"> \u3042\u306A\u305F\u3089\u3057\u3055\u3092\u3001<br>\u89E3\u653E\u3059\u308B\u5834\u6240\u3002 </h1><p class="hero-body font-jp text-sm text-blanc-muted leading-8 mb-12 max-w-xs"> \u9AA8\u683C\u30FB\u30E9\u30A4\u30D5\u30B9\u30BF\u30A4\u30EB\u306B\u5BC4\u308A\u6DFB\u3046\u3001<br>\u5B8C\u5168\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30B5\u30ED\u30F3\u3002 </p><a href="#reserve" class="hero-cta self-start font-josefin text-[11px] tracking-[0.35em] text-blanc-primary border border-blanc-primary px-10 py-4 hover:bg-blanc-primary hover:text-blanc-white transition-all duration-400"> \u3054\u4E88\u7D04\u306F\u3053\u3061\u3089 </a></div><div class="relative h-72 md:h-auto hero-image"><img src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=900" alt="atelier BLANC \u30B5\u30ED\u30F3\u30A4\u30E1\u30FC\u30B8" class="absolute inset-0 w-full h-full object-cover object-center"><div class="absolute inset-0 bg-blanc-primary/5"></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
function useInView(threshold = 0.15) {
  const target = ref(null);
  const inView = ref(false);
  return { target, inView };
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ConceptSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { inView } = useInView();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "concept",
        class: "bg-blanc-light py-28 md:py-44 px-6"
      }, _attrs))}><div class="max-w-2xl mx-auto text-center"><p class="${ssrRenderClass(["reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-10", unref(inView) && "in-view"])}"> CONCEPT </p><div class="${ssrRenderClass(["reveal reveal-delay-1 flex items-center gap-6 justify-center mb-12", unref(inView) && "in-view"])}"><span class="block flex-1 h-px bg-blanc-accent/40 max-w-[80px]"></span><span class="font-garamond text-blanc-accent text-xl italic">B</span><span class="block flex-1 h-px bg-blanc-accent/40 max-w-[80px]"></span></div><h2 class="${ssrRenderClass(["reveal reveal-delay-2 font-garamond text-3xl md:text-4xl lg:text-5xl italic font-light text-blanc-primary leading-snug mb-10", unref(inView) && "in-view"])}"> \u3042\u306A\u305F\u4E00\u4EBA\u306E\u305F\u3081\u306B<br>\u5B58\u5728\u3059\u308B\u30B5\u30ED\u30F3\u3002 </h2><p class="${ssrRenderClass(["reveal reveal-delay-3 font-jp text-sm text-blanc-muted leading-9 mb-6", unref(inView) && "in-view"])}"> atelier BLANC\u306F\u3001\u3042\u306A\u305F\u4E00\u4EBA\u306E\u305F\u3081\u306B\u5B58\u5728\u3059\u308B\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30B5\u30ED\u30F3\u3067\u3059\u3002 </p><p class="${ssrRenderClass(["reveal reveal-delay-3 font-jp text-sm text-blanc-muted leading-9", unref(inView) && "in-view"])}"> \u30C8\u30EC\u30F3\u30C9\u3067\u306F\u306A\u304F\u3001\u3042\u306A\u305F\u306E\u9B45\u529B\u3092\u6700\u5927\u9650\u306B\u5F15\u304D\u51FA\u3059\u30B9\u30BF\u30A4\u30EB\u3092\u3054\u63D0\u6848\u3057\u307E\u3059\u3002\u9AA8\u683C\u30FB\u9AEA\u8CEA\u30FB\u30E9\u30A4\u30D5\u30B9\u30BF\u30A4\u30EB\u3092\u4E01\u5BE7\u306B\u8AAD\u307F\u89E3\u304D\u3001\u552F\u4E00\u7121\u4E8C\u306E\u4E00\u30B9\u30BF\u30A4\u30EB\u3092\u5171\u306B\u4F5C\u308A\u4E0A\u3052\u307E\u3059\u3002 </p><div class="${ssrRenderClass(["reveal reveal-delay-4 flex items-center gap-6 justify-center mt-12", unref(inView) && "in-view"])}"><span class="block flex-1 h-px bg-blanc-accent/40 max-w-[80px]"></span><span class="font-garamond text-blanc-accent text-xl italic">\u25C7</span><span class="block flex-1 h-px bg-blanc-accent/40 max-w-[80px]"></span></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConceptSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ServiceSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { inView } = useInView();
    const services = [
      { name: "Cut", jp: "\u30AB\u30C3\u30C8", price: "\xA58,800\u301C", duration: "\u7D0460\u5206", desc: "\u9AA8\u683C\u30FB\u9AEA\u8CEA\u3092\u8A3A\u65AD\u3057\u3001\u3042\u306A\u305F\u306B\u6700\u3082\u4F3C\u5408\u3046\u30D5\u30A9\u30EB\u30E0\u3092\u63D0\u6848\u3057\u307E\u3059\u3002" },
      { name: "Color", jp: "\u30AB\u30E9\u30FC", price: "\xA512,100\u301C", duration: "\u7D04120\u5206", desc: "\u7E4A\u7D30\u306A\u30AB\u30E9\u30FC\u30EA\u30F3\u30B0\u3067\u3001\u808C\u30C8\u30FC\u30F3\u3092\u7F8E\u3057\u304F\u5F15\u304D\u7ACB\u3066\u308B\u8272\u3092\u9078\u3073\u307E\u3059\u3002" },
      { name: "Perm", jp: "\u30D1\u30FC\u30DE", price: "\xA514,300\u301C", duration: "\u7D04150\u5206", desc: "\u30C0\u30E1\u30FC\u30B8\u3092\u6700\u5C0F\u9650\u306B\u6291\u3048\u305F\u85AC\u5264\u3067\u3001\u81EA\u7136\u306A\u30A6\u30A7\u30FC\u30D6\u3092\u3002" },
      { name: "Treatment", jp: "\u30C8\u30EA\u30FC\u30C8\u30E1\u30F3\u30C8", price: "\xA55,500\u301C", duration: "\u7D0445\u5206", desc: "\u9AEA\u306E\u5185\u90E8\u304B\u3089\u88DC\u4FEE\u3057\u3001\u3057\u306A\u3084\u304B\u306A\u8276\u3068\u624B\u89E6\u308A\u3092\u53D6\u308A\u623B\u3057\u307E\u3059\u3002" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "service",
        class: "bg-blanc-bg py-28 md:py-40 px-6"
      }, _attrs))}><div class="max-w-5xl mx-auto"><div class="mb-16"><p class="${ssrRenderClass(["reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-4", unref(inView) && "in-view"])}"> SERVICE </p><h2 class="${ssrRenderClass(["reveal reveal-delay-1 font-garamond text-4xl md:text-5xl italic font-light text-blanc-primary", unref(inView) && "in-view"])}"> Menu </h2></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(services, (s, i) => {
        _push(`<div class="${ssrRenderClass([
          "reveal",
          `reveal-delay-${Math.min(i + 1, 4)}`,
          unref(inView) && "in-view",
          "group p-8 border border-blanc-light bg-blanc-white hover:bg-blanc-light transition-colors duration-400 flex flex-col gap-5"
        ])}"><div><p class="font-josefin text-[10px] tracking-[0.4em] text-blanc-accent mb-2">${ssrInterpolate(s.name.toUpperCase())}</p><p class="font-garamond text-2xl italic font-light text-blanc-primary">${ssrInterpolate(s.jp)}</p></div><div class="h-px bg-blanc-accent/30"></div><div class="flex-1"><p class="font-jp text-xs text-blanc-muted leading-7">${ssrInterpolate(s.desc)}</p></div><div><p class="font-garamond text-xl text-blanc-primary">${ssrInterpolate(s.price)}</p><p class="font-josefin text-[10px] tracking-widest text-blanc-muted mt-1">${ssrInterpolate(s.duration)}</p></div></div>`);
      });
      _push(`<!--]--></div><p class="${ssrRenderClass(["reveal font-jp text-[11px] text-blanc-muted mt-10", unref(inView) && "in-view"])}"> \u203B \u4FA1\u683C\u306F\u3059\u3079\u3066\u7A0E\u8FBC\u3067\u3059\u3002\u65BD\u8853\u5185\u5BB9\u306B\u3088\u308A\u5909\u52D5\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 </p></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "WorksSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { inView } = useInView();
    const works = [
      { src: "https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Blonde Bob Cut" },
      { src: "https://images.pexels.com/photos/2076090/pexels-photo-2076090.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Natural Highlight" },
      { src: "https://images.pexels.com/photos/3065609/pexels-photo-3065609.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Soft Wave Perm" },
      { src: "https://images.pexels.com/photos/1484808/pexels-photo-1484808.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Dark Ash Color" },
      { src: "https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Sleek Straight" },
      { src: "https://images.pexels.com/photos/2688182/pexels-photo-2688182.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Beige Brown" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "works",
        class: "bg-blanc-light py-28 md:py-40 px-6"
      }, _attrs))}><div class="max-w-5xl mx-auto"><div class="mb-16"><p class="${ssrRenderClass(["reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-4", unref(inView) && "in-view"])}"> WORKS </p><h2 class="${ssrRenderClass(["reveal reveal-delay-1 font-garamond text-4xl md:text-5xl italic font-light text-blanc-primary", unref(inView) && "in-view"])}"> Style Gallery </h2></div><div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"><!--[-->`);
      ssrRenderList(works, (w, i) => {
        _push(`<div class="${ssrRenderClass([
          "reveal",
          `reveal-delay-${Math.min(i % 3 + 1, 4)}`,
          unref(inView) && "in-view",
          "group relative overflow-hidden aspect-[3/4]"
        ])}"><img${ssrRenderAttr("src", w.src)}${ssrRenderAttr("alt", w.label)} class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-blanc-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5"><p class="font-josefin text-blanc-white text-[11px] tracking-[0.3em]">${ssrInterpolate(w.label.toUpperCase())}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorksSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "StylistSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { inView } = useInView();
    const stylists = [
      {
        name: "\u4F50\u3005\u6728 \u9EBB\u8863",
        nameEn: "Mai Sasaki",
        role: "Senior Stylist",
        specialty: "\u30AB\u30C3\u30C8\u30FB\u30AB\u30E9\u30FC",
        bio: "\u90FD\u5185\u6709\u540D\u30B5\u30ED\u30F3\u306710\u5E74\u306E\u7D4C\u9A13\u3092\u7A4D\u307F\u30012020\u5E74\u3088\u308Aatelier BLANC\u306B\u53C2\u52A0\u3002\u9AA8\u683C\u8A3A\u65AD\u30AB\u30E9\u30FC\u30EA\u30B9\u30C8\u306E\u8CC7\u683C\u3092\u6301\u3061\u3001\u4E00\u4EBA\u3072\u3068\u308A\u306E\u808C\u30C8\u30FC\u30F3\u306B\u5408\u3063\u305F\u30AB\u30E9\u30FC\u3092\u63D0\u6848\u3059\u308B\u3053\u3068\u304C\u5F97\u610F\u3002",
        src: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "\u7530\u4E2D \u7406\u6C99",
        nameEn: "Risa Tanaka",
        role: "Stylist",
        specialty: "\u30D1\u30FC\u30DE\u30FB\u30C8\u30EA\u30FC\u30C8\u30E1\u30F3\u30C8",
        bio: "\u30D8\u30A2\u30B1\u30A2\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8\u3068\u3057\u3066\u3001\u9AEA\u8CEA\u6539\u5584\u306B\u7279\u5316\u3057\u305F\u65BD\u8853\u3092\u884C\u3046\u3002\u50B7\u3093\u3060\u9AEA\u3092\u518D\u751F\u3055\u305B\u308B\u30C8\u30EA\u30FC\u30C8\u30E1\u30F3\u30C8\u6280\u8853\u3068\u3001\u81EA\u7136\u306A\u30A6\u30A7\u30FC\u30D6\u3092\u4F5C\u308B\u30D1\u30FC\u30DE\u3092\u5F97\u610F\u3068\u3059\u308B\u3002",
        src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "stylist",
        class: "bg-blanc-bg py-28 md:py-40 px-6"
      }, _attrs))}><div class="max-w-5xl mx-auto"><div class="mb-16"><p class="${ssrRenderClass(["reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-4", unref(inView) && "in-view"])}"> STYLIST </p><h2 class="${ssrRenderClass(["reveal reveal-delay-1 font-garamond text-4xl md:text-5xl italic font-light text-blanc-primary", unref(inView) && "in-view"])}"> Our Team </h2></div><div class="grid md:grid-cols-2 gap-10 md:gap-16"><!--[-->`);
      ssrRenderList(stylists, (s, i) => {
        _push(`<div class="${ssrRenderClass(["reveal", `reveal-delay-${i + 1}`, unref(inView) && "in-view", "flex flex-col gap-6"])}"><div class="relative overflow-hidden aspect-[4/5]"><img${ssrRenderAttr("src", s.src)}${ssrRenderAttr("alt", s.name)} class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"></div><div class="flex flex-col gap-3"><div class="flex items-baseline gap-4"><p class="font-garamond text-2xl italic font-light text-blanc-primary">${ssrInterpolate(s.name)}</p><p class="font-josefin text-[10px] tracking-widest text-blanc-muted">${ssrInterpolate(s.nameEn)}</p></div><div class="flex items-center gap-3"><span class="thin-rule"></span><p class="font-josefin text-[10px] tracking-[0.3em] text-blanc-accent">${ssrInterpolate(s.role)}</p></div><p class="font-josefin text-[11px] tracking-widest text-blanc-muted">\u62C5\u5F53: ${ssrInterpolate(s.specialty)}</p><p class="font-jp text-sm text-blanc-muted leading-8">${ssrInterpolate(s.bio)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StylistSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FlowSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { inView } = useInView();
    const steps = [
      { num: "01", title: "\u3054\u4E88\u7D04", desc: "LINE\u307E\u305F\u306F\u304A\u96FB\u8A71\u306B\u3066\u3002\u3054\u5E0C\u671B\u306E\u65E5\u6642\u3092\u304A\u4F1D\u3048\u304F\u3060\u3055\u3044\u3002" },
      { num: "02", title: "\u30AB\u30A6\u30F3\u30BB\u30EA\u30F3\u30B0", desc: "\u3054\u6765\u5E97\u5F8C\u3001\u3054\u5E0C\u671B\u30FB\u304A\u60A9\u307F\u3092\u4E01\u5BE7\u306B\u4F3A\u3044\u307E\u3059\u3002" },
      { num: "03", title: "\u65BD\u8853", desc: "\u5B8C\u5168\u500B\u5BA4\u3067\u30EA\u30E9\u30C3\u30AF\u30B9\u3057\u306A\u304C\u3089\u65BD\u8853\u3092\u304A\u53D7\u3051\u3044\u305F\u3060\u3051\u307E\u3059\u3002" },
      { num: "04", title: "\u30A2\u30D5\u30BF\u30FC\u30D5\u30A9\u30ED\u30FC", desc: "\u30DB\u30FC\u30E0\u30B1\u30A2\u306E\u30A2\u30C9\u30D0\u30A4\u30B9\u3084\u6B21\u56DE\u306E\u3054\u63D0\u6848\u3092\u3044\u305F\u3057\u307E\u3059\u3002" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "flow",
        class: "bg-blanc-light py-28 md:py-40 px-6"
      }, _attrs))}><div class="max-w-5xl mx-auto"><div class="mb-16"><p class="${ssrRenderClass(["reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-4", unref(inView) && "in-view"])}"> HOW IT WORKS </p><h2 class="${ssrRenderClass(["reveal reveal-delay-1 font-garamond text-4xl md:text-5xl italic font-light text-blanc-primary", unref(inView) && "in-view"])}"> Flow </h2></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-0"><!--[-->`);
      ssrRenderList(steps, (s, i) => {
        _push(`<div class="${ssrRenderClass([
          "reveal",
          `reveal-delay-${i + 1}`,
          unref(inView) && "in-view",
          "relative flex flex-col gap-5 p-8 border-t border-blanc-accent/30"
        ])}"><span class="font-garamond text-5xl font-light text-blanc-accent/40 leading-none">${ssrInterpolate(s.num)}</span><div class="h-px w-8 bg-blanc-accent"></div><h3 class="font-jp text-blanc-primary text-sm font-medium">${ssrInterpolate(s.title)}</h3><p class="font-jp text-blanc-muted text-xs leading-7">${ssrInterpolate(s.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FlowSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ReserveSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { inView } = useInView();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "reserve",
        class: "bg-blanc-primary py-28 md:py-44 px-6"
      }, _attrs))}><div class="max-w-2xl mx-auto text-center"><p class="${ssrRenderClass(["reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-8", unref(inView) && "in-view"])}"> RESERVATION </p><h2 class="${ssrRenderClass(["reveal reveal-delay-1 font-garamond text-4xl md:text-5xl lg:text-6xl italic font-light text-blanc-white leading-snug mb-6", unref(inView) && "in-view"])}"> \u7279\u5225\u306A\u6642\u9593\u3092\u3001<br>\u3054\u4E00\u7DD2\u306B\u3002 </h2><p class="${ssrRenderClass(["reveal reveal-delay-2 font-jp text-blanc-accent text-sm leading-8 mb-14", unref(inView) && "in-view"])}"> \u521D\u56DE\u9650\u5B9A\u3067\u30AB\u30C3\u30C820%OFF\u306E\u30A6\u30A7\u30EB\u30AB\u30E0\u30AA\u30D5\u30A1\u30FC\u3092\u3054\u7528\u610F\u3057\u3066\u304A\u308A\u307E\u3059\u3002 </p><div class="${ssrRenderClass(["reveal reveal-delay-3 grid sm:grid-cols-2 gap-4 mb-10", unref(inView) && "in-view"])}"><a href="#" class="flex items-center justify-center gap-3 border border-blanc-accent/40 text-blanc-white hover:bg-blanc-accent/10 transition-colors duration-300 py-5 px-8"><svg class="w-5 h-5 text-blanc-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"></path></svg><span class="font-josefin text-[11px] tracking-[0.3em]">LINE \u3067\u4E88\u7D04</span></a><a href="tel:03-5428-7392" class="flex items-center justify-center gap-3 border border-blanc-accent/40 text-blanc-white hover:bg-blanc-accent/10 transition-colors duration-300 py-5 px-8"><svg class="w-5 h-5 text-blanc-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span class="font-josefin text-[11px] tracking-[0.3em]">03-5428-7392</span></a></div><p class="${ssrRenderClass(["reveal reveal-delay-4 font-jp text-blanc-muted text-xs", unref(inView) && "in-view"])}"> \u203B \u5B8C\u5168\u4E88\u7D04\u5236\u3067\u3059\u3002\u5F53\u65E5\u306E\u3054\u9023\u7D61\u306F\u304A\u96FB\u8A71\u306B\u3066\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002 </p></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReserveSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AccessSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { inView } = useInView();
    const info = [
      { label: "\u4F4F\u6240", value: "\u6771\u4EAC\u90FD\u6E0B\u8C37\u533A\u795E\u53571-15-8 BLANC\u30D3\u30EB3F" },
      { label: "\u30A2\u30AF\u30BB\u30B9", value: "JR\u5C71\u624B\u7DDA\u30FB\u6E0B\u8C37\u99C5 \u30CF\u30C1\u516C\u53E3 \u5F92\u6B695\u5206 / \u6771\u4EAC\u30E1\u30C8\u30ED\u9280\u5EA7\u7DDA\u30FB\u6E0B\u8C37\u99C5 A2\u51FA\u53E3 \u5F92\u6B694\u5206" },
      { label: "TEL", value: "03-5428-7392" },
      { label: "\u55B6\u696D\u6642\u9593", value: "10:00 \u2014 20:00\uFF08\u6700\u7D42\u53D7\u4ED8 19:00\uFF09" },
      { label: "\u5B9A\u4F11\u65E5", value: "\u6BCE\u9031\u706B\u66DC\u65E5" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "access",
        class: "bg-blanc-bg py-28 md:py-40 px-6"
      }, _attrs))}><div class="max-w-5xl mx-auto"><div class="mb-16"><p class="${ssrRenderClass(["reveal font-josefin text-[10px] tracking-[0.5em] text-blanc-accent mb-4", unref(inView) && "in-view"])}"> ACCESS </p><h2 class="${ssrRenderClass(["reveal reveal-delay-1 font-garamond text-4xl md:text-5xl italic font-light text-blanc-primary", unref(inView) && "in-view"])}"> Visit Us </h2></div><div class="grid md:grid-cols-2 gap-12 md:gap-20 items-start"><div class="${ssrRenderClass(["reveal", unref(inView) && "in-view"])}"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2!2d139.6994!3d35.6588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca6f3e3c0d1%3A0x6c9bb1d54cb0cc8!2z5riL6LC3!5e0!3m2!1sja!2sjp!4v1700000000001!5m2!1sja!2sjp" class="w-full h-72 border-0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="atelier BLANC \u30A2\u30AF\u30BB\u30B9\u30DE\u30C3\u30D7"></iframe></div><div class="${ssrRenderClass(["reveal reveal-delay-1 flex flex-col gap-0", unref(inView) && "in-view"])}"><!--[-->`);
      ssrRenderList(info, (item) => {
        _push(`<div class="py-6 border-b border-blanc-light flex flex-col gap-1.5 first:border-t"><p class="font-josefin text-[10px] tracking-[0.4em] text-blanc-accent">${ssrInterpolate(item.label)}</p><p class="font-jp text-sm text-blanc-primary leading-7">${ssrInterpolate(item.value)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccessSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-blanc-light border-t border-blanc-accent/20 py-12 px-6" }, _attrs))}><div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"><div class="text-center md:text-left"><p class="font-josefin text-blanc-primary text-xs tracking-[0.5em] font-light">atelier BLANC</p><p class="font-jp text-blanc-muted text-xs mt-1">\u3042\u306A\u305F\u3089\u3057\u3055\u3092\u3001\u89E3\u653E\u3059\u308B\u5834\u6240\u3002</p></div><a href="#" aria-label="Instagram" class="text-blanc-muted hover:text-blanc-primary transition-colors duration-300"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a><p class="font-jp text-blanc-muted/60 text-xs"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} atelier BLANC. All rights reserved. </p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "atelier BLANC | \u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30D8\u30A2\u30B5\u30ED\u30F3"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteNav = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_ConceptSection = _sfc_main$8;
      const _component_ServiceSection = _sfc_main$7;
      const _component_WorksSection = _sfc_main$6;
      const _component_StylistSection = _sfc_main$5;
      const _component_FlowSection = _sfc_main$4;
      const _component_ReserveSection = _sfc_main$3;
      const _component_AccessSection = _sfc_main$2;
      const _component_SiteFooter = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-blanc-bg min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteNav, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ConceptSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ServiceSection, null, null, _parent));
      _push(ssrRenderComponent(_component_WorksSection, null, null, _parent));
      _push(ssrRenderComponent(_component_StylistSection, null, null, _parent));
      _push(ssrRenderComponent(_component_FlowSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ReserveSection, null, null, _parent));
      _push(ssrRenderComponent(_component_AccessSection, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DlKA-vyX.mjs.map

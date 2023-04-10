import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".navbar.svelte-8aj6dd.svelte-8aj6dd{background-color:var(--dark);display:flex;justify-content:space-between;align-items:center;position:relative;height:4rem}.logo.svelte-8aj6dd.svelte-8aj6dd{margin-left:6vw}@media only screen and (max-width: 767px){nav.svelte-8aj6dd.svelte-8aj6dd{opacity:0;position:absolute;top:100%;left:100%;background-color:var(--dark);width:100%;transition:all 300ms ease-in-out}nav.open.svelte-8aj6dd.svelte-8aj6dd{opacity:1;left:0}}ul.svelte-8aj6dd.svelte-8aj6dd{display:flex;flex-direction:column;justify-content:space-between;align-items:center;gap:5vh;margin-top:2vh;margin-bottom:4vh;list-style:none;font-size:1.1rem}li.svelte-8aj6dd>a.svelte-8aj6dd{display:inline-block;transition:all 200ms ease-in-out}li.svelte-8aj6dd>a.svelte-8aj6dd:hover{transform:scale(1.1)}li.svelte-8aj6dd>a.svelte-8aj6dd:active{transform:scale(0.9)}.current.svelte-8aj6dd.svelte-8aj6dd{position:relative}.current.svelte-8aj6dd.svelte-8aj6dd::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:var(--secondary)}.burger.svelte-8aj6dd.svelte-8aj6dd{height:28px;aspect-ratio:1;border:2px solid var(--light);background-color:transparent;border-radius:5px;margin-right:6vw;display:flex;align-items:center;justify-content:center}.burger.svelte-8aj6dd>div.svelte-8aj6dd{height:2px;width:14px;background-color:var(--light);position:absolute;transition:all 330ms ease-in-out}.bar-1.svelte-8aj6dd.svelte-8aj6dd{transform:translateY(-5px)}.bar-3.svelte-8aj6dd.svelte-8aj6dd{transform:translateY(5px)}.burger.open.svelte-8aj6dd .bar-1.svelte-8aj6dd{transform:rotateZ(45deg)}.burger.open.svelte-8aj6dd .bar-2.svelte-8aj6dd{opacity:0}.burger.open.svelte-8aj6dd .bar-3.svelte-8aj6dd{transform:rotateZ(-45deg)}@media only screen and (min-width: 768px){.logo.svelte-8aj6dd.svelte-8aj6dd{margin-left:3vw}.burger.svelte-8aj6dd.svelte-8aj6dd{display:none}nav.svelte-8aj6dd.svelte-8aj6dd{display:block;position:relative}ul.svelte-8aj6dd.svelte-8aj6dd{margin:0 2vw;flex-direction:row;gap:2vw}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="navbar svelte-8aj6dd"><a href="/" class="logo svelte-8aj6dd">Kur&#39;an&#39;ı Kerim</a>
    <nav class="${["svelte-8aj6dd", ""].join(" ").trim()}"><ul class="svelte-8aj6dd">
            <li class="svelte-8aj6dd"><a href="/" class="${["svelte-8aj6dd", "current"].join(" ").trim()}">Anasayfa</a></li>
            
            <li class="svelte-8aj6dd"><a href="/translation" class="${["svelte-8aj6dd", ""].join(" ").trim()}">Meal</a></li>
            
            <li class="svelte-8aj6dd"><a href="/arabic" class="${["svelte-8aj6dd", ""].join(" ").trim()}">Arapça-Meal</a></li></ul></nav>
    <button class="${["burger svelte-8aj6dd", ""].join(" ").trim()}"><div class="bar-1 svelte-8aj6dd"></div>
        <div class="bar-2 svelte-8aj6dd"></div>
        <div class="bar-3 svelte-8aj6dd"></div></button>
</div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-122nbob{height:4rem;background-color:var(--dark);align-items:center;justify-content:center;display:flex}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer><div class="svelte-122nbob"><span>© Tüm hakları saklıdır. </span> <strong>| Powered by S.Y</strong></div>
</footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');*{font-family:'Poppins', sans-serif;margin:0;padding:0;box-sizing:border-box;text-decoration:none;color:var(--light)}:root{--primary:#887fff;--secondary:#f3a712;--dark:#12192C;--light:#ebebeb}body{background-color:#1e232b;max-width:100%;overflow-x:hidden;height:100%}html{max-width:100%;overflow-x:hidden;height:100%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};

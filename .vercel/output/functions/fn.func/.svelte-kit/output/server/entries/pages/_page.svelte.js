import { c as create_ssr_component, e as escape, o as onDestroy, d as each, v as validate_component } from "../../chunks/index.js";
const SurahNameCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h4.svelte-tagpwx{color:#12192C}span.svelte-tagpwx{color:#12192C;font-size:20px}.a.svelte-tagpwx{display:flex;justify-content:flex-start;align-items:center}.b.svelte-tagpwx{margin-left:auto;margin-right:auto}.card.svelte-tagpwx{background-color:var(--primary);padding:4px;margin:15px 5px;text-align:center;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;border:2px  solid #12192C;border-radius:10px;cursor:pointer}.card.svelte-tagpwx:hover{transform:scale(1.1)}.container.svelte-tagpwx{padding:4px 16px;color:#12192C}",
  map: null
};
const SurahNameCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sura = {
    id: 0,
    name: "",
    name_original: "",
    verse_count: 0
  } } = $$props;
  if ($$props.sura === void 0 && $$bindings.sura && sura !== void 0)
    $$bindings.sura(sura);
  $$result.css.add(css$1);
  return `
<div class="card svelte-tagpwx"><div class="a svelte-tagpwx"><span class="svelte-tagpwx">${escape(sura.id)}-</span>
        <div class="b svelte-tagpwx"><h4 class="svelte-tagpwx">${escape(sura.name)} - ${escape(sura.name_original)}</h4>
            <div class="container svelte-tagpwx">Ayet Sayısı: ${escape(sura.verse_count)}</div></div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media screen and  (max-width: 800px){.grid-container.svelte-vctwhn{grid-template-columns:auto auto!important;;}}@media screen and  (max-width: 600px){.grid-container.svelte-vctwhn{grid-template-columns:auto!important;;}}.grid-container.svelte-vctwhn{display:grid;grid-template-columns:auto auto auto auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let show;
  let { data } = $$props;
  onDestroy(() => {
    show = false;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  show = false;
  return `<section>${show ? `${data.surahs ? `<div class="grid-container svelte-vctwhn">${each(data.surahs, (sura, i) => {
    return `<div>${validate_component(SurahNameCard, "SurahNameCard").$$render($$result, { sura }, {}, {})}
                </div>`;
  })}</div>` : ``}` : ``}
</section>`;
});
export {
  Page as default
};

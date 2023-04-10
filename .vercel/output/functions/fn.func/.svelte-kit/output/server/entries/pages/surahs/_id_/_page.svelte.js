import { c as create_ssr_component, e as escape, o as onDestroy, d as each, v as validate_component } from "../../../../chunks/index.js";
const SurahVersesCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h4.svelte-1db0rip{color:#12192C;font-size:40px}span.svelte-1db0rip{color:#12192C;font-size:20px}.a.svelte-1db0rip{display:flex;justify-content:flex-start;align-items:center}.b.svelte-1db0rip{margin-left:auto;margin-right:auto}.card.svelte-1db0rip{background-color:var(--primary);padding:4px;margin:15px 5px;text-align:center;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;border:2px  solid #12192C;border-radius:10px;cursor:pointer}.card.svelte-1db0rip:hover{transform:scale(1.1)}.container.svelte-1db0rip{padding:4px 16px;color:#12192C}",
  map: null
};
const SurahVersesCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { verses = {
    id: 0,
    verse: "",
    transcription: "",
    translation: { text: "" }
  } } = $$props;
  if ($$props.verses === void 0 && $$bindings.verses && verses !== void 0)
    $$bindings.verses(verses);
  $$result.css.add(css$1);
  return `
<div class="card svelte-1db0rip"><div class="a svelte-1db0rip"><span class="svelte-1db0rip">${escape(verses.id)}-</span>
        <div class="b svelte-1db0rip"><h4 class="svelte-1db0rip">${escape(verses.verse)}</h4>
            <div class="container svelte-1db0rip"><div>Okunuş: ${escape(verses.transcription)}</div>
                <div>Meal: ${escape(verses.translation.text)}</div></div></div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-container.svelte-1vnxwsl{display:grid;grid-template-columns:auto;margin:0 30px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let show;
  let { data } = $$props;
  console.log(data.verses);
  onDestroy(() => {
    show = false;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  show = false;
  return `<section>${show ? `${data.verses ? `<div class="grid-container svelte-1vnxwsl">${each(data.verses, (verse, i) => {
    return `
                <div>${validate_component(SurahVersesCard, "SurahVersesCard").$$render($$result, { verses: verse }, {}, {})}
                </div>`;
  })}</div>` : ``}` : ``}
</section>`;
});
export {
  Page as default
};

import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-17lba46{margin-top:10rem;text-align:center;height:100vh;align-items:center;justify-content:center}h2.svelte-17lba46{font-size:85px}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log("page :: ", $page.status);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="error svelte-17lba46"><h1>Hata!</h1>
        <span>${escape($page.status == 404 ? "Aradığınız sayfa bulunamadı" : "Bir Hata Oluştu")}</span>
        <h2 class="svelte-17lba46">${escape($page.status)}</h2>
    </div>`;
});
export {
  Error$1 as default
};

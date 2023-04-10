import * as server from '../entries/pages/surahs/_id_/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/surahs/_id_/_page.svelte.js')).default;
export const file = '_app/immutable/entry/surahs-_id_-page.svelte.d9ec606d.js';
export { server };
export const server_id = "src/routes/surahs/[id]/+page.server.ts";
export const imports = ["_app/immutable/entry/surahs-_id_-page.svelte.d9ec606d.js","_app/immutable/chunks/index.2914ea36.js","_app/immutable/chunks/navigation.2e92e3cc.js","_app/immutable/chunks/singletons.5423ef70.js"];
export const stylesheets = ["_app/immutable/assets/_page.90f21877.css"];
export const fonts = [];

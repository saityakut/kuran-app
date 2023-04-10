const prerender = false;
const load = async ({ params }) => {
  const verses = (await (await fetch(`https://api.acikkuran.com/surah/${params.id}?author=11`)).json()).data.verses;
  return { verses };
};
export {
  load,
  prerender
};

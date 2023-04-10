export const load = async () => {
    const surahs =(await (await fetch('https://api.acikkuran.com/surahs')).json()).data;
    return {surahs};
}
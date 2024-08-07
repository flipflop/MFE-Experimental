export default async function getCssString(cssPath) {
    const baseStyle = await fetch(cssPath).then(res => res.text());
    const cssStyle = document.createElement("style");
    cssStyle.innerHTML = baseStyle;
    cssStyle.remove();
    return baseStyle;
}
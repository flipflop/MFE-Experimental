let addStylesheet = (cssRules) => {
  var styleElement = document.createElement("style");
  styleElement.textContent = cssRules
  document.getElementsByTagName("head")[0].appendChild(styleElement);;
}

export default addStylesheet;
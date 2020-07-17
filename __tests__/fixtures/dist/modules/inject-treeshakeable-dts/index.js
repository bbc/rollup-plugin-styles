/** @type {HTMLElement[]} */
var containers = [];
/** @type {{prepend:HTMLStyleElement,append:HTMLStyleElement}[]} */
var styleTags = [];

/**
 * @param {string} css
 * @param {object} options
 * @param {boolean} [options.prepend]
 * @param {boolean} [options.singleTag]
 * @param {string} [options.container]
 * @param {Record<string,string>} [options.attributes]
 * @returns {void}
 */
function injector_d9f9689a (css, options) {
  if (!css || typeof document === "undefined") return;

  var position = options.prepend === true ? "prepend" : "append";
  var singleTag = options.singleTag === true;

  var container =
    typeof options.container === "string"
      ? document.querySelector(options.container)
      : document.getElementsByTagName("head")[0];

  function createStyleTag() {
    var styleTag = document.createElement("style");
    styleTag.setAttribute("type", "text/css");
    if (options.attributes) {
      var k = Object.keys(options.attributes);
      for (var i = 0; i < k.length; i++) {
        styleTag.setAttribute(k[i], options.attributes[k[i]]);
      }
    }
    var pos = position === "prepend" ? "afterbegin" : "beforeend";
    container.insertAdjacentElement(pos, styleTag);
    return styleTag;
  }

  /** @type {HTMLStyleElement} */
  var styleTag;

  if (singleTag) {
    var id = containers.indexOf(container);

    if (id === -1) {
      id = containers.push(container) - 1;
      styleTags[id] = {};
    }

    if (styleTags[id] && styleTags[id][position]) {
      styleTag = styleTags[id][position];
    } else {
      styleTag = styleTags[id][position] = createStyleTag();
    }
  } else {
    styleTag = createStyleTag();
  }

  // strip potential UTF-8 BOM if css was read from a file
  if (css.charCodeAt(0) === 0xfeff) css = css.substring(1);

  if (styleTag.styleSheet) {
    styleTag.styleSheet.cssText += css;
  } else {
    styleTag.appendChild(document.createTextNode(css));
  }
}

const css = ".style_module {\n  color: #1F4F7F;\n}\n\n.style_module2 {\n}\n";
var injected = false;
var modules_5a199c00 = {get "primary"() { if (!injected) { injected = true; injector_d9f9689a(css,{}); } return "#BF4040"; },
get "secondary"() { if (!injected) { injected = true; injector_d9f9689a(css,{}); } return "#1F4F7F"; },
get "module"() { if (!injected) { injected = true; injector_d9f9689a(css,{}); } return "style_module"; },
get "module2"() { if (!injected) { injected = true; injector_d9f9689a(css,{}); } return "style_module2 composed_composition composition2_compositioned"; },
inject() { if (!injected) { injected = true; injector_d9f9689a(css,{}); } },};

const css$1 = ".composition2_compositioned {\n  width: 30%;\n}\n";
var injected$1 = false;
var modules_354770d7 = {get "compositioned"() { if (!injected$1) { injected$1 = true; injector_d9f9689a(css$1,{}); } return "composition2_compositioned"; },
inject() { if (!injected$1) { injected$1 = true; injector_d9f9689a(css$1,{}); } },};

if (modules_354770d7.inject) modules_354770d7.inject();
else console.log(modules_5a199c00.module, modules_354770d7.compositioned);

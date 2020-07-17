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
function injector_ed8d1646 (css, options) {
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

const css = ".global {\n  color: red;\n}\n";
injector_ed8d1646(css,{});

const css$1 = ".a_module_a {\n  color: red;\n}\n";
var modules_bdb828b9 = {"a":"a_module_a"};
injector_ed8d1646(css$1,{});

const css$2 = ".b_module_b {\n  color: red; }\n";
var modules_9fa995d6 = {"b":"b_module_b"};
injector_ed8d1646(css$2,{});

const css$3 = ".c_module_c {\n  color: red;\n}\n";
var modules_2b321dac = {"c":"c_module_c"};
injector_ed8d1646(css$3,{});

const css$4 = ".d_module_d {\n  color: #f00;\n}\n";
var modules_39901a8c = {"d":"d_module_d"};
injector_ed8d1646(css$4,{});

console.log(modules_bdb828b9, modules_9fa995d6, modules_2b321dac, modules_39901a8c);

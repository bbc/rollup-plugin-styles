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
function injector_3b481dac (css, options) {
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

var css = ".foo {\n  color: red;\n}\n";
injector_3b481dac(css,{});

var css$1 = ".bar {\n  color: red;\n}\n";
injector_3b481dac(css$1,{});

var css$2 = ".stylus {\n  color: #f00;\n  background: #f00;\n}\n";
injector_3b481dac(css$2,{});

var css$3 = ".pcss {\n  color: red;\n}\n";
injector_3b481dac(css$3,{});

var css$4 = ".sass {\n  width: 30%;\n  color: red; }\n";
injector_3b481dac(css$4,{});

var css$5 = ".less {\n  color: #6c94be;\n}\n";
injector_3b481dac(css$5,{});

console.log(css, css$1);

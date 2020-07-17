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
function injector_ea22477b (css, options) {
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

var css = ".style {\n  width: 30%;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fdGVzdHNfXy9maXh0dXJlcy9zYXNzL3N0eWxlLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsVUFBVSxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlIHtcbiAgd2lkdGg6IDMwJTtcbiAgY29sb3I6IHJlZDsgfVxuIl19 */";
injector_ea22477b(css,{});

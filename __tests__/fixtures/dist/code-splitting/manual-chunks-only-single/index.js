import { m as modules_d55e0e9b, a as modules_3ede29d3 } from './fourts-309ca5ed.js';
import './nondynamics-36d7f0a7.js';

console.log("sub");

(async () => {
  const first$1 = await Promise.resolve().then(function () { return first; });
  const second$1 = await Promise.resolve().then(function () { return second; });
  const otherScript$1 = await Promise.resolve().then(function () { return otherScript; });
  console.log(first$1, second$1, otherScript$1);
})();

console.log(modules_d55e0e9b);

(async () => {
  const first$1 = await Promise.resolve().then(function () { return first; });
  const second$1 = await Promise.resolve().then(function () { return second; });
  const otherScript$1 = await Promise.resolve().then(function () { return otherScript; });
  console.log(first$1, second$1, otherScript$1);
})();

console.log(modules_3ede29d3);

var css = ".first_partial {\n  color: rosybrown;\n}\n.first_first {\n  color: red; }\n";
var modules_efa96bb5 = {"partial":"first_partial","first":"first_first"};

var first = /*#__PURE__*/Object.freeze({
  __proto__: null,
  css: css,
  'default': modules_efa96bb5
});

var css$1 = ".second_second {\n  color: royalblue; }\n";
var modules_7a038d99 = {"second":"second_second"};

var second = /*#__PURE__*/Object.freeze({
  __proto__: null,
  css: css$1,
  'default': modules_7a038d99
});

(async () => {
  await Promise.resolve().then(function () { return noncss; });
  const nestedScript$1 = await Promise.resolve().then(function () { return nestedScript; });
  console.log(nestedScript$1);
})();

var otherScript = /*#__PURE__*/Object.freeze({
  __proto__: null
});

console.log("noncss");

var noncss = /*#__PURE__*/Object.freeze({
  __proto__: null
});

var nestedScript = /*#__PURE__*/Object.freeze({
  __proto__: null
});

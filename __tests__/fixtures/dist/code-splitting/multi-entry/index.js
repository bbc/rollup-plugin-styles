import './index-bb3ba0d0.js';

var modules_d55e0e9b = {"fourth":"fourth_fourth"};

(async () => {
  const first = await import('./first-5ef3cedc.js');
  const second = await import('./second-da297dc5.js');
  const otherScript = await import('./other-script-98094377.js');
  console.log(first, second, otherScript);
})();

console.log(modules_d55e0e9b);

var modules_d55e0e9b = {"fourth":"fourth_fourth"};

console.log("sub");

(async () => {
  const first = await import('./first-c5b09b56.js');
  const second = await import('./second-86e63d6c.js');
  const otherScript = await import('./other-script-98094377.js');
  console.log(first, second, otherScript);
})();

console.log(modules_d55e0e9b);

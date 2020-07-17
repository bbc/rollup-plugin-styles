(async () => {
  await import('./noncss.js');
  const nestedScript = await import('./nested-script.js');
  console.log(nestedScript);
})();

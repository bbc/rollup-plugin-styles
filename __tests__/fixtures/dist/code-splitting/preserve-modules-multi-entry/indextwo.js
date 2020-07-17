import './sub/index.js';
import modules_3ede29d3 from './fourthtwo.scss.js';

(async () => {
  const first = await import('./first.scss.js');
  const second = await import('./second.scss.js');
  const otherScript = await import('./other-script.js');
  console.log(first, second, otherScript);
})();

console.log(modules_3ede29d3);

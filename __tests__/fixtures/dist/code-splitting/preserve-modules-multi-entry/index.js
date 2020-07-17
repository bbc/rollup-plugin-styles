import modules_d55e0e9b from './fourth.scss.js';
import './sub/index.js';

(async () => {
  const first = await import('./first.scss.js');
  const second = await import('./second.scss.js');
  const otherScript = await import('./other-script.js');
  console.log(first, second, otherScript);
})();

console.log(modules_d55e0e9b);

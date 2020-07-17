import { a as modules_3ede29d3 } from './fourts-309ca5ed.js';
import './index-bb3ba0d0.js';

(async () => {
  const first = await import('./first-c5b09b56.js');
  const second = await import('./second-86e63d6c.js');
  const otherScript = await import('./other-script-dfcd0135.js');
  console.log(first, second, otherScript);
})();

console.log(modules_3ede29d3);

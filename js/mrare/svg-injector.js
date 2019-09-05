//
// svg-injector.js
//

// Initialize the injection of SVGs into the DOM from src on img tags

// SVGInjector uses Array.from() which IE does not support.
import 'core-js/features/array/from';
import { SVGInjector } from '@tanem/svg-injector';

SVGInjector(document.querySelectorAll('[data-inject-svg]'), {
  afterEach(err, svg) {
    if (typeof jarallax === 'function') {
      svg.dispatchEvent(new CustomEvent('injected.mr.SVGInjector', { bubbles: true }));
    }
  },
});

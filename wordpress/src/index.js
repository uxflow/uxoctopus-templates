import './scss/main.scss';

import {
  hamb,
  scroll,
  onInputBlur,
  onInputFocus,
} from '@uxoctopus/wordpress';

window.hamb = hamb;

window.onInputBlur = onInputBlur;
window.onInputFocus = onInputFocus;

window.addEventListener('scroll', () => scroll('#head', '.pointer'))

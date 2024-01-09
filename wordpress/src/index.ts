import "~/@uxoctopus/styles"
import "./scss/main.scss"

import { hamb, onInputBlur, onInputFocus, scroll } from "@uxoctopus/wordpress"

declare const window: Window &
  typeof globalThis & {
    hamb: typeof hamb
    onInputBlur: typeof onInputBlur
    onInputFocus: typeof onInputFocus
  }

window.hamb = hamb

window.onInputBlur = onInputBlur
window.onInputFocus = onInputFocus

window.addEventListener("scroll", () => scroll("#head", ".pointer"))

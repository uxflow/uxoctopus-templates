import { Suspense } from "react"
import { createRoot } from "react-dom/client"

import App from "./app"

const container = document.getElementById("root") as Element

const root = createRoot(container)

root.render(
  <Suspense fallback="Loading ...">
    <App />
  </Suspense>
)

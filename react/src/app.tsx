import "@uxoctopus/styles"
import "@/styles/main.scss"

import { domAnimation, LazyMotion } from "framer-motion"

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <h1>Hello, Team!</h1>
    </LazyMotion>
  )
}

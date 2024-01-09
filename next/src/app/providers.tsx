"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

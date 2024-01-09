import "@uxoctopus/styles";

import "@/styles/main.scss";

import type { PropsWithChildren } from "react";
import Providers from "./providers";

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" className="scroll-smooth scroll-mt-10">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

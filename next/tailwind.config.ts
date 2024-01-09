import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/*.tsx"],

  presets: [require("@uxoctopus/styles/tailwind.config")],
};

export default config;

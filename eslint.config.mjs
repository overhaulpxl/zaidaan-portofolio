import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Local agent tooling and vendored skill runtimes are not application source.
    ".agents/**",
    ".augment/**",
    ".claude/**",
    ".codebuddy/**",
    ".codewhale/**",
    ".codex/**",
    ".continue/**",
    ".cursor/**",
    ".factory/**",
    ".gemini/**",
    ".github/prompts/**",
    ".impeccable/**",
    ".kilocode/**",
    ".kiro/**",
    ".opencode/**",
    ".pi/**",
    ".qoder/**",
    ".roo/**",
    ".roocode/**",
    ".rovodev/**",
    ".trae/**",
    ".warp/**",
    ".windsurf/**",
  ]),
]);

export default eslintConfig;

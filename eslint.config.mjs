import globals from "globals"
import pluginJs from "@eslint/js"


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    rules: {
        semi: ["error", "never"]
    }
},
]
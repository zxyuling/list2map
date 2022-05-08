import { babel } from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "umd",
      name: "list2map",
    },
    plugins: [
      terser(),
      typescript(),
      babel({ babelHelpers: "bundled" }),
      uglify(),
    ],
  },
];

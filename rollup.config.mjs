import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

import { createRequire } from "node:module";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
        minifyInternalExports: false
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
        minifyInternalExports: false
      },
    ],
    plugins: [
      peerDepsExternal({includeDependencies: true}),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
    ],
  },
  {
    input: "build/index.d.ts",
    output: [{ file: "build/index.d.ts", format: "es", minifyInternalExports: false }],
    plugins: [dts()],
    external: ["react", "react-dom", /\.css$/],
  },
];

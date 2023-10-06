import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');


export default [{
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      exports: 'named',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      exports: 'named'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      extensions: ['.css']
    })
  ]
}, {
  input: 'build/index.d.ts',
  output: [{ file: 'build/index.d.ts', format: 'es' }],
  plugins: [dts()],
  external: [/\.css$/]
}];
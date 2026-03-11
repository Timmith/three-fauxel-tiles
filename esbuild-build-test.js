import { build } from 'esbuild'
import { glsl } from 'esbuild-plugin-glsl'
import { threeLegacyCompatPlugin } from './scripts/esbuild-three-legacy-compat.js'

build({
  entryPoints: ['test/index.ts'],
  outdir: 'test-www',
  bundle: true,
  sourcemap: true,
  minify: false,
  splitting: false,
  format: 'esm',
  target: ['esnext'],
  tsconfig: './tsconfig.test.json',
  plugins: [
    threeLegacyCompatPlugin(),
    glsl({
      minify: false
    })
  ]
}).catch(() => process.exit(1))

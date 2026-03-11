import { build } from 'esbuild'
import { glsl } from 'esbuild-plugin-glsl'

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
    glsl({
      minify: false
    })
  ]
}).catch(() => process.exit(1))

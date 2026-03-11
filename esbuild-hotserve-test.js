import { context } from 'esbuild'
import { glsl } from 'esbuild-plugin-glsl'
import { threeLegacyCompatPlugin } from './scripts/esbuild-three-legacy-compat.js'

const ctx = await context({
  entryPoints: ['test/index.ts'],
  outdir: 'test-www',
  bundle: true,
  sourcemap: true,
  minify: true,
  splitting: true,
  format: 'esm',
  target: ['esnext'],
  tsconfig: './tsconfig.test.json',
  plugins: [
    threeLegacyCompatPlugin(),
    glsl({
      minify: false
    })
  ]
})

await ctx.watch()
await ctx.serve({
  servedir: 'test-www',
  port: 8002
})

await new Promise(() => {})

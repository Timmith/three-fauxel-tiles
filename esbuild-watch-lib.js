import { context } from 'esbuild'
import { glsl } from 'esbuild-plugin-glsl'
import { nodeExternalsPlugin } from 'esbuild-node-externals'

const ctx = await context({
  entryPoints: ['src/index.ts', 'src/legacy.ts', 'src/rendering.ts'],
  outdir: 'lib',
  bundle: true,
  sourcemap: true,
  minify: false,
  splitting: false,
  format: 'esm',
  target: ['esnext'],
  tsconfig: './tsconfig.module.json',
  plugins: [
    glsl({
      minify: false
    }),
    nodeExternalsPlugin()
  ]
})

await ctx.watch()

await new Promise(() => {})

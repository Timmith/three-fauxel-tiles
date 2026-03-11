import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compatModulePath = path.join(
  __dirname,
  '..',
  'test',
  'helpers',
  'threeLegacyCompat.ts'
)

export function threeLegacyCompatPlugin() {
  return {
    name: 'three-legacy-compat',
    setup(build) {
      build.onResolve({ filter: /^three$/ }, (args) => {
        if (args.importer.includes(`${path.sep}three-pixel-font${path.sep}`)) {
          return {
            path: compatModulePath
          }
        }
      })
    }
  }
}

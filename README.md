# three-fauxel-tiles

A experiment to render faux PBR pixel-art, by prerendering it onto a tile atlas, just in time.

## Development

This repo now uses `npm` as the canonical package manager.

```bash
npm install
npm run dev
```

Expect a fun visual demo at:
http://localhost:8002/index.html?test=jitPointTilesAndSprites&play=true&christmas=true&pixel-down-sample=2

WSAD controls the movement of the skeleton, a wheelbarrow is also spawned beside you which you can grab and drag around by holding SpaceBar and moving in any direction (it may be a bit tricky at first to grab). Also, the wood logs can be picked up using the wheelbarrow. The tile you are facing can be built on using the B(key) and destructed by using the X(key).

The browser harness is built into `test-www/`. The distributable library is emitted to `lib/` with declarations in `types/`.

For integration into another project, prefer the renderer-focused default or explicit rendering entrypoint:

```ts
import { MapScrollingView, MapTileMaker } from 'three-fauxel-tiles'
```

```ts
import { MapScrollingView, MapTileMaker } from 'three-fauxel-tiles/rendering'
```

The broader compatibility surface used by the visual test harness now lives at:

```ts
import lib from 'three-fauxel-tiles/legacy'
```

The default package is now intentionally renderer-focused. Demo input helpers,
URL parameter readers, and game-specific sprite presets stay in
`three-fauxel-tiles/legacy` until there is a clear engine-level reason to
promote them.

Historical scene experiments that still live under `src` are archived at
`src/legacy/scenes/` and are not part of the supported package surface.

Small integration examples live in:

- `examples/integrate-root.ts`
- `examples/integrate-rendering.ts`

# Approach and History

This is an attempt to combine these ideas:

- Deferred rendering (PBR)
- Just-in-time model prerendering into atlases
- Only updating parts of the world that move past the scroll edge (old NES games)
- making adjacency rules to control/generate tiles with correct transitions to their neighbors

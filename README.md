# three-fauxel-tiles
A experiment to render faux PBR pixel-art, by prerendering it onto a tile atlas, just in time.

## Development

This repo now uses `npm` as the canonical package manager.

```bash
npm install
npm run lib:build
npm run test:build
```

The browser harness is built into `test-www/`. The distributable library is emitted to `lib/` with declarations in `types/`.


# Approach and History #
This is an attempt to combine these ideas:

- Deferred rendering (PBR)
- Just-in-time model prerendering into atlases
- Only updating parts of the world that move past the scroll edge (old NES games)
- making adjacency rules to control/generate tiles with correct transitions to their neighbors

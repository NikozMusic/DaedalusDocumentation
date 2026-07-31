# BlockAPI

The `block` API lets you inspect and manipulate blocks directly by world position.

| Function                           | Description                                                             |
|------------------------------------|-------------------------------------------------------------------------|
| block.get(level, x, y, z)          | Returns the block id at a position (e.g. `"minecraft:stone"`)           |
| block.set(level, x, y, z, blockId) | Sets the block at a position. Errors if `blockId` is invalid or unknown |
| block.isAir(level, x, y, z)        | Returns whether the block at a position is air                          |
| block.destroy(level, x, y, z)      | Naturally destroys the block (drops items, plays effects)               |
| block.getLight(level, x, y, z)     | Returns the combined block/sky light level at a position, `0-15`        |
| block.canSeeSky(level, x, y, z)    | Returns whether the position has a clear view of the sky                |

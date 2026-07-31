# RaycastAPI

The `raycast` API provides block, entity, and combined raycasting.

Every function returns a single result table known as `RaycastResult` that is shaped like this:

```lua
{
  hit = boolean,
  type = "block"|"entity"|"none",
  x = number, y = number, z = number,  -- world-space hit position
  distance = number,                   -- distance from the ray's start

  blockId = string,  -- only present when type == "block"
  face = string,     -- only present when type == "block" (e.g. "up", "north")

  entity = Entity,   -- only present when type == "entity"
}
```

| Function                                                                            | Description                                                                                                                        |
|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| raycast.blockRay(level, x1, y1, z1, x2, y2, z2, includeFluids)                      | Casts a ray and checks for block collisions only                                                                                   |
| raycast.entityRay(level, x1, y1, z1, x2, y2, z2, exclude)                           | Casts a ray and checks for entity collisions only (closest hit wins)                                                               |
| raycast.ray(level, x1, y1, z1, x2, y2, z2, exclude, includeFluids, includeEntities) | Casts a ray checking both blocks and entities, returning whichever is hit first                                                    |
| raycast.rayFromEntity(entity, distance, includeEntities, includeFluids)             | Convenience cast from an entity's eyes along its current look direction. Automatically excludes the source entity from entity hits |
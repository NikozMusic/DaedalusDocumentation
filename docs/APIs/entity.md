# EntityAPI

The `entity` API provides entity management and data retrieval.

| Function                             | Description                                                                      |
|--------------------------------------|----------------------------------------------------------------------------------|
| entity.getByUUID(level, uuid)        | Returns the Entity literal of the passed UUID in the given ServerLevel           |
| entity.getBySelector(selector)       | Returns a table of entities matching a target selector string (`@e`, `@a`, etc.) |
| entity.getUUID(entity)               | Returns the UUID string of the given entity                                      |
| entity.getWorld(entity)              | Returns the current ServerLevel the given entity is in                           |
| entity.getVelocity(entity)           | Returns the given entity's `x, y, z` movement vector                             |
| entity.setVelocity(entity, x, y, z)  | Sets the `x, y, z` movement vector of the given entity                           |
| entity.addVelocity(entity, x, y, z)  | Adds the given `x, y, z` values to the entity's current movement vector          |
| entity.getPosition(entity)           | Returns the `x, y, z` position of the entity                                     |
| entity.setPosition(entity, x, y, z)  | Sets the `x, y, z` position of the entity                                        |
| entity.kill(entity)                  | Kills the given entity                                                           |
| entity.getHeldItem(entity)           | Returns the ItemStack of what the target entity is holding                       |
| entity.isPlayer(entity)              | Returns whether the given entity is a player                                     |
| entity.getHealth(entity)             | Returns the current health of the entity                                         |
| entity.setHealth(entity, number)     | Sets the current health of the entity, capped at their max health                |
| entity.getMaxHealth(entity)          | Returns the current maximum health of the entity                                 |
| entity.getName(entity)               | Returns the String name of the entity                                            |

`entity.getBySelector` can also be called with an anchor entity as the first argument (`entity.getBySelector(anchor, selector)`), which resolves the selector relative to that entity's position instead of the world origin.
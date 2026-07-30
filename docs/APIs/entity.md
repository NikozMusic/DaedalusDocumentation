# EntityAPI

The `entity` API provides entity management and data retrieval.

|                                  |                                                                         |
|----------------------------------|-------------------------------------------------------------------------|
| entity.getByUUID(level, uuid)    | Returns the Entity literal of the passed UUID in the given ServerLevel  |
| entity.getUUID(entity)           | Returns the UUID string of the given entity                             |
| entity.getWorld(entity)          | Returns the current ServerLevel the given entity is in                  |
| entity.getVelocity(entity)       | Returns the given entity's `x, y, z` movement vector                    |
| entity.setVelocity(x, y, z)      | Sets the `x, y, z` movement vector of the given entity                  |
| entity.addVelocity(x, y, z)      | Adds the given `x, y, z` values to the entity's current movement vector |
| entity.getPosition(entity)       | Returns the `x, y, z` position of the entity                            |
| entity.setPosition(entity)       | Sets the `x, y, z` position of the entity                               |
| entity.kill(entity)              | Kills the given entity                                                  |
| entity.getHeldItem(entity)       | Returns the ItemStack of what the target entity is holding              |
| entity.getHealth(entity)         | Returns the current health of the entity                                |
| entity.setHealth(entity, number) | Sets the current health of the entity capped at their max health        |
| entity.getMaxHealth(entity)      | Returns the current maximum health of the entity                        |
| entity.getName(entity)           | Returns the String name of the entity                                   |
# Shared Types

These are the Minecraft values used throughout the Daedalus APIs. These values are also referred to as "Literals" as that is the Java name for them.

| Type           | Description                                                                         |
|----------------|-------------------------------------------------------------------------------------|
| `Entity`       | Any live Minecraft entity, including mobs, item entities, projectiles, and players. |
| `ServerPlayer` | A connected player. It can be used anywhere an `Entity` is accepted.                |
| `ServerLevel`  | A Minecraft world or dimension, such as the overworld, nether, or end.              |
| `ItemStack`    | A Minecraft item stack, including its count, type, and component data.              |
| `Menu`         | A Daedalus chest GUI created by `gui.open`                                          |

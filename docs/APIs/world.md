# WorldAPI

The `world` API provides world-level effects and state, such as explosions, sounds, particles, weather, and difficulty.

| Function                                                                   | Description                                                                                        |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| world.explode(level, x, y, z, power, fire, breakBlocks)                    | Creates an explosion at a position. `fire` defaults to `false`, `breakBlocks` defaults to `true`   |
| world.playSound(level, x, y, z, soundId, volume, pitch, category)          | Plays a sound at a position, broadcast to every player in range. `category` defaults to `"master"` |
| world.spawnParticles(level, particleId, x, y, z, count, dx, dy, dz, speed) | Spawns particles at a position. Only simple (parameterless) particle types are supported           |
| world.getTime(level)                                                       | Returns the level's current game time, in ticks (0-24000)                                          |
| world.isRaining(level)                                                     | Returns whether it is currently raining in the level                                               |
| world.isThundering(level)                                                  | Returns whether it is currently thundering in the level                                            |
| world.setDifficulty(level, difficulty)                                     | Sets the level's difficulty (`"peaceful"`, `"easy"`, `"normal"`, `"hard"`)                         |
| world.getDifficulty(level)                                                 | Returns the level's current difficulty                                                             |